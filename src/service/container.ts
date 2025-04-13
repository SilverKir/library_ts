import { Container } from "inversify";
import BookRepository from "../repository/BookRepository";

export const container = new Container();
container.bind(BookRepository).toSelf();
