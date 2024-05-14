/* eslint-disable */
import httpRequest from '@/utils/http-request';
/**
 * @title 修改 - 字典
 * @path /v1/common/dictionaries/{id}
 * @param params.id A unique integer value identifying this 数据字典. 
 * 
 */
export const putCommonDictionariesById = (params, options = {}) => {
  const interfaceData={
  "title": "修改 - 字典",
  "method": "PUT",
  "path": "/v1/common/dictionaries/{id}",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/common/dictionaries/{id}",
  "status": "undone",
  "req_params": [
    {
      "_id": "63ad463ad023fa7cc647144c",
      "name": "id",
      "desc": "A unique integer value identifying this 数据字典."
    }
  ],
  "req_query": [],
  "req_body": {
    "name": {
      "title": "*名称",
      "type": "string",
      "maxLength": 100,
      "minLength": 1
    },
    "comment": {
      "title": "备注",
      "type": "string",
      "minLength": 1,
      "x-nullable": true
    },
    "sort": {
      "title": "排序",
      "type": "integer",
      "maximum": 2147483647,
      "minimum": -2147483648
    },
    "module": {
      "title": "*所属模块",
      "type": "integer",
      "x-nullable": true
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 修改 - 字典 [PATCH]
 * @path /v1/common/dictionaries/{id}
 * @param params.id A unique integer value identifying this 数据字典. 
 * 
 */
export const patchCommonDictionariesById = (params, options = {}) => {
  const interfaceData={
  "title": "修改 - 字典 [PATCH]",
  "method": "PATCH",
  "path": "/v1/common/dictionaries/{id}",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/common/dictionaries/{id}",
  "status": "undone",
  "req_params": [
    {
      "_id": "63ad4646d023fa310b47144e",
      "name": "id",
      "desc": "A unique integer value identifying this 数据字典."
    }
  ],
  "req_query": [],
  "req_body": {
    "name": {
      "title": "*名称",
      "type": "string",
      "maxLength": 100,
      "minLength": 1
    },
    "comment": {
      "title": "备注",
      "type": "string",
      "minLength": 1,
      "x-nullable": true
    },
    "sort": {
      "title": "排序",
      "type": "integer",
      "maximum": 2147483647,
      "minimum": -2147483648
    },
    "module": {
      "title": "*所属模块",
      "type": "integer",
      "x-nullable": true
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 删除 - 字典 By ID
 * @path /v1/common/dictionaries/{id}
 * @param params.id A unique integer value identifying this 数据字典. 
 * 
 */
export const deleteCommonDictionariesById = (params, options = {}) => {
  const interfaceData={
  "title": "删除 - 字典 By ID",
  "method": "DELETE",
  "path": "/v1/common/dictionaries/{id}",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/common/dictionaries/{id}",
  "status": "undone",
  "req_params": [
    {
      "_id": "63ad457ed023fa79a2471443",
      "name": "id",
      "desc": "A unique integer value identifying this 数据字典."
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 获取 - 字典 By ID
 * @path /v1/common/dictionaries/{id}
 * @param params.id A unique integer value identifying this 数据字典. 
 * 
 */
export const getCommonDictionariesById = (params, options = {}) => {
  const interfaceData={
  "title": "获取 - 字典 By ID",
  "method": "GET",
  "path": "/v1/common/dictionaries/{id}",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/common/dictionaries/{id}",
  "status": "undone",
  "req_params": [
    {
      "_id": "63ad3da5d023fa781647140d",
      "name": "id",
      "desc": "A unique integer value identifying this 数据字典."
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 修改 - 字典模组
 * @path /v1/common/dicmodules/{id}
 * @param params.id A unique integer value identifying this 数据字典. 
 * 
 */
export const putCommonDicmodulesById = (params, options = {}) => {
  const interfaceData={
  "title": "修改 - 字典模组",
  "method": "PUT",
  "path": "/v1/common/dicmodules/{id}",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/common/dicmodules/{id}",
  "status": "undone",
  "req_params": [
    {
      "_id": "63ad4655d023facf0c471450",
      "name": "id",
      "desc": "A unique integer value identifying this 数据字典."
    }
  ],
  "req_query": [],
  "req_body": {
    "name": {
      "title": "*名称",
      "type": "string",
      "maxLength": 100,
      "minLength": 1
    },
    "comment": {
      "title": "备注",
      "type": "string",
      "minLength": 1,
      "x-nullable": true
    },
    "sort": {
      "title": "排序",
      "type": "integer",
      "maximum": 2147483647,
      "minimum": -2147483648
    },
    "parent": {
      "title": "*上级",
      "type": "integer",
      "x-nullable": true
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 修改 - 字典模组 [PATCH]
 * @path /v1/common/dicmodules/{id}
 * @param params.id A unique integer value identifying this 数据字典. 
 * 
 */
export const patchCommonDicmodulesById = (params, options = {}) => {
  const interfaceData={
  "title": "修改 - 字典模组 [PATCH]",
  "method": "PATCH",
  "path": "/v1/common/dicmodules/{id}",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/common/dicmodules/{id}",
  "status": "undone",
  "req_params": [
    {
      "_id": "63ad4663d023fa6017471452",
      "name": "id",
      "desc": "A unique integer value identifying this 数据字典."
    }
  ],
  "req_query": [],
  "req_body": {
    "name": {
      "title": "*名称",
      "type": "string",
      "maxLength": 100,
      "minLength": 1
    },
    "comment": {
      "title": "备注",
      "type": "string",
      "minLength": 1,
      "x-nullable": true
    },
    "sort": {
      "title": "排序",
      "type": "integer",
      "maximum": 2147483647,
      "minimum": -2147483648
    },
    "parent": {
      "title": "*上级",
      "type": "integer",
      "x-nullable": true
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 删除 - 字典模组
 * @path /v1/common/dicmodules/{id}
 * @param params.id A unique integer value identifying this 数据字典. 
 * 
 */
export const deleteCommonDicmodulesById = (params, options = {}) => {
  const interfaceData={
  "title": "删除 - 字典模组",
  "method": "DELETE",
  "path": "/v1/common/dicmodules/{id}",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/common/dicmodules/{id}",
  "status": "undone",
  "req_params": [
    {
      "_id": "63ad45a4d023fa8ab1471445",
      "name": "id",
      "desc": "A unique integer value identifying this 数据字典."
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 获取 - 字典模组 By ID
 * @path /v1/common/dicmodules/{id}
 * @param params.id A unique integer value identifying this 数据字典. 
 * 
 */
export const getCommonDicmodulesById = (params, options = {}) => {
  const interfaceData={
  "title": "获取 - 字典模组 By ID",
  "method": "GET",
  "path": "/v1/common/dicmodules/{id}",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/common/dicmodules/{id}",
  "status": "undone",
  "req_params": [
    {
      "_id": "63ad448ed023fa71fe471425",
      "name": "id",
      "desc": "A unique integer value identifying this 数据字典."
    }
  ],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 修改 - 字典模组（批量）
 * @path /v1/common/dicmodules/batch
 * 
 */
export const putCommonDicmodulesBatch = (params, options = {}) => {
  const interfaceData={
  "title": "修改 - 字典模组（批量）",
  "method": "PUT",
  "path": "/v1/common/dicmodules/batch",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/common/dicmodules/batch",
  "status": "undone",
  "req_params": [],
  "req_query": []
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 修改 - 字典模组（批量） [PATCH]
 * @path /v1/common/dicmodules/batch
 * 
 */
export const patchCommonDicmodulesBatch = (params, options = {}) => {
  const interfaceData={
  "title": "修改 - 字典模组（批量） [PATCH]",
  "method": "PATCH",
  "path": "/v1/common/dicmodules/batch",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/common/dicmodules/batch",
  "status": "undone",
  "req_params": [],
  "req_query": []
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 删除 - 字典模组（批量）
 * @path /v1/common/dicmodules/batch
 * 
 */
export const deleteCommonDicmodulesBatch = (params, options = {}) => {
  const interfaceData={
  "title": "删除 - 字典模组（批量）",
  "method": "DELETE",
  "path": "/v1/common/dicmodules/batch",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/common/dicmodules/batch",
  "status": "undone",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "ids": {
      "type": "array",
      "items": {
        "type": "integer"
      },
      "uniqueItems": true
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 修改 - 字典（批量）
 * @path /v1/common/dictionaries/batch
 * 
 */
export const putCommonDictionariesBatch = (params, options = {}) => {
  const interfaceData={
  "title": "修改 - 字典（批量）",
  "method": "PUT",
  "path": "/v1/common/dictionaries/batch",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/common/dictionaries/batch",
  "status": "undone",
  "req_params": [],
  "req_query": []
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 修改 - 字典（批量） [PATCH]
 * @path /v1/common/dictionaries/batch
 * 
 */
export const patchCommonDictionariesBatch = (params, options = {}) => {
  const interfaceData={
  "title": "修改 - 字典（批量） [PATCH]",
  "method": "PATCH",
  "path": "/v1/common/dictionaries/batch",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/common/dictionaries/batch",
  "status": "undone",
  "req_params": [],
  "req_query": []
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 删除 - 字典（批量）
 * @path /v1/common/dictionaries/batch
 * 
 */
export const deleteCommonDictionariesBatch = (params, options = {}) => {
  const interfaceData={
  "title": "删除 - 字典（批量）",
  "method": "DELETE",
  "path": "/v1/common/dictionaries/batch",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/common/dictionaries/batch",
  "status": "undone",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "ids": {
      "type": "array",
      "items": {
        "type": "integer"
      },
      "uniqueItems": true
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 创建 - 字典
 * @path /v1/common/dictionaries
 * 
 */
export const postCommonDictionaries = (params, options = {}) => {
  const interfaceData={
  "title": "创建 - 字典",
  "method": "POST",
  "path": "/v1/common/dictionaries",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/common/dictionaries",
  "status": "undone",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "name": {
      "title": "*名称",
      "type": "string",
      "maxLength": 100,
      "minLength": 1
    },
    "parameter_name": {
      "title": "参数名称",
      "type": "string",
      "maxLength": 100,
      "minLength": 1
    },
    "comment": {
      "title": "备注",
      "type": "string",
      "minLength": 1,
      "x-nullable": true
    },
    "sort": {
      "title": "排序",
      "type": "integer",
      "maximum": 2147483647,
      "minimum": -2147483648
    },
    "module": {
      "title": "*所属模块",
      "type": "integer",
      "x-nullable": true
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 获取 - 字典列表
 * @path /v1/common/dictionaries
 * @param params.parent  required
 * @param params.module  required
 * @param params.search A search term. required
 * @param params.ordering Which field to use when ordering the results. required
 * @param params.page A page number within the paginated result set. required
 * @param params.page_size Number of results to return per page. required
 * 
 */
export const getCommonDictionaries = (params, options = {}) => {
  const interfaceData={
  "title": "获取 - 字典列表",
  "method": "GET",
  "path": "/v1/common/dictionaries",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/common/dictionaries",
  "status": "undone",
  "req_params": [],
  "req_query": [
    {
      "required": "0",
      "_id": "63ad4526d023fa8410471441",
      "name": "parent",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "63ad4526d023faebf0471440",
      "name": "module",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "63ad4526d023fa2c4947143f",
      "name": "search",
      "desc": "A search term."
    },
    {
      "required": "0",
      "_id": "63ad4526d023fa815647143e",
      "name": "ordering",
      "desc": "Which field to use when ordering the results."
    },
    {
      "required": "1",
      "_id": "63ad4526d023fa51a347143d",
      "name": "page",
      "desc": "A page number within the paginated result set."
    },
    {
      "required": "1",
      "_id": "63ad4526d023fa609947143c",
      "name": "page_size",
      "desc": "Number of results to return per page."
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 创建 - 字典模组
 * @path /v1/common/dicmodules
 * 
 */
export const postCommonDicmodules = (params, options = {}) => {
  const interfaceData={
  "title": "创建 - 字典模组",
  "method": "POST",
  "path": "/v1/common/dicmodules",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/common/dicmodules",
  "status": "undone",
  "req_params": [],
  "req_query": [],
  "req_body": {
    "name": {
      "title": "*名称",
      "type": "string",
      "maxLength": 100,
      "minLength": 1
    },
    "parameter_name": {
      "title": "参数名称",
      "type": "string",
      "maxLength": 100,
      "minLength": 1
    },
    "comment": {
      "title": "备注",
      "type": "string",
      "minLength": 1,
      "x-nullable": true
    },
    "sort": {
      "title": "排序",
      "type": "integer",
      "maximum": 2147483647,
      "minimum": -2147483648
    },
    "parent": {
      "title": "*上级",
      "type": "integer",
      "x-nullable": true
    }
  }
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 获取 - 字典模组列表
 * @path /v1/common/dicmodules
 * @param params.parent  required
 * @param params.module  required
 * @param params.search A search term. required
 * @param params.ordering Which field to use when ordering the results. required
 * @param params.page A page number within the paginated result set. required
 * @param params.page_size Number of results to return per page. required
 * 
 */
export const getCommonDicmodules = (params, options = {}) => {
  const interfaceData={
  "title": "获取 - 字典模组列表",
  "method": "GET",
  "path": "/v1/common/dicmodules",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/common/dicmodules",
  "status": "undone",
  "req_params": [],
  "req_query": [
    {
      "required": "0",
      "_id": "63ad44c4d023fae980471433",
      "name": "parent",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "63ad44c4d023fa51ac471432",
      "name": "module",
      "desc": ""
    },
    {
      "required": "0",
      "_id": "63ad44c4d023faf3af471431",
      "name": "search",
      "desc": "A search term."
    },
    {
      "required": "0",
      "_id": "63ad44c4d023fa0a50471430",
      "name": "ordering",
      "desc": "Which field to use when ordering the results."
    },
    {
      "required": "1",
      "_id": "63ad44c4d023fa6e3c47142f",
      "name": "page",
      "desc": "A page number within the paginated result set."
    },
    {
      "required": "1",
      "_id": "63ad44c4d023fa8db247142e",
      "name": "page_size",
      "desc": "Number of results to return per page."
    }
  ],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
