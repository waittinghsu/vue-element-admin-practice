/* eslint-disable */
import httpRequest from '@/utils/http-request';
/**
 * @title 修改 - 权限
 * @path /v1/management/permissions/{id}
 * @param params.id A unique integer value identifying this permission. 
 * 
 */
export const putManagementPermissionsById = (params, options = {}) => {
  const interfaceData={
  "title": "修改 - 权限",
  "method": "PUT",
  "path": "/v1/management/permissions/{id}",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/management/permissions/{id}",
  "status": "undone",
  "req_params": [
    {
      "_id": "63802cfcd023fa65a046c03d",
      "name": "id",
      "desc": "A unique integer value identifying this permission."
    }
  ],
  "req_query": [],
  "req_body": {
    "id": {
      "title": "ID",
      "type": "integer",
      "readOnly": true
    },
    "roles": {
      "description": "角色",
      "type": "array",
      "items": {
        "description": "角色",
        "required": [
          "name"
        ],
        "type": "object",
        "properties": {
          "id": {
            "title": "ID",
            "type": "integer",
            "readOnly": true
          },
          "name": {
            "title": "名称",
            "type": "string",
            "maxLength": 255,
            "minLength": 1
          }
        },
        "$$ref": "#/definitions/PermissionRole"
      },
      "readOnly": true
    },
    "role_ids": {
      "description": "角色 IDs",
      "type": "array",
      "items": {
        "description": "角色 IDs",
        "type": "integer"
      },
      "uniqueItems": true
    },
    "products": {
      "description": "产品",
      "type": "array",
      "items": {
        "description": "产品",
        "required": [
          "name"
        ],
        "type": "object",
        "properties": {
          "id": {
            "title": "ID",
            "type": "integer",
            "readOnly": true
          },
          "name": {
            "title": "名称",
            "type": "string",
            "maxLength": 255,
            "minLength": 1
          }
        },
        "$$ref": "#/definitions/PermissionProduct"
      },
      "readOnly": true
    },
    "product_ids": {
      "description": "产品 IDs",
      "type": "array",
      "items": {
        "description": "产品 IDs",
        "type": "integer"
      },
      "uniqueItems": true
    },
    "type_display": {
      "title": "Type display",
      "description": "类型显示",
      "type": "string",
      "readOnly": true,
      "minLength": 1
    },
    "users": {
      "description": "具有此权限的使用者",
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
        "$$ref": "#/definitions/PermissionUser"
      },
      "readOnly": true
    },
    "depts": {
      "description": "具有此权限的群组",
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
            "title": "组名",
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
        "$$ref": "#/definitions/PermissionDept"
      },
      "readOnly": true
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
      "title": "用户或小组名称",
      "type": "string",
      "readOnly": true,
      "minLength": 1
    },
    "type": {
      "title": "类型",
      "type": "integer",
      "enum": [
        1,
        2,
        3
      ],
      "readOnly": true
    },
    "user": {
      "title": "域帐号",
      "type": "integer",
      "x-nullable": true
    },
    "dept": {
      "title": "域部门",
      "type": "integer",
      "x-nullable": true
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 修改 - 权限 [PATCH]
 * @path /v1/management/permissions/{id}
 * @param params.id A unique integer value identifying this permission. 
 * 
 */
export const patchManagementPermissionsById = (params, options = {}) => {
  const interfaceData={
  "title": "修改 - 权限 [PATCH]",
  "method": "PATCH",
  "path": "/v1/management/permissions/{id}",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/management/permissions/{id}",
  "status": "undone",
  "req_params": [
    {
      "_id": "63802d1cd023fa93eb46c03f",
      "name": "id",
      "desc": "A unique integer value identifying this permission."
    }
  ],
  "req_query": [],
  "req_body": {
    "id": {
      "title": "ID",
      "type": "integer",
      "readOnly": true
    },
    "roles": {
      "description": "角色",
      "type": "array",
      "items": {
        "description": "角色",
        "required": [
          "name"
        ],
        "type": "object",
        "properties": {
          "id": {
            "title": "ID",
            "type": "integer",
            "readOnly": true
          },
          "name": {
            "title": "名称",
            "type": "string",
            "maxLength": 255,
            "minLength": 1
          }
        },
        "$$ref": "#/definitions/PermissionRole"
      },
      "readOnly": true
    },
    "role_ids": {
      "description": "角色 IDs",
      "type": "array",
      "items": {
        "description": "角色 IDs",
        "type": "integer"
      },
      "uniqueItems": true
    },
    "products": {
      "description": "产品",
      "type": "array",
      "items": {
        "description": "产品",
        "required": [
          "name"
        ],
        "type": "object",
        "properties": {
          "id": {
            "title": "ID",
            "type": "integer",
            "readOnly": true
          },
          "name": {
            "title": "名称",
            "type": "string",
            "maxLength": 255,
            "minLength": 1
          }
        },
        "$$ref": "#/definitions/PermissionProduct"
      },
      "readOnly": true
    },
    "product_ids": {
      "description": "产品 IDs",
      "type": "array",
      "items": {
        "description": "产品 IDs",
        "type": "integer"
      },
      "uniqueItems": true
    },
    "type_display": {
      "title": "Type display",
      "description": "类型显示",
      "type": "string",
      "readOnly": true,
      "minLength": 1
    },
    "users": {
      "description": "具有此权限的使用者",
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
        "$$ref": "#/definitions/PermissionUser"
      },
      "readOnly": true
    },
    "depts": {
      "description": "具有此权限的群组",
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
            "title": "组名",
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
        "$$ref": "#/definitions/PermissionDept"
      },
      "readOnly": true
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
      "title": "用户或小组名称",
      "type": "string",
      "readOnly": true,
      "minLength": 1
    },
    "type": {
      "title": "类型",
      "type": "integer",
      "enum": [
        1,
        2,
        3
      ],
      "readOnly": true
    },
    "user": {
      "title": "域帐号",
      "type": "integer",
      "x-nullable": true
    },
    "dept": {
      "title": "域部门",
      "type": "integer",
      "x-nullable": true
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 删除 - 权限 By ID
 * @path /v1/management/permissions/{id}
 * @param params.id A unique integer value identifying this permission. 
 * 
 */
export const deleteManagementPermissionsById = (params, options = {}) => {
  const interfaceData={
  "title": "删除 - 权限 By ID",
  "method": "DELETE",
  "path": "/v1/management/permissions/{id}",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/management/permissions/{id}",
  "status": "undone",
  "req_params": [
    {
      "_id": "63802fb0d023fac8fb46c042",
      "name": "id",
      "desc": "A unique integer value identifying this permission."
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 获取 - 权限 By ID
 * @path /v1/management/permissions/{id}
 * @param params.id A unique integer value identifying this permission. 
 * 
 */
export const getManagementPermissionsById = (params, options = {}) => {
  const interfaceData={
  "title": "获取 - 权限 By ID",
  "method": "GET",
  "path": "/v1/management/permissions/{id}",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/management/permissions/{id}",
  "status": "undone",
  "req_params": [
    {
      "_id": "63806d2cd023fa71e446c594",
      "name": "id",
      "desc": "A unique integer value identifying this permission."
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 创建 - 权限
 * @path /v1/management/permissions
 * 
 */
export const postManagementPermissions = (params, options = {}) => {
  const interfaceData={
  "title": "创建 - 权限",
  "method": "POST",
  "path": "/v1/management/permissions",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/management/permissions",
  "status": "undone",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "id": {
      "title": "ID",
      "type": "integer",
      "readOnly": true
    },
    "roles": {
      "description": "角色",
      "type": "array",
      "items": {
        "description": "角色",
        "required": [
          "name"
        ],
        "type": "object",
        "properties": {
          "id": {
            "title": "ID",
            "type": "integer",
            "readOnly": true
          },
          "name": {
            "title": "名称",
            "type": "string",
            "maxLength": 255,
            "minLength": 1
          }
        },
        "$$ref": "#/definitions/PermissionRole"
      },
      "readOnly": true
    },
    "role_ids": {
      "description": "角色 IDs",
      "type": "array",
      "items": {
        "description": "角色 IDs",
        "type": "integer"
      },
      "uniqueItems": true
    },
    "products": {
      "description": "产品",
      "type": "array",
      "items": {
        "description": "产品",
        "required": [
          "name"
        ],
        "type": "object",
        "properties": {
          "id": {
            "title": "ID",
            "type": "integer",
            "readOnly": true
          },
          "name": {
            "title": "名称",
            "type": "string",
            "maxLength": 255,
            "minLength": 1
          }
        },
        "$$ref": "#/definitions/PermissionProduct"
      },
      "readOnly": true
    },
    "product_ids": {
      "description": "产品 IDs",
      "type": "array",
      "items": {
        "description": "产品 IDs",
        "type": "integer"
      },
      "uniqueItems": true
    },
    "type_display": {
      "title": "Type display",
      "description": "类型显示",
      "type": "string",
      "readOnly": true,
      "minLength": 1
    },
    "users": {
      "description": "具有此权限的使用者",
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
        "$$ref": "#/definitions/PermissionUser"
      },
      "readOnly": true
    },
    "depts": {
      "description": "具有此权限的群组",
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
            "title": "组名",
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
        "$$ref": "#/definitions/PermissionDept"
      },
      "readOnly": true
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
      "title": "用户或小组名称",
      "type": "string",
      "readOnly": true,
      "minLength": 1
    },
    "type": {
      "title": "类型",
      "type": "integer",
      "enum": [
        1,
        2,
        3
      ],
      "readOnly": true
    },
    "user": {
      "title": "域帐号",
      "type": "integer",
      "x-nullable": true
    },
    "dept": {
      "title": "域部门",
      "type": "integer",
      "x-nullable": true
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 获取 - 权限列表
 * @path /v1/management/permissions
 * @param params.name  required
 * @param params.roles  required
 * @param params.type  required
 * @param params.products  required
 * @param params.user  required
 * @param params.dept  required
 * @param params.search A search term. required
 * @param params.ordering Which field to use when ordering the results. required
 * @param params.page A page number within the paginated result set. required
 * @param params.page_size Number of results to return per page. required
 * 
 */
export const getManagementPermissions = (params, options = {}) => {
  const interfaceData={
  "title": "获取 - 权限列表",
  "method": "GET",
  "path": "/v1/management/permissions",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/management/permissions",
  "status": "undone",
  "req_params": [],
  "req_query": [
    {
      "required": "0",
      "_id": "63806bebd023fab5af46c58a",
      "name": "name",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "63806bebd023fa673c46c589",
      "name": "roles",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "63806bebd023fa69b046c588",
      "name": "type",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "63806bebd023fad3dc46c587",
      "name": "products",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "63806bebd023faa0c346c586",
      "name": "user",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "63806bebd023fa086846c585",
      "name": "dept",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "63806bebd023fa710446c584",
      "name": "search",
      "desc": "A search term."
    },
    {
      "required": "0",
      "_id": "63806bebd023fa3bb146c583",
      "name": "ordering",
      "desc": "Which field to use when ordering the results."
    },
    {
      "required": "1",
      "_id": "63806bebd023fa6d5c46c582",
      "name": "page",
      "desc": "A page number within the paginated result set."
    },
    {
      "required": "1",
      "_id": "63806bebd023fa4a4846c581",
      "name": "page_size",
      "desc": "Number of results to return per page."
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 删除 - 权限（批量）
 * @path /v1/management/permissions/batch
 * 
 */
export const deleteManagementPermissionsBatch = (params, options = {}) => {
  const interfaceData={
  "title": "删除 - 权限（批量）",
  "method": "DELETE",
  "path": "/v1/management/permissions/batch",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/management/permissions/batch",
  "status": "undone",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "ids": {
      "description": "IDs",
      "type": "array",
      "items": {
        "description": "IDs",
        "type": "integer"
      },
      "uniqueItems": true
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 获取 - 权限选项
 * @path /v1/management/permissions/choices
 * 
 */
export const getManagementPermissionsChoices = (params, options = {}) => {
  const interfaceData={
  "title": "获取 - 权限选项",
  "method": "GET",
  "path": "/v1/management/permissions/choices",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/management/permissions/choices",
  "status": "undone",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 获取 - 权限选项_copy
 * @path /v1/management/permissions/choices_1669360047616
 * 
 */
export const getManagementPermissionsChoices1669360047616 = (params, options = {}) => {
  const interfaceData={
  "title": "获取 - 权限选项_copy",
  "method": "GET",
  "path": "/v1/management/permissions/choices_1669360047616",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/management/permissions/choices_1669360047616",
  "status": "undone",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
