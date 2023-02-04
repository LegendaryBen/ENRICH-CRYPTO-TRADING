<?php

$host = "localhost";
$user = "root";
$password = "";
$db_name = "enrich";
$connection = mysqli_connect($host,$user,$password,$db_name);

if(!$connection){
    die("failed to connect to the database");
}

$sql = "select * from students";

$stmt = mysqli_prepare($connection,$sql);

mysqli_stmt_execute($stmt);

$result = mysqli_stmt_get_result($stmt);

$final = mysqli_fetch_all($result);

header("Content-Type:application/xls");
header("Content-Disposition:attachment;filename=Enrich.xls");

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <table style="border:1px solid black">
    <thead style="border:1px solid black">
        <tr>
            <th style="border:1px solid black">ID</th>
            <th style="border:1px solid black">DETAILS</th>
        </tr>
    </thead>
    <tbody>
        <?php for($i = 0;$i < count($final);$i++) : ?>
        <tr>
            <td style="border:1px solid black"><?php echo $final[$i][0];?></td>
            <td style="border:1px solid black"> <?php echo $final[$i][1];?></td>
        </tr>
        <?php endfor;?>
    </tbody>
   </table> 
</body>
</html>