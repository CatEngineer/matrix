SWAGGER="./api.json"
OUT_DIR="./out"

npx swagger-typescript-api --debug --unwrap-response-data \
    --axios --sort-types --add-readonly --route-types \
    --extract-request-params --extract-request-body \
    --extract-response-body --extract-response-error \
    --api-class-name 'MxHttpClient' -p $SWAGGER -o $OUT_DIR -n 'matrix.ts'
