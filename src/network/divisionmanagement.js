import {request} from "./request";

export function divisionManagement() {
  return request({
    url: '/department/get/list',
  })
}

export function staffManagement() {
  return request({
    url: '/employee/query/list'
  })
}

export function save(message) {
  if(message==''){
    alert('部门不能为空')
    return
  }
  return request({
    url: '/department/save',
    method: 'post',
    data: {
      departmentName: message
    }
  })
}

export function redelete(departmentId) {
  return request({
    url: '/department/delete',
    method: 'post',
    data: JSON.stringify(departmentId),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

export function inquire(indexId) {
  return request({
    url: '/department/get/one/department/' + `${indexId}`,
    method: 'post'
  })
}

export function recompose(indexId, name) {
  return request({
    url: '/department/update',
    method: 'post',
    data: {
      departmentId: indexId,
      departmentName: name
    }
  })
}

export function addEmployee(employee) {
  const {birthday,departId,id,name,sex,workTime}=employee
  if (birthday==''||departId==0||name==''||workTime==''){
    alert('不能为空')
    return
  }
  return request({
    url: '/employee/save',
    method: 'post',
    data: employee
    //   {
    //   birthday:employee.birthday,
    //   departId:employee.departId,
    //   id:employee.id,
    //   name:employee.name,
    //   sex:employee.sex,
    //   workTime:employee.workTime
    // }
  })
}

export function remove(id) {
  return request({
    url: '/employee/delete',
    method: 'post',
    data: JSON.stringify(id),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

export function queryStaff(indexiid) {
  return request({
    url: '/employee/get/' + `${indexiid}`,
    method: 'get'
  })
}

export function modifyTheEmployee(employee) {
  return request({
    url: '/employee/update',
    method: 'post',
    data: employee
  })
}

export function loginInformation(user) {
  if (user.employeeAccountName==''||user.employeeAccountPassword==''){
    alert('不能为空')
  }else {
    return request({
      url: '/account/login',
      method: 'post',
      data: {
        employeeAccountName:user.employeeAccountName,
        employeeAccountPassword:user.employeeAccountPassword
      }
      // headers: {
      //   'Content-Type': 'text/plain'
      // }
    })
  }
}

export function reSuccessfully(user) {
  return request({
    url: '/account/register',
    method: 'post',
    data: {
      employeeAccountName:user.employeeAccountName,
      employeeAccountPassword:user.employeeAccountPassword
    }
    // headers: {
    //   'Content-Type': 'text/plain'
    // }
  })
}
