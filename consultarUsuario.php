<?php
include('conexion.php');
        $USUARIO = 'nruiz';
        $result = mysqli_query($connect,"SELECT * FROM T_M_USER WHERE usuario='$USUARIO'");
        $qCol= mysqli_field_count($connect);
    echo $qCol."!";

    while ($row = mysqli_fetch_array($result)) 
    {
    for($i=0;$i<$qCol;$i++)
        {
        echo $row[$i]."!";
        }
    }
?>