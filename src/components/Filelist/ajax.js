import request from "superagent";
var url = "http://101.200.129.112:9527/file/";
export  function get(path,success,error){
    request.get(url+"get/").query({path:path}).end(function(err,res){
        if(err){
            return error(err);
        }
        if(res.ok){
            return success(res.body);
        }
    });
}
export function rename(path,name,success,error){
    request.get(url+"rename/").query({path:path,name:name}).end(function(err,res){
        if(err){
            return error(err);
        }
        if(res.ok){
            return success(res.body);
        }
    });
}
export function mkdir(path,name,success,error){
    request.get(url+"mkdir/").query({path:path,name:name}).end(function(err,res){
        if(err){
            return error(err);
        }
        if(res.ok){
            return success(res.body);
        }
    });
}
export function remove(path,success,error){
    request.get(url+"remove/").query({path:path,name:name}).end(function(err,res){
        if(err){
            return error(err);
        }
        if(res.ok){
            return success(res.body);
        }
    });
}
export function past    (oldpath,newpath,name,type,success,error){
    request.get(url+type).query({old_path:oldpath,new_path:newpath+"/"+name}).end(function(err,res){
        if(err){
            return error(err);
        }
        if(res.ok){
            return success(res.body);
        }
    });
}