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
            $table->unsignedBigInteger("member_id");
            $table->unsignedBigInteger("act_id");
            $table->string("notes");
            $table->timestamps();

            $table->foreign('member_id')->references('id')->on('members')->onDelete('cascade')->onUpdate("cascade");
            $table->foreign('act_id')->references('id')->on('activity')->onDelete('cascade')->onUpdate("cascade");
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