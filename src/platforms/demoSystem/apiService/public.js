/* eslint-disable */
import httpRequest from '@/utils/http-request';
/**
 * @title 获取 - 健康状态
 * @path /v1/common/health
 * 
 */
export const getCommonHealth = (params, options = {}) => {
  const interfaceData={
  "title": "获取 - 健康状态",
  "method": "GET",
  "path": "/v1/common/health",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/common/health",
  "status": "undone",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 获取 - 当前使用者
 * @path /v1/common/userinfo
 * 
 */
export const getCommonUserinfo = (params, options = {}) => {
  const interfaceData={
  "title": "获取 - 当前使用者",
  "method": "GET",
  "path": "/v1/common/userinfo",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/common/userinfo",
  "status": "undone",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 获取 - 当前版本
 * @path /v1/common/version
 * 
 */
export const getCommonVersion = (params, options = {}) => {
  const interfaceData={
  "title": "获取 - 当前版本",
  "method": "GET",
  "path": "/v1/common/version",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/v1/common/version",
  "status": "undone",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
/**
 * @title 用戶 - 登出
 * @path /api/v1/common/logout
 * 
 */
export const postCommonLogout = (params, options = {}) => {
  const interfaceData={
  "title": "用戶 - 登出",
  "method": "POST",
  "path": "/api/v1/common/logout",
  "mock_path": "https://yapi.bagunai.com/mock/221/api/api/v1/common/logout",
  "status": "undone",
  "req_params": [],
  "req_query": [],
  "req_body": {}
};
  return httpRequest(interfaceData,params, options)
}
  
