Alert = {
  // success, info, warning, danger
  add: function (msg, type) {
    if(msg.reason){
      msg = msg.reason.toString()
    } else {
      msg = msg.toString()
    }

  $('#flash-alert').html('<div class="alert alert-'+type+' alert-dismissable" id="flash-alert-msg"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + msg +' </div>');    window.scrollTo(0,0);
  },
  clear: function(){
    $('#flash-alert').html('');
  }
};