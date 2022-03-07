package pt.training.bookstore.rest;

import org.jboss.arquillian.container.test.api.Deployment;
import org.jboss.arquillian.junit.Arquillian;
import org.jboss.arquillian.extension.rest.client.ArquillianResteasyResource;
import org.jboss.shrinkwrap.api.Archive;
import org.jboss.shrinkwrap.api.ShrinkWrap;
import org.jboss.shrinkwrap.api.asset.EmptyAsset;
import org.jboss.shrinkwrap.api.spec.WebArchive;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import pt.training.bookstore.model.Book;
import pt.training.bookstore.model.Language;
import pt.training.bookstore.repository.BookRepository;
import pt.training.bookstore.util.IsbnGeneratorImpl;
import pt.training.bookstore.util.NumberGenerator;
import pt.training.bookstore.util.TextUtil;

import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.Response;

import static javax.ws.rs.core.MediaType.*;
import static javax.ws.rs.core.Response.Status.*;

@RunWith(Arquillian.class)
public class BookEndpointTest {

    private static Response response;

    @Test
    public void shouldGetNoBook(@ArquillianResteasyResource("api/books") WebTarget webTarget) {

        // Test counting books
        response = webTarget.path("count").request().get();
        Assert.assertEquals(NO_CONTENT.getStatusCode(), response.getStatus());

        // Test find all
        response = webTarget.request(APPLICATION_JSON).get();
        Assert.assertEquals(NO_CONTENT.getStatusCode(), response.getStatus());

    }

    @Deployment(testable = false)
    public static Archive<?> createDeploymentPackage() {

        return ShrinkWrap.create(WebArchive.class)
                .addClass(Book.class)
                .addClass(Language.class)
                .addClass(BookRepository.class)
                .addClass(NumberGenerator.class)
                .addClass(IsbnGeneratorImpl.class)
                .addClass(TextUtil.class)
                .addClass(BookEndpoint.class)
                .addClass(JAXRSConfiguration.class)
                .addAsWebInfResource(EmptyAsset.INSTANCE, "beans.xml")
                .addAsResource("META-INF/test-persistence.xml", "META-INF/persistence.xml");
    }
}
