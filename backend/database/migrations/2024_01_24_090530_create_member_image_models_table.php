<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('member_images', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("member_id");
            $table->string("image_name");
            $table->string("image_path");
            $table->timestamps();

            $table->foreign('member_id')->references('id')->on('members')->onDelete('cascade')->onUpdate("cascade");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('member_images');
    }
};