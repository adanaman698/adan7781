<?php

$colors = array("Red", "Blue", "Green", "Yellow", "Purple");

echo "Color names in the array:\n";
foreach ($colors as $color) {
    echo $color . "\n";
}

$colors[] = "Orange";

echo "\nUpdated list of colors:\n";
foreach ($colors as $color) {
    echo $color . "\n";
}
?>
