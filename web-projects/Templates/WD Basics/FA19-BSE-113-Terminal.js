$(document).ready(function(){

    $("form").submit(function(e) {
      e.preventDefault();
      var name=$("input[name='name']").val();
      var email=$("input[name='email']").val();
      var gender=$("input[name='phone']").val();
    
       $(".data-table tbody").append("<tr data-name='"+name+"' data-email='"+email+"' data-gender='"+gender+"'><td>"+name+"</td><td>"+email+"</td><td><button class='btn btn-danger btn-lg btn-delete mr-3' type='button'>Delete</button><button class='btn btn-info btn-lg btn-edit' type='button'>Edit</button></td><td>"+gender+"</td></tr>");
    
       $("input[name='']").val("");
    });
    
    $('body').on('click','.btn-delete',function() {
      $(this).parents('tr').remove();
    });
    
    $('body').on('click','.btn-edit',function() {
      var name=$(this).parents('tr').attr('data-name');
      var email=$(this).parents('tr').attr('data-email');
      var phone=$(this).parents('tr').attr('data-phone');
    
      $(this).parents('tr').find('td:eq(0)').html("<input name='edit_text' value='"+name+"'>");
      $(this).parents('tr').find('td:eq(1)').html("<input name='edit_email' value='"+email+"'>");
    
      $(this).parents('tr').find('td:eq(2)').prepend("<button type='button' class='btn btn-info btn-lg btn-update mr-3'>Update</button>");
      $(this).parents('tr').find('td:eq(3)').html("<input name='edit_phone' value='"+gender+"'>");
    
      $(this).hide()
    });
    
    $('body').on('click','.btn-update',function() {
      var name=$(this).parents('tr').find("input[name='edit_text']").val();
      var email=$(this).parents('tr').find("input[name='edit_email']").val();
    
      $(this).parents('tr').find('td:eq(0)').text(name);
      $(this).parents('tr').find('td:eq(1)').text(email);
    
      $(this).parents('tr').attr('data-name',name);
      $(this).parents('tr').attr('data-email',email);
    
      $(this).parents('tr').find('.btn-edit').show();
      $(this).parents('tr').find('.btn-update').remove();
    
    })
    })
    