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
        Schema::create('memberactivity', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("memberid");
            $table->unsignedBigInteger("actid");
            $table->string("notes");
            $table->timestamps();

            $table->foreign('memberid')->references('id')->on('members')->onDelete('cascade')->onUpdate("cascade");
            $table->foreign('actid')->references('id')->on('activity')->onDelete('cascade')->onUpdate("cascade");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('memberactivity');
    }
};