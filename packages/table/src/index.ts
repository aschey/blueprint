/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export { Cell, CellProps, ICellProps, ICellRenderer, CellRenderer } from "./cell/cell";

export { EditableCell, IEditableCellProps, EditableCellProps } from "./cell/editableCell";

export { JSONFormat, IJSONFormatProps, JSONFormatProps } from "./cell/formats/jsonFormat";

export {
    TruncatedPopoverMode,
    TruncatedFormat,
    TruncatedFormatProps,
    ITruncatedFormatProps,
} from "./cell/formats/truncatedFormat";

export { Column, ColumnProps, IColumnProps } from "./column";

export { AnyRect, Clipboard, Grid, Rect, RenderMode, Utils } from "./common/index";

export { IDraggableProps, Draggable } from "./interactions/draggable";

export {
    IClientCoordinates,
    ClientCoordinates,
    ICoordinateData,
    CoordinateData,
    IDragHandler,
    DragHandler,
} from "./interactions/dragTypes";

export { CopyCellsMenuItem, IContextMenuRenderer, ContextMenuRenderer, IMenuContext } from "./interactions/menus";

export { ILockableLayout, IResizeHandleProps, Orientation, ResizeHandle } from "./interactions/resizeHandle";

export { ISelectableProps, IDragSelectableProps, DragSelectable } from "./interactions/selectable";

export { IColumnHeaderRenderer } from "./headers/columnHeader";

export { ColumnHeaderCell, IColumnHeaderCellProps, HorizontalCellDivider } from "./headers/columnHeaderCell";

export { IRowHeaderCellProps, RowHeaderCell } from "./headers/rowHeaderCell";

export { IEditableNameProps, EditableNameProps, EditableName } from "./headers/editableName";

export {
    ColumnLoadingOption,
    ICellInterval,
    IRegion,
    Region,
    IStyledRegionGroup,
    RegionCardinality,
    Regions,
    RowLoadingOption,
    SelectionModes,
    TableLoadingOption,
} from "./regions";

// eslint-disable-next-line deprecation/deprecation
export { ITableProps, TableProps, Table } from "./table";
