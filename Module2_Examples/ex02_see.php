<?php
date_default_timezone_set("America/New_York");
header("content-Type: text/event-stream\n\n");

$count = 0;
while(1)[
    $count++;
    $curDate = date('; jS \of F Y, h:i:s A');

    echo 'data: this is a messahe #'. $count . ' - ',$curDate."\n\n";

    if($count == 10){
        echo 'data: Close' . "\n\n";
    }

    ob_end_flush;
    flush();
    sleep(5);
]
?>