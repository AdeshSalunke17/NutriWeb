export type SearchResult = {
    common : SingleResult[],
    branded : SingleResult[]
}
export type SingleResult = {
    tag_name ?: string,
    serving_unit ?: string,
    food_name ?: string,
    tag_id ?: string,
    serving_qty ?: string,
    common_type ?: string,
    photo ?: SearchImage,
    locale ?: string,
    nix_brand_id ?: string,
    brand_name_item_name ?: string,
    nix_item_id ?: string,
    brand_type ?: string,
    brand_name ?: string,
    nf_calories ?: string,
    region ?: string,
}
type SearchImage = {
    thumb : string
}