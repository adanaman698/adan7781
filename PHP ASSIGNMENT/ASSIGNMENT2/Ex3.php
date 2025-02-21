<?php

$a = 5;
$b = 7;

$addition = $a + $b;
echo "Addition: $a + $b = $addition\n";

$subtraction = $a - $b;
echo "Subtraction: $a - $b = $subtraction\n";


$multiplication = $a * $b;
echo "Multiplication: $a * $b = $multiplication\n";

if ($b != 0) {
    $division = $a / $b;
    echo "Division: $a / $b = $division\n";
} else {
    echo "Division: Cannot divide by zero\n";
}

$modulus = $a % $b;
echo "Modulus: $a % $b = $modulus\n";
?>
