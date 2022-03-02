package pt.training.bookstore.repository;

import org.jboss.arquillian.container.test.api.Deployment;
import org.jboss.arquillian.junit.Arquillian;
import org.jboss.shrinkwrap.api.ShrinkWrap;
import org.jboss.shrinkwrap.api.asset.EmptyAsset;
import org.jboss.shrinkwrap.api.spec.JavaArchive;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import pt.training.bookstore.model.Book;
import pt.training.bookstore.model.Language;

import javax.inject.Inject;
import java.util.Date;

@RunWith(Arquillian.class)
public class BookRepositoryTest {

    @Inject
    private BookRepository bookRepository;

    @Test
    public void create() throws Exception {
        // Testing counting books
        Assert.assertEquals(Long.valueOf(0), bookRepository.countAll());
        Assert.assertEquals(0, bookRepository.findAll().size());

        // Create Book
        Book book = new Book("isbn",
                "Book Title",
                20.0F,
                300,
                Language.ENGLISH,
                new Date(),
                "http://bookstore.com/book.jpg",
                "The author...");
        book = bookRepository.create(book);
        Long bookId = book.getId();

        // Check created book
        Assert.assertNotNull(bookId);

        // Find created book
        Book foundBook = bookRepository.find(bookId);

        // Check the found book
        Assert.assertEquals(book.getTitle(),foundBook.getTitle());

        // Testing counting books
        Assert.assertEquals(Long.valueOf(1), bookRepository.countAll());
        Assert.assertEquals(1, bookRepository.findAll().size());

        // Delete the book
        bookRepository.delete(bookId);

        // Testing counting books
        Assert.assertEquals(Long.valueOf(0), bookRepository.countAll());
        Assert.assertEquals(0, bookRepository.findAll().size());
    }

    @Deployment
    public static JavaArchive createDeployment() {
        return ShrinkWrap.create(JavaArchive.class)
                .addClass(BookRepository.class)
                .addClass(Book.class)
                .addClass(Language.class)
                .addAsManifestResource(EmptyAsset.INSTANCE, "beans.xml")
                .addAsManifestResource("META-INF/test-persistence.xml", "persistence.xml");

    }

}
