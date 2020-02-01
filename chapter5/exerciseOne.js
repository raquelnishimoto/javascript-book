// What values do the following expressions evaluate to

// (true && false) will be evaluated first and return false
false || (true && false);

// because of short cicuit evaluation, once the expression evaluates true it returns true
true || (1 + 2);

// 1 + 2 returns a truthy value and once this is evaluated it returns 3 (truthy value)
(1 + 2) || true;

// both true and 1 + 2 return truthy values and therefore the operation returns 3 (last executed operation)
true && (1 + 2);

// false has a falsy return value and therefore the expression returns false
false && (1 + 2);

/*
** 1 + 2 is evaluated first and has a truthy return value (same case for 'true')
** since both return truthy values the expression evaluates to true
*/
(1 + 2) && true;

// 32 * 4 is 128 and it is not >= than 129, therefore the expression is evaluated to false
(32 * 4) >= 129;

// false is equal to !true therefore the expression will be evaluated to false
false !== !true;

// true is not equal to 4 and therefore the expression evaluates to false
true === 4;

/* 
** the strict equality operatior result in (847 === '847') returning a falsy value 
** since false equals false the expression evaluates to true
*/
false === (847 === '847');

/* 
** the loose equality operatior result in (847 == '847') returning a truthy value 
** since false does not equal true the expression evaluates to false
*/
false === (847 == '847');

/* 
** JavaScript first evaluates the expression to the right
** the program will first evaluate !(100 / 5) which returns not 20 
** when it compares !20 to 20 it returns a falsy value
** result is (!true || (false) || ((328 / 4) === 82)) || false;
** next the program executes the operation 328 / 4 which has a value 82
** 82 is equal to 82 and therefore returns a true
** result is result is (!true || (false) || (true) || false;
** next program will evalute (false), then !true.
** However, once it evaluates true which has a truthy value
** it will return true.
*/
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;