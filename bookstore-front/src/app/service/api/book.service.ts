/**
 * BookStore APIs
 * BookStore APIs exposed from a Java EE back-end to an Angular front-end
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

'use strict';

@Injectable()
export class BookService {
    protected basePath = 'http://localhost:8080/bookstore-back/api';
    
    constructor(protected http: HttpClient) {

    }

    /**
     * Returns the number of books
     */
    public countBooks(): Observable<number> {
        const path = this.basePath + '/books/count';
        return this.http.get<number>(path);
    }

    /**
     * Creates a book given a JSon Book representation
     * 
     * @param body Book to be created
     */
    public createBook(body: Book): Observable<{}> {
        const path = this.basePath + '/books';
        // verify required parameter 'body' is not null or undefined
        if (!body) {
            throw new Error('Required parameter body was null or undefined when calling createBook.');
        }

        return this.http.post(path, body);
    }

    /**
     * Deletes a book given an id
     * 
     * @param id 
     */
    public deleteBook(id: number | undefined): Observable<{}> {
        const path = this.basePath + '/books/{id}'
            .replace('{' + 'id' + '}', String(id));

        // verify required parameter 'id' is not null or undefined
        if (!id) {
            throw new Error('Required parameter id was null or undefined when calling deleteBook.');
        }

        return this.http.delete(path);
    }

    /**
     * Returns a book given an id
     * 
     * @param id 
     */
    public getBook(id: number): Observable<Book> {
        const path = this.basePath + '/books/{id}'
            .replace('{' + 'id' + '}', String(id));

        // verify required parameter 'id' is not null or undefined
        if (!id) {
            throw new Error('Required parameter id was null or undefined when calling getBook.');
        }

        return this.http.get<Book>(path);
    }

    /**
     * Returns all the books
     */
    public getBooks(): Observable<Array<Book>> {
        const path = this.basePath + '/books';
        return this.http.get<Array<Book>>(path);
    }

}
