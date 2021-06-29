/*
 * TESLER-UI
 * Copyright (C) 2018-2021 Tesler Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Descriptor enabling operation on widget:
 * - string (if you just need to include / exclude operation or groups)
 * - object, if this is group in which you want to selectively include or exclude the operation
 */
export declare type OperationInclusionDescriptor =
    | string
    | {
          /**
           * Type of transaction; a string that uniquely identifies the operation on the widget
           */
          type: OperationType
          /**
           * List of included operations or groups operations
           */
          include?: OperationInclusionDescriptor[]
          /**
           * List of excluded operations or groups operations
           */
          exclude?: OperationType[]
      }

/**
 * TODO: Rename to CoreOperationRole in 2.0.0
 */
export declare enum OperationTypeCrud {
    create = 'create',
    save = 'save',
    delete = 'delete',
    associate = 'associate',
    cancelCreate = 'cancel-create',
    fileUpload = 'file-upload'
}

/**
 * String that uniquely identifies an operation on widget
 */
export declare type OperationType = OperationTypeCrud | string
