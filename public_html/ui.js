$( document ).ready( function() {
    create_row('Principal', 'text', '');
    create_row('Interest', 'text', '');
    create_row('Years', 'text', '');
    create_row('', 'button', 'Calculate');
    create_row('', 'label', 'Monthly Payment: $ 0.00');
});

function create_row(label, input, caption){
    /*
     *  Build Bootstrap Row Elements
     */
    var row = create_element('div', {'class': 'row', 'style': 'padding: 5px 50px 5px 50px;'});
    $('body').append(row);
    
    var outer_div = null;
    if( input == 'label' ){ outer_div = create_element('div', {'class': 'alert alert-primary', 'role': 'alert', 'id': input, 'style': 'width: 100%;'}, caption); }
    else{ outer_div = create_element('div', {'class': 'input-group'}, ''); }
    
    $(row).append(outer_div);
    
    if( label ){
        var inner_div = create_element('div', {'class': 'input-group-append'}, '');
        $(outer_div).append(inner_div);
        
        $(inner_div).append( create_element('span', {'class': 'input-group-text', 'style': 'width: 150px;'}, label) );
    }
    
    if( input == 'text' ){ $(outer_div).append( create_element('input', {'class': 'form-control', 'type': input, 'id': label}) ); }
    else if( input == 'button' ){ $(outer_div).append( create_element('button', {'class': 'btn btn-success', 'type': input, 'onclick': 'calculate_payment()'}, caption) ); }
    else if( input == 'link' ){ $(outer_div).append( create_element('a', {'class': 'btn btn-primary stretched-link', 'href': '#'}, caption)); }
}

function create_element(object_type, attributes, innerText){
    /*
     *  Build Element
     */
    var element = document.createElement(object_type);
    for( var index in attributes ){
        element.setAttribute( index, attributes[index] ); 
    }
    
    if( innerText ){ element.innerHTML = innerText; }
    
    return element;
}

function calculate_payment(){
    
    var loan = $('#Principal').val();
    var interest = $('#Interest').val();
    var period = $('#Years').val();
        
    loan || ( loan = 0 )
    interest || ( interest = 0 )
    period || ( period = 0 );
    
    interest /= 12*100;
    period *= 12;
    
    result = 0;
    if( interest == 0 ){ result = loan/(period); }
    else{ result = loan*Math.pow(1 + interest, period)*(interest)/[Math.pow(1+interest, period)-1] }
    
    $('#label').text('Monthly Payment: $ ' + String(result.toFixed(2)));

    create_row('', 'link', 'Apply for Loan');
}