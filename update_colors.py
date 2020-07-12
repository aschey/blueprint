import os
root_dir = '.'
ignore_colors = []
while True:
    found = False
    for dir_name, subdir_list, file_list in os.walk(root_dir):
        for fname in file_list:
            if fname.endswith('.scss'):
                with open(os.path.join(dir_name, fname), 'r') as f:
                    lines = f.readlines()
                    for line in lines:
                        tokens = line.split(None, 1)
                        if len(tokens) < 2:
                            continue
                        field = tokens[0].replace(':', '').strip()
                        value = tokens[1].replace(';', '').replace('!default', '').strip()
                        if field.startswith('$') and ((value.startswith('rgba(') or value == 'none' or value in ignore_colors) and field not in ignore_colors):
                            found = True
                            ignore_colors.append(field)
    if found == False:
        break
def replace_colors(subdir):
    for dir_name, subdir_list, file_list in os.walk(subdir):
        for fname in file_list:
            if fname.endswith('.scss'):
                newlines = []
                with open(os.path.join(dir_name, fname), 'r') as f:
                    lines = f.readlines()
                    for line in lines:
                        tokens = line.split(None, 1)
                        if len(tokens) < 2:
                            newlines.append(line)
                            continue
                        field = tokens[0]
                        value = tokens[1].strip()
                        new_color = None
                        important = False
                        if not field.startswith('$') and (field == 'color:' or field.endswith('-color:') \
                            or field == 'background:' or field.endswith('-background:') \
                            or field == 'border'):
                            value = value.replace(';', '')
                            if value.endswith('!important'):
                                important = True
                                value = value.replace('!important', '')
                                value = value.strip()
                            if (value.startswith('$') or value not in ['inherit', 'none', 'transparent']) and not value.startswith('rgba(') \
                                and value not in ignore_colors:
                                new_color = f'rgba({value}, 1){" !important" if important else ""}'
                                newlines.append(line.replace(f'{value}{" !important" if important else ""}', new_color))
                        if new_color == None:
                            newlines.append(line)
                        
                with open(os.path.join(dir_name, fname), 'w') as f:
                    f.writelines(newlines)

replace_colors('packages/core')
replace_colors('packages/datetime')
replace_colors('packages/icons')
replace_colors('packages/select')
replace_colors('packages/table')
replace_colors('packages/timezone')