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
        Schema::create('memberduties', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("tung_id");
            $table->unsignedBigInteger("member_id");
            $table->timestamps();

            $table->foreign('tung_id')->references('id')->on('tungkulin')->onDelete('cascade')->onUpdate("cascade");
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
        Schema::dropIfExists('memberduties');
    }
};