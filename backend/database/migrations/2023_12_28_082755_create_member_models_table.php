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
            $table->unsignedBigInteger('org_id');
            $table->unsignedBigInteger('purok_id');
            $table->unsignedBigInteger('group_id');
            $table->string("firstname");
            $table->string("middlename");
            $table->string("lastname");
            $table->string("gender");
            $table->string("birthday");
            $table->string("address");
            $table->string("status");
           
            $table->timestamps();
            //FOREIGN KEY CONSTRAINTS
            $table->foreign('org_id')->references('id')->on('organizations')->onDelete('cascade')->onUpdate("cascade");
            $table->foreign('purok_id')->references('id')->on('purok')->onDelete('cascade')->onUpdate("cascade");
            $table->foreign('group_id')->references('id')->on('groups')->onDelete('cascade')->onUpdate("cascade");
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