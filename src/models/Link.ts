import {
    AutoIncrement,
    BelongsToMany,
    Column,
    DataType,
    Model,
    PrimaryKey,
    Table,
    Unique,
} from "sequelize-typescript";
import { KeywordLink } from "./KeywordLink";
import { Keyword } from "./keyword";


@Table
export class Link extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: bigint;


    @Column(DataType.STRING(2048))
    url: string;

    @Column(DataType.STRING(512))
    description: string;

    @BelongsToMany(() => Keyword, () => KeywordLink)
    keywords: Keyword[];
}