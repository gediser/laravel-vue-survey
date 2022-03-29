<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSurveyQuestionAnswersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('survey_question_answers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('survey_question_id');
            $table->foreign('survey_question_id')->references('id')->on('survey_questions');
            //$table->foreignIdFor(\App\Models\SurveyQuestion::class, 'survey_question_id');
            $table->foreignId('survey_answer_id');
            $table->foreign('survey_answer_id')->references('id')->on('survey_answers');
            //$table->foreignIdFor(\App\Models\SurveyAnswer::class, 'survey_answer_id');
            $table->text('answer');
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
        Schema::dropIfExists('survey_question_answers');
    }
}
