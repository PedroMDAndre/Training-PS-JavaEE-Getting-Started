package pt.training.bookstore.util;

import java.util.Random;

public class IsbnGeneratorImpl implements NumberGenerator {
    @Override
    public String generateNumber() {
        return "13-5677-" + Math.abs(new Random().nextInt());
    }
}
