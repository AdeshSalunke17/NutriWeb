export type SearchResult = {
    common : SingleResult[],
    branded : SingleResult[]
}
export type SingleResult = {
    tag_name : string,
    serving_unit : string,
    food_name : string,
    tag_id : string,
    serving_qty : string,
    common_type : string,
    photo : SearchImage,
    locale : string
}
type SearchImage = {
    thumb : string
}