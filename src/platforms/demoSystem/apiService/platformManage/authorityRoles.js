/* eslint-disable */
import httpRequest from '@/utils/http-request';
/**
 * @title 修改 - 角色
 * @path /v1/management/roles/{id}
 * @param params.id A unique integer value identifying this role. 
 * 
 */
export const putManagementRolesById = (params, options = {}) => {
  const interfaceData={
  "title": "修改 - 角色",
  "method": "PUT",
  "path": "/v1/management/roles/{id}",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/management/roles/{id}",
  "status": "undone",
  "req_params": [
    {
      "_id": "63806599d023fa36cf46c461",
      "name": "id",
      "desc": "A unique integer value identifying this role."
    }
  ],
  "req_query": [],
  "req_body": {
    "id": {
      "title": "ID",
      "type": "integer",
      "readOnly": true
    },
    "users": {
      "description": "使用者",
      "type": "array",
      "items": {
        "required": [
          "name",
          "type"
        ],
        "type": "object",
        "properties": {
          "id": {
            "title": "ID",
            "type": "integer",
            "readOnly": true
          },
          "name": {
            "title": "用户名",
            "type": "string",
            "maxLength": 255,
            "minLength": 1
          },
          "type": {
            "title": "组织",
            "type": "string",
            "enum": [
              "LO",
              "PH",
              "HS",
              "JP"
            ]
          },
          "display_name": {
            "title": "显示名称",
            "type": "string",
            "readOnly": true,
            "minLength": 1
          }
        },
        "$$ref": "#/definitions/RoleUser"
      },
      "readOnly": true
    },
    "menus": {
      "description": "菜單",
      "type": "array",
      "items": {
        "required": [
          "children",
          "name"
        ],
        "type": "object",
        "properties": {
          "id": {
            "title": "ID",
            "type": "integer",
            "readOnly": true
          },
          "children": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {},
              "$$ref": "#/definitions/Recursive"
            }
          },
          "name": {
            "title": "名称",
            "type": "string",
            "maxLength": 100,
            "minLength": 1
          },
          "key1": {
            "title": "Key1",
            "type": "string",
            "maxLength": 100
          },
          "key2": {
            "title": "Key2",
            "type": "string",
            "maxLength": 100
          },
          "sort": {
            "title": "Sort",
            "type": "integer",
            "maximum": 2147483647,
            "minimum": -2147483648
          },
          "type": {
            "title": "Type",
            "type": "integer",
            "enum": [
              1,
              2,
              3
            ]
          },
          "created_at": {
            "title": "创建时间",
            "type": "string",
            "format": "date-time",
            "readOnly": true
          },
          "updated_at": {
            "title": "编集时间",
            "type": "string",
            "format": "date-time",
            "readOnly": true
          },
          "creator": {
            "title": "创建者",
            "type": "string",
            "readOnly": true,
            "minLength": 1,
            "x-nullable": true
          },
          "updater": {
            "title": "编辑者",
            "type": "string",
            "readOnly": true,
            "minLength": 1,
            "x-nullable": true
          },
          "parent": {
            "title": "Parent",
            "type": "integer",
            "x-nullable": true
          }
        },
        "$$ref": "#/definitions/RoleMenuTree"
      },
      "readOnly": true
    },
    "menu_ids": {
      "description": "菜單 IDs",
      "type": "array",
      "items": {
        "description": "菜單 IDs",
        "type": "integer"
      },
      "uniqueItems": true
    },
    "created_at": {
      "title": "创建时间",
      "type": "string",
      "format": "date-time",
      "readOnly": true
    },
    "updated_at": {
      "title": "编集时间",
      "type": "string",
      "format": "date-time",
      "readOnly": true
    },
    "creator": {
      "title": "创建者",
      "type": "string",
      "readOnly": true,
      "minLength": 1,
      "x-nullable": true
    },
    "updater": {
      "title": "编辑者",
      "type": "string",
      "readOnly": true,
      "minLength": 1,
      "x-nullable": true
    },
    "name": {
      "title": "名称",
      "type": "string",
      "maxLength": 255,
      "minLength": 1
    },
    "comment": {
      "title": "描述",
      "type": "string",
      "maxLength": 255
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 修改 - 角色 [PATCH]
 * @path /v1/management/roles/{id}
 * @param params.id A unique integer value identifying this role. 
 * 
 */
export const patchManagementRolesById = (params, options = {}) => {
  const interfaceData={
  "title": "修改 - 角色 [PATCH]",
  "method": "PATCH",
  "path": "/v1/management/roles/{id}",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/management/roles/{id}",
  "status": "undone",
  "req_params": [
    {
      "_id": "638065aad023fad0a046c463",
      "name": "id",
      "desc": "A unique integer value identifying this role."
    }
  ],
  "req_query": [],
  "req_body": {
    "id": {
      "title": "ID",
      "type": "integer",
      "readOnly": true
    },
    "users": {
      "description": "使用者",
      "type": "array",
      "items": {
        "required": [
          "name",
          "type"
        ],
        "type": "object",
        "properties": {
          "id": {
            "title": "ID",
            "type": "integer",
            "readOnly": true
          },
          "name": {
            "title": "用户名",
            "type": "string",
            "maxLength": 255,
            "minLength": 1
          },
          "type": {
            "title": "组织",
            "type": "string",
            "enum": [
              "LO",
              "PH",
              "HS",
              "JP"
            ]
          },
          "display_name": {
            "title": "显示名称",
            "type": "string",
            "readOnly": true,
            "minLength": 1
          }
        },
        "$$ref": "#/definitions/RoleUser"
      },
      "readOnly": true
    },
    "menus": {
      "description": "菜單",
      "type": "array",
      "items": {
        "required": [
          "children",
          "name"
        ],
        "type": "object",
        "properties": {
          "id": {
            "title": "ID",
            "type": "integer",
            "readOnly": true
          },
          "children": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {},
              "$$ref": "#/definitions/Recursive"
            }
          },
          "name": {
            "title": "名称",
            "type": "string",
            "maxLength": 100,
            "minLength": 1
          },
          "key1": {
            "title": "Key1",
            "type": "string",
            "maxLength": 100
          },
          "key2": {
            "title": "Key2",
            "type": "string",
            "maxLength": 100
          },
          "sort": {
            "title": "Sort",
            "type": "integer",
            "maximum": 2147483647,
            "minimum": -2147483648
          },
          "type": {
            "title": "Type",
            "type": "integer",
            "enum": [
              1,
              2,
              3
            ]
          },
          "created_at": {
            "title": "创建时间",
            "type": "string",
            "format": "date-time",
            "readOnly": true
          },
          "updated_at": {
            "title": "编集时间",
            "type": "string",
            "format": "date-time",
            "readOnly": true
          },
          "creator": {
            "title": "创建者",
            "type": "string",
            "readOnly": true,
            "minLength": 1,
            "x-nullable": true
          },
          "updater": {
            "title": "编辑者",
            "type": "string",
            "readOnly": true,
            "minLength": 1,
            "x-nullable": true
          },
          "parent": {
            "title": "Parent",
            "type": "integer",
            "x-nullable": true
          }
        },
        "$$ref": "#/definitions/RoleMenuTree"
      },
      "readOnly": true
    },
    "menu_ids": {
      "description": "菜單 IDs",
      "type": "array",
      "items": {
        "description": "菜單 IDs",
        "type": "integer"
      },
      "uniqueItems": true
    },
    "created_at": {
      "title": "创建时间",
      "type": "string",
      "format": "date-time",
      "readOnly": true
    },
    "updated_at": {
      "title": "编集时间",
      "type": "string",
      "format": "date-time",
      "readOnly": true
    },
    "creator": {
      "title": "创建者",
      "type": "string",
      "readOnly": true,
      "minLength": 1,
      "x-nullable": true
    },
    "updater": {
      "title": "编辑者",
      "type": "string",
      "readOnly": true,
      "minLength": 1,
      "x-nullable": true
    },
    "name": {
      "title": "名称",
      "type": "string",
      "maxLength": 255,
      "minLength": 1
    },
    "comment": {
      "title": "描述",
      "type": "string",
      "maxLength": 255
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 删除 - 角色 By ID
 * @path /v1/management/roles/{id}
 * @param params.id A unique integer value identifying this role. 
 * 
 */
export const deleteManagementRolesById = (params, options = {}) => {
  const interfaceData={
  "title": "删除 - 角色 By ID",
  "method": "DELETE",
  "path": "/v1/management/roles/{id}",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/management/roles/{id}",
  "status": "undone",
  "req_params": [
    {
      "_id": "63802ae8d023fa84ce46c005",
      "name": "id",
      "desc": "A unique integer value identifying this role."
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 获取 - 角色 By ID
 * @path /v1/management/roles/{id}
 * @param params.id A unique integer value identifying this role. 
 * 
 */
export const getManagementRolesById = (params, options = {}) => {
  const interfaceData={
  "title": "获取 - 角色 By ID",
  "method": "GET",
  "path": "/v1/management/roles/{id}",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/management/roles/{id}",
  "status": "undone",
  "req_params": [
    {
      "_id": "63884a9ad023fa58da46d691",
      "name": "id",
      "desc": "A unique integer value identifying this role."
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 创建 - 角色
 * @path /v1/management/roles
 * 
 */
export const postManagementRoles = (params, options = {}) => {
  const interfaceData={
  "title": "创建 - 角色",
  "method": "POST",
  "path": "/v1/management/roles",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/management/roles",
  "status": "undone",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "id": {
      "title": "ID",
      "type": "integer",
      "readOnly": true
    },
    "users": {
      "description": "使用者",
      "type": "array",
      "items": {
        "required": [
          "id",
          "name",
          "type",
          "display_name"
        ],
        "type": "object",
        "properties": {
          "id": {
            "title": "ID",
            "type": "integer",
            "readOnly": true
          },
          "name": {
            "title": "用户名",
            "type": "string",
            "maxLength": 255,
            "minLength": 1
          },
          "type": {
            "title": "组织",
            "type": "string",
            "enum": [
              "LO",
              "PH",
              "HS",
              "JP"
            ]
          },
          "display_name": {
            "title": "显示名称",
            "type": "string",
            "readOnly": true,
            "minLength": 1
          }
        },
        "$$ref": "#/definitions/RoleUser"
      },
      "readOnly": true
    },
    "menus": {
      "description": "菜單",
      "type": "array",
      "items": {
        "required": [
          "id",
          "children",
          "name",
          "key1",
          "key2",
          "sort",
          "type",
          "created_at",
          "updated_at",
          "creator",
          "updater",
          "parent"
        ],
        "type": "object",
        "properties": {
          "id": {
            "title": "ID",
            "type": "integer",
            "readOnly": true
          },
          "children": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {},
              "$$ref": "#/definitions/Recursive",
              "required": []
            }
          },
          "name": {
            "title": "名称",
            "type": "string",
            "maxLength": 100,
            "minLength": 1
          },
          "key1": {
            "title": "Key1",
            "type": "string",
            "maxLength": 100
          },
          "key2": {
            "title": "Key2",
            "type": "string",
            "maxLength": 100
          },
          "sort": {
            "title": "Sort",
            "type": "integer",
            "maximum": 2147483647,
            "minimum": -2147483648
          },
          "type": {
            "title": "Type",
            "type": "integer",
            "enum": [
              1,
              2,
              3
            ]
          },
          "created_at": {
            "title": "创建时间",
            "type": "string",
            "format": "date-time",
            "readOnly": true
          },
          "updated_at": {
            "title": "编集时间",
            "type": "string",
            "format": "date-time",
            "readOnly": true
          },
          "creator": {
            "title": "创建者",
            "type": "string",
            "readOnly": true,
            "minLength": 1,
            "x-nullable": true
          },
          "updater": {
            "title": "编辑者",
            "type": "string",
            "readOnly": true,
            "minLength": 1,
            "x-nullable": true
          },
          "parent": {
            "title": "Parent",
            "type": "integer",
            "x-nullable": true
          }
        },
        "$$ref": "#/definitions/RoleMenuTree"
      },
      "readOnly": true
    },
    "menu_ids": {
      "description": "菜單 IDs",
      "type": "array",
      "items": {
        "description": "菜單 IDs",
        "type": "integer"
      },
      "uniqueItems": true
    },
    "created_at": {
      "title": "创建时间",
      "type": "string",
      "format": "date-time",
      "readOnly": true
    },
    "updated_at": {
      "title": "编集时间",
      "type": "string",
      "format": "date-time",
      "readOnly": true
    },
    "creator": {
      "title": "创建者",
      "type": "string",
      "readOnly": true,
      "minLength": 1,
      "x-nullable": true
    },
    "updater": {
      "title": "编辑者",
      "type": "string",
      "readOnly": true,
      "minLength": 1,
      "x-nullable": true
    },
    "name": {
      "title": "名称",
      "type": "string",
      "maxLength": 255,
      "minLength": 1
    },
    "comment": {
      "title": "描述",
      "type": "string",
      "maxLength": 255
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 获取 - 角色列表
 * @path /v1/management/roles
 * @param params.search A search term. required
 * @param params.ordering Which field to use when ordering the results. required
 * @param params.page A page number within the paginated result set. required
 * @param params.page_size Number of results to return per page. required
 * 
 */
export const getManagementRoles = (params, options = {}) => {
  const interfaceData={
  "title": "获取 - 角色列表",
  "method": "GET",
  "path": "/v1/management/roles",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/management/roles",
  "status": "undone",
  "req_params": [],
  "req_query": [
    {
      "required": "0",
      "_id": "63884adcd023fa90cd46d696",
      "name": "search",
      "desc": "A search term."
    },
    {
      "required": "0",
      "_id": "63884adcd023fafb4046d695",
      "name": "ordering",
      "desc": "Which field to use when ordering the results."
    },
    {
      "required": "1",
      "_id": "63884adcd023fa69b346d694",
      "name": "page",
      "desc": "A page number within the paginated result set."
    },
    {
      "required": "1",
      "_id": "63884adcd023fa76c346d693",
      "name": "page_size",
      "desc": "Number of results to return per page."
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
