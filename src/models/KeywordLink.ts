import {
    AutoIncrement,
    BelongsToMany,
    Column,
    DataType,
    ForeignKey,
    Model,
    PrimaryKey,
    Table,
    Unique,
} from "sequelize-typescript";
import { Link } from "./Link";
import { Keyword } from "./keyword";


@Table
export class KeywordLink extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: bigint;


    @ForeignKey(() => Keyword)
    @Column
    keywordId: bigint;

    @ForeignKey(() => Link)
    @Column
    linkId: bigint;
}