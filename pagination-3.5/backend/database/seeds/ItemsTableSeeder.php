<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ItemsTableSeeder extends Seeder
{
    public function run()
    {
        for ($i = 0; $i < 100; $i++) {
            DB::table('items')->insert([
                'label' => 'Item ' . ($i + 1),
                'quantity' => rand(1, 10)
            ]);
        }
    }
}
