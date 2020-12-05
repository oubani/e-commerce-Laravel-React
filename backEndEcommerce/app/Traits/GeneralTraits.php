<?php
namespace App\Traits;

trait GeneralTraits{

    public function returnData($key,$data,$message){
        return response()->json([
            $key=>$data,
            'message'=>$message
        ]);
    }

    public function returnError($error,$message){
        return response()->json([
            'error'=>$error,
            'message'=>$message
        ]);
    }

}
