<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrderProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_products', function (Blueprint $table) {
            $table->increments('id_order_product');

            $table->integer('id_order');
            $table->foreign('id_order')
            ->references('id_order')
            ->on('order')
            ->onDelete('cascade');

            $table->integer('id_product');
            $table->foreign('id_product')
            ->references('id_product')
            ->on('product')
            ->onDelete('cascade');

            $table->integer('qt_product');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order_products');
    }
}
