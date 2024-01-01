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
        Schema::create('members', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('orgid');
            $table->unsignedBigInteger('purokid');
            $table->unsignedBigInteger('statid');
            $table->string("firstname");
            $table->string("middlename");
            $table->string("lastname");
            $table->string("gender");
            $table->string("birthday");
            $table->string("address");
           
            $table->timestamps();
            //FOREIGN KEY CONSTRAINTS
            $table->foreign('orgid')->references('id')->on('organizations')->onDelete('cascade')->onUpdate("cascade");
            $table->foreign('purokid')->references('id')->on('purok')->onDelete('cascade')->onUpdate("cascade");
            $table->foreign('statid')->references('id')->on('transfer')->onDelete('cascade')->onUpdate("cascade");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('members');
    }
};