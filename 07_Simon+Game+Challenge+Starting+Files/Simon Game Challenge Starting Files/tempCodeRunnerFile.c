#include <stdio.h>

int main() {

    char a[20], b[20], res[20];
    int i, j;
    printf("Enter first string: ");
    gets(a);
    printf("Enter second string: ");
    gets(b);

    // Length of a
    int count = 0;
    for (i = 0; a[i]!='\0'; i++) {
        count++;
    }

    // Concatenating
    for (i = count, j = 0; b[j]!='\0'; i++, j++) {
        a[i] = b[j];
    }
    a[i] = '\0';
    printf("a = %s", a);


    return 0;
}