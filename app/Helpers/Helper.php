<?php
namespace App\Helpers;

class Helper{
    Public static function IDgenerator($model, $trow, $length=4, $prefix){

    }
    Public static function renameFile($path, $filename){
        if($pos = strrpos($filename,'.')){
            $name = substr($filename, 0,$pos);
            $ext = substr($filename, $pos);
        }
        else{
            $name = $filename;
        }
        $newpath = $path.'.'.$filename;
        $newname = $filename;
        $counter = 0;
        while (file_exists($newpath)){
            $newname = $name.'_'.$counter.$ext;
            $newpath = $path.'/'.$newname;
            $counter++;
        }
        return $newname;
    }
}
