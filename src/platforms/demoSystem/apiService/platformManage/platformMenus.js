/* eslint-disable */
import httpRequest from '@/utils/http-request';
/**
 * @title 修改 - 菜单
 * @path /v1/common/menus/{id}
 * @param params.id A unique integer value identifying this menu. 
 * 
 */
export const putCommonMenusById = (params, options = {}) => {
  const interfaceData={
  "title": "修改 - 菜单",
  "method": "PUT",
  "path": "/v1/common/menus/{id}",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/common/menus/{id}",
  "status": "undone",
  "req_params": [
    {
      "_id": "63802ae8d023fade9a46c00f",
      "name": "id",
      "desc": "A unique integer value identifying this menu."
    }
  ],
  "req_query": [],
  "req_body": {
    "id": {
      "title": "ID",
      "type": "integer",
      "readOnly": true
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
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 修改 - 菜单 [PATCH]
 * @path /v1/common/menus/{id}
 * @param params.id A unique integer value identifying this menu. 
 * 
 */
export const patchCommonMenusById = (params, options = {}) => {
  const interfaceData={
  "title": "修改 - 菜单 [PATCH]",
  "method": "PATCH",
  "path": "/v1/common/menus/{id}",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/common/menus/{id}",
  "status": "undone",
  "req_params": [
    {
      "_id": "63802ae8d023fa3f9146c011",
      "name": "id",
      "desc": "A unique integer value identifying this menu."
    }
  ],
  "req_query": [],
  "req_body": {
    "id": {
      "title": "ID",
      "type": "integer",
      "readOnly": true
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
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 删除 - 菜单
 * @path /v1/common/menus/{id}
 * @param params.id A unique integer value identifying this menu. 
 * 
 */
export const deleteCommonMenusById = (params, options = {}) => {
  const interfaceData={
  "title": "删除 - 菜单",
  "method": "DELETE",
  "path": "/v1/common/menus/{id}",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/common/menus/{id}",
  "status": "undone",
  "req_params": [
    {
      "_id": "63802ae8d023fafd5546c013",
      "name": "id",
      "desc": "A unique integer value identifying this menu."
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 获取 - 菜单 By ID
 * @path /v1/common/menus/{id}
 * @param params.id A unique integer value identifying this menu. 
 * 
 */
export const getCommonMenusById = (params, options = {}) => {
  const interfaceData={
  "title": "获取 - 菜单 By ID",
  "method": "GET",
  "path": "/v1/common/menus/{id}",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/common/menus/{id}",
  "status": "undone",
  "req_params": [
    {
      "_id": "63802ae8d023fa693246c015",
      "name": "id",
      "desc": "A unique integer value identifying this menu."
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 创建 - 菜单
 * @path /v1/common/menus
 * 
 */
export const postCommonMenus = (params, options = {}) => {
  const interfaceData={
  "title": "创建 - 菜单",
  "method": "POST",
  "path": "/v1/common/menus",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/common/menus",
  "status": "undone",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "id": {
      "title": "ID",
      "type": "integer",
      "readOnly": true
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
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 获取 - 菜单列表 (flatten)
 * @path /v1/common/menus
 * @param params.search A search term. required
 * @param params.ordering Which field to use when ordering the results. required
 * @param params.page A page number within the paginated result set. required
 * @param params.page_size Number of results to return per page. required
 * 
 */
export const getCommonMenus = (params, options = {}) => {
  const interfaceData={
  "title": "获取 - 菜单列表 (flatten)",
  "method": "GET",
  "path": "/v1/common/menus",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/common/menus",
  "status": "undone",
  "req_params": [],
  "req_query": [
    {
      "required": "0",
      "_id": "63802ae8d023fa50d346c01c",
      "name": "search",
      "desc": "A search term."
    },
    {
      "required": "0",
      "_id": "63802ae8d023fa004946c01b",
      "name": "ordering",
      "desc": "Which field to use when ordering the results."
    },
    {
      "required": "1",
      "_id": "63802ae8d023fa57b146c01a",
      "name": "page",
      "desc": "A page number within the paginated result set."
    },
    {
      "required": "1",
      "_id": "63802ae8d023fa9a1d46c019",
      "name": "page_size",
      "desc": "Number of results to return per page."
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 获取 - 菜单 (binary tree)
 * @path /v1/common/menus/tree
 * @param params.search A search term. required
 * @param params.ordering Which field to use when ordering the results. required
 * @param params.page A page number within the paginated result set. required
 * @param params.page_size Number of results to return per page. required
 * 
 */
export const getCommonMenusTree = (params, options = {}) => {
  const interfaceData={
  "title": "获取 - 菜单 (binary tree)",
  "method": "GET",
  "path": "/v1/common/menus/tree",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/common/menus/tree",
  "status": "undone",
  "req_params": [],
  "req_query": [
    {
      "required": "0",
      "_id": "63805da4d023fa308946c44b",
      "name": "search",
      "desc": "A search term."
    },
    {
      "required": "0",
      "_id": "63805da4d023fa2b0046c44a",
      "name": "ordering",
      "desc": "Which field to use when ordering the results."
    },
    {
      "required": "1",
      "_id": "63805da4d023fac2e346c449",
      "name": "page",
      "desc": "A page number within the paginated result set."
    },
    {
      "required": "1",
      "_id": "63805da4d023fac01d46c448",
      "name": "page_size",
      "desc": "Number of results to return per page."
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
