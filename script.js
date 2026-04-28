
let pages = [];
let currentPage = 0;

const contentDiv = document.getElementById('content');
if (typeof bookText !== 'undefined') {
    pages = bookText.match(/[\s\S]{1,3000}/g) || [];
    showPage();
} else {
    console.error("Текст не найден. Проверь, что в book.js написано const bookText = `...` ");
}
function showPage() {

	if (contentDiv && pages.length> 0 )
		{
			 let text = pages[currentPage].trim();
			contentDiv.innerHTML= `${text}
			<br> <br>
			<center> ${currentPage + 1}/ ${ pages.length}</center>`;
	}
	
	window.scrollTo(0, 0);

}
function nextPage() {
	if (currentPage < pages.length - 1) {
		currentPage++;
		showPage();
	} else {
	alert ("конец книги!");
	}
}
function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage();
    } else {
        alert("Вы на самой первой странице!");
    }
}
function goToPage() {
	const input =  document.getElementById('page-input');
	const pageNum = parseInt(input.value);
	if(pageNum > 0 && pageNum <= pages.length) {
	
	currentPage= pageNum - 1;
	showPage();
	input.value=""; 
}
else{
	alert( "Введите номер страницы от 1 до " + pages.length);
}
}
showPage();