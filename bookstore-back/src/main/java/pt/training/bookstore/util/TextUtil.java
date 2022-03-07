package pt.training.bookstore.util;

public class TextUtil {
    /**
     * Remove many white spaces by one
     * */
    public String sanitize(String textToSanitize) {
        return textToSanitize.replaceAll("\\s+"," ");
    }
}
