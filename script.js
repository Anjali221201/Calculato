let string = "";
document.addEventListener('DOMContentLoaded', () => {
    let buttons = document.querySelectorAll('button');
    Array.from(buttons).forEach((button) => {
        button.addEventListener('click', (e) => {
            if (e.target.innerHTML == '=') {
                try {
                    string = eval(string);
                    document.querySelector('input').value = string;
                } catch (error) {
                    document.querySelector('input').value = "Error";
                    string = "";
                }
            } else if (e.target.innerHTML == 'C') {
                string = "";
                document.querySelector('input').value = string;
            }else if (e.target.innerHTML == 'M+') {
                memory += parseFloat(string);
                string = "";
                document.querySelector('input').value = string;
              } else if (e.target.innerHTML == 'M-') {
                memory -= parseFloat(string);
                string = "";
                document.querySelector('input').value = string;
              }
             else {
                string = string + e.target.innerHTML;
                document.querySelector('input').value = string;
            }
        });
    });
});

