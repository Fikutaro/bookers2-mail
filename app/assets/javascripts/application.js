// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require jquery
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .




$(function(){
  $(document).on('turbolinks:load',()=>{
    $('user_postal_code').jpostal({
      postcode : [
        '#user_postal_code'
        ],
        address: {
         "#user_prefecture_code": "%3",
         "#user_city"           : "%4%5",
         "#user_street"         : "%6%7"
        }
    });
  });
});

// # 入力項目フォーマット
// #   %3  都道府県
// #   %4  市区町村
// #   %5  町域
// #   %6  大口事業所の番地 ex)100-6080
// #   %7  大口事業所の名称
