<?php

if(isset($_POST['submit'])){

    if(empty($_POST['detail'])){
        header("location:index.php");
        exit();
    }

    $host = "localhost";
    $user = "root";
    $password = "";
    $db_name = "enrich";
    $details = $_POST["detail"];

    $connection = mysqli_connect($host,$user,$password,$db_name);

    if(!$connection){
        die("failed to connect to the database");
    }

    $sql = "insert into students(details) value(?)";
    $stmt = mysqli_prepare($connection,$sql);
    mysqli_stmt_bind_param($stmt,"s",$details);
    mysqli_stmt_execute($stmt);

    mysqli_close($connection);

    header("location:index.php");
}else{
    header("location:index.php");
}