/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type Add3PidData = object;

/**
 * Authentication response RateLimitError
 * Used by servers to indicate that additional authentication information is required,
 * The rate limit was reached for this request
 */
export type Add3PidError =
    | {
          /** A list of the stages the client has completed successfully */
          completed?: string[];
          /** A list of the login flows supported by the server for this API. */
          flows: {
              /**
               * The login type of each of the stages required to complete this
               * authentication flow
               */
              stages: string[];
          }[];
          /**
           * Contains any information that the client will need to know in order to
           * use a given type of authentication. For each login type presented,
           * that type may be present as a key in this dictionary. For example, the
           * public part of an OAuth client ID could be given here.
           * @example {"example.type.baz":{"example_key":"foobar"}}
           */
          params?: Record<string, object>;
          /**
           * This is a session identifier that the client must pass back to the home
           * server, if one is provided, in subsequent attempts to authenticate in the
           * same API call.
           * @example "xxxxxxyz"
           */
          session?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

/** @example {"client_secret":"d0nt-T3ll","sid":"abc123987"} */
export interface Add3PidPayload {
    /**
     * Additional authentication information for the
     * user-interactive authentication API.
     */
    auth?: {
        /** The value of the session key given by the homeserver. */
        session?: string;
        /**
         * The authentication type that the client is attempting to complete.
         * May be omitted if `session` is given, and the client is reissuing a
         * request which it believes has been completed out-of-band (for example,
         * via the [fallback mechanism](#fallback)).
         */
        type?: string;
        [key: string]: any;
    };
    /** The client secret used in the session with the homeserver. */
    client_secret: string;
    /** The session identifier given by the homeserver. */
    sid: string;
}

export type BanData = object;

/**
 * Error
 * A Matrix-level Error
 */
export type BanError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

/** @example {"reason":"Telling unfunny jokes","user_id":"@cheeky_monkey:matrix.org"} */
export interface BanPayload {
    /** The reason the user has been banned. This will be supplied as the `reason` on the target's updated [`m.room.member`](https://spec.matrix.org/v1.5/client-server-api/#mroommember) event. */
    reason?: string;
    /** The fully qualified user ID of the user being banned. */
    user_id: string;
}

export type Bind3PidData = object;

/**
 * RateLimitError
 * The rate limit was reached for this request
 */
export type Bind3PidError = {
    /**
     * The M_LIMIT_EXCEEDED error code
     * @example "M_LIMIT_EXCEEDED"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "Too many requests"
     */
    error?: string;
    /**
     * The amount of time in milliseconds the client should wait
     * before trying the request again.
     * @example 2000
     */
    retry_after_ms?: number;
};

/** @example {"client_secret":"d0nt-T3ll","id_access_token":"abc123_OpaqueString","id_server":"example.org","sid":"abc123987"} */
export interface Bind3PidPayload {
    /** The client secret used in the session with the identity server. */
    client_secret: string;
    /** An access token previously registered with the identity server. */
    id_access_token: string;
    /** The identity server to use. */
    id_server: string;
    /** The session identifier given by the identity server. */
    sid: string;
}

export type ChangePasswordData = object;

/**
 * Authentication response RateLimitError
 * Used by servers to indicate that additional authentication information is required,
 * The rate limit was reached for this request
 */
export type ChangePasswordError =
    | {
          /** A list of the stages the client has completed successfully */
          completed?: string[];
          /** A list of the login flows supported by the server for this API. */
          flows: {
              /**
               * The login type of each of the stages required to complete this
               * authentication flow
               */
              stages: string[];
          }[];
          /**
           * Contains any information that the client will need to know in order to
           * use a given type of authentication. For each login type presented,
           * that type may be present as a key in this dictionary. For example, the
           * public part of an OAuth client ID could be given here.
           * @example {"example.type.baz":{"example_key":"foobar"}}
           */
          params?: Record<string, object>;
          /**
           * This is a session identifier that the client must pass back to the home
           * server, if one is provided, in subsequent attempts to authenticate in the
           * same API call.
           * @example "xxxxxxyz"
           */
          session?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

export interface ChangePasswordPayload {
    /** Additional authentication information for the user-interactive authentication API. */
    auth?: {
        /** The value of the session key given by the homeserver. */
        session?: string;
        /**
         * The authentication type that the client is attempting to complete.
         * May be omitted if `session` is given, and the client is reissuing a
         * request which it believes has been completed out-of-band (for example,
         * via the [fallback mechanism](#fallback)).
         */
        type?: string;
        [key: string]: any;
    };
    /**
     * Whether the user's other access tokens, and their associated devices, should be
     * revoked if the request succeeds. Defaults to true.
     *
     * When `false`, the server can still take advantage of the [soft logout method](https://spec.matrix.org/v1.5/client-server-api/#soft-logout)
     * for the user's remaining devices.
     * @example true
     */
    logout_devices?: boolean;
    /**
     * The new password for the account.
     * @example "ihatebananas"
     */
    new_password: string;
}

export interface CheckUsernameAvailabilityData {
    /**
     * A flag to indicate that the username is available. This should always
     * be `true` when the server replies with 200 OK.
     */
    available?: boolean;
}

/**
 * Error RateLimitError
 * A Matrix-level Error
 * The rate limit was reached for this request
 */
export type CheckUsernameAvailabilityError =
    | {
          /**
           * An error code.
           * @example "M_UNKNOWN"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "An unknown error occurred"
           */
          error?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

export interface CheckUsernameAvailabilityParams {
    /**
     * The username to check the availability of.
     * @default "my_cool_localpart"
     * @example "my_cool_localpart"
     */
    username: string;
}

export interface ClaimKeysData {
    /**
     * If any remote homeservers could not be reached, they are
     * recorded here. The names of the properties are the names of
     * the unreachable servers.
     *
     * If the homeserver could be reached, but the user or device
     * was unknown, no failure is recorded. Instead, the corresponding
     * user or device is missing from the `one_time_keys` result.
     * @example {}
     */
    failures?: Record<string, object>;
    /**
     * One-time keys for the queried devices. A map from user ID, to a
     * map from devices to a map from `<algorithm>:<key_id>` to the key object.
     *
     * See the [key algorithms](https://spec.matrix.org/v1.5/client-server-api/#key-algorithms) section for information
     * on the Key Object format.
     *
     * If necessary, the claimed key might be a fallback key. Fallback
     * keys are re-used by the server until replaced by the device.
     * @example {"@alice:example.com":{"JLAFKJWSCS":{"signed_curve25519:AAAAHg":{"key":"zKbLg+NrIjpnagy+pIY6uPL4ZwEG2v+8F9lmgsnlZzs","signatures":{"@alice:example.com":{"ed25519:JLAFKJWSCS":"FLWxXqGbwrb8SM3Y795eB6OA8bwBcoMZFXBqnTn58AYWZSqiD45tlBVcDa2L7RwdKXebW/VzDlnfVJ+9jok1Bw"}}}}}}
     */
    one_time_keys: Record<string, Record<string, object>>;
}

export interface ClaimKeysPayload {
    /**
     * The keys to be claimed. A map from user ID, to a map from
     * device ID to algorithm name.
     * @example {"@alice:example.com":{"JLAFKJWSCS":"signed_curve25519"}}
     */
    one_time_keys: Record<string, Record<string, string>>;
    /**
     * The time (in milliseconds) to wait when downloading keys from
     * remote servers. 10 seconds is the recommended default.
     * @example 10000
     */
    timeout?: number;
}

/** Information about the newly created room. */
export interface CreateRoomData {
    /** The created room's ID. */
    room_id: string;
}

/**
 * Error
 * A Matrix-level Error
 */
export type CreateRoomError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

/** @example {"creation_content":{"m.federate":false},"name":"The Grand Duke Pub","preset":"public_chat","room_alias_name":"thepub","topic":"All about happy hour"} */
export interface CreateRoomPayload {
    /**
     * CreationContent
     * Extra keys, such as `m.federate`, to be added to the content
     * of the [`m.room.create`](https://spec.matrix.org/v1.5/client-server-api/#mroomcreate) event. The server will overwrite the following
     * keys: `creator`, `room_version`. Future versions of the specification
     * may allow the server to overwrite other keys.
     */
    creation_content?: object;
    /**
     * A list of state events to set in the new room. This allows
     * the user to override the default state events set in the new
     * room. The expected format of the state events are an object
     * with type, state_key and content keys set.
     *
     * Takes precedence over events set by `preset`, but gets
     * overridden by `name` and `topic` keys.
     */
    initial_state?: {
        /** The content of the event. */
        content: object;
        /** The state_key of the state event. Defaults to an empty string. */
        state_key?: string;
        /** The type of event to send. */
        type: string;
    }[];
    /**
     * A list of user IDs to invite to the room. This will tell the
     * server to invite everyone in the list to the newly created room.
     */
    invite?: string[];
    /**
     * A list of objects representing third party IDs to invite into
     * the room.
     */
    invite_3pid?: {
        /** The invitee's third party identifier. */
        address: string;
        /**
         * An access token previously registered with the identity server. Servers
         * can treat this as optional to distinguish between r0.5-compatible clients
         * and this specification version.
         */
        id_access_token: string;
        /** The hostname+port of the identity server which should be used for third party identifier lookups. */
        id_server: string;
        /** The kind of address being passed in the address field, for example `email`. */
        medium: string;
    }[];
    /**
     * This flag makes the server set the `is_direct` flag on the
     * `m.room.member` events sent to the users in `invite` and
     * `invite_3pid`. See [Direct Messaging](https://spec.matrix.org/v1.5/client-server-api/#direct-messaging) for more information.
     */
    is_direct?: boolean;
    /**
     * If this is included, an `m.room.name` event will be sent
     * into the room to indicate the name of the room. See Room
     * Events for more information on `m.room.name`.
     */
    name?: string;
    /**
     * Power Level Event Content
     * The power level content to override in the default power level
     * event. This object is applied on top of the generated
     * [`m.room.power_levels`](https://spec.matrix.org/v1.5/client-server-api/#mroompower_levels)
     * event content prior to it being sent to the room. Defaults to
     * overriding nothing.
     */
    power_level_content_override?: object;
    /**
     * Convenience parameter for setting various default state events
     * based on a preset.
     *
     * If unspecified, the server should use the `visibility` to determine
     * which preset to use. A visbility of `public` equates to a preset of
     * `public_chat` and `private` visibility equates to a preset of
     * `private_chat`.
     */
    preset?: "private_chat" | "public_chat" | "trusted_private_chat";
    /**
     * The desired room alias **local part**. If this is included, a
     * room alias will be created and mapped to the newly created
     * room. The alias will belong on the *same* homeserver which
     * created the room. For example, if this was set to "foo" and
     * sent to the homeserver "example.com" the complete room alias
     * would be `#foo:example.com`.
     *
     * The complete room alias will become the canonical alias for
     * the room and an `m.room.canonical_alias` event will be sent
     * into the room.
     */
    room_alias_name?: string;
    /**
     * The room version to set for the room. If not provided, the homeserver is
     * to use its configured default. If provided, the homeserver will return a
     * 400 error with the errcode `M_UNSUPPORTED_ROOM_VERSION` if it does not
     * support the room version.
     * @example "1"
     */
    room_version?: string;
    /**
     * If this is included, an `m.room.topic` event will be sent
     * into the room to indicate the topic for the room. See Room
     * Events for more information on `m.room.topic`.
     */
    topic?: string;
    /**
     * A `public` visibility indicates that the room will be shown
     * in the published room list. A `private` visibility will hide
     * the room from the published room list. Rooms default to
     * `private` visibility if this key is not included. NB: This
     * should not be confused with `join_rules` which also uses the
     * word `public`.
     */
    visibility?: "public" | "private";
}

export interface DeactivateAccountData {
    /**
     * An indicator as to whether or not the homeserver was able to unbind
     * the user's 3PIDs from the identity server(s). `success` indicates
     * that all identifiers have been unbound from the identity server while
     * `no-support` indicates that one or more identifiers failed to unbind
     * due to the identity server refusing the request or the homeserver
     * being unable to determine an identity server to unbind from. This
     * must be `success` if the homeserver has no identifiers to unbind
     * for the user.
     * @example "success"
     */
    id_server_unbind_result: "success" | "no-support";
}

/**
 * Authentication response RateLimitError
 * Used by servers to indicate that additional authentication information is required,
 * The rate limit was reached for this request
 */
export type DeactivateAccountError =
    | {
          /** A list of the stages the client has completed successfully */
          completed?: string[];
          /** A list of the login flows supported by the server for this API. */
          flows: {
              /**
               * The login type of each of the stages required to complete this
               * authentication flow
               */
              stages: string[];
          }[];
          /**
           * Contains any information that the client will need to know in order to
           * use a given type of authentication. For each login type presented,
           * that type may be present as a key in this dictionary. For example, the
           * public part of an OAuth client ID could be given here.
           * @example {"example.type.baz":{"example_key":"foobar"}}
           */
          params?: Record<string, object>;
          /**
           * This is a session identifier that the client must pass back to the home
           * server, if one is provided, in subsequent attempts to authenticate in the
           * same API call.
           * @example "xxxxxxyz"
           */
          session?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

export interface DeactivateAccountPayload {
    /** Additional authentication information for the user-interactive authentication API. */
    auth?: {
        /** The value of the session key given by the homeserver. */
        session?: string;
        /**
         * The authentication type that the client is attempting to complete.
         * May be omitted if `session` is given, and the client is reissuing a
         * request which it believes has been completed out-of-band (for example,
         * via the [fallback mechanism](#fallback)).
         */
        type?: string;
        [key: string]: any;
    };
    /**
     * The identity server to unbind all of the user's 3PIDs from.
     * If not provided, the homeserver MUST use the `id_server`
     * that was originally use to bind each identifier. If the
     * homeserver does not know which `id_server` that was,
     * it must return an `id_server_unbind_result` of
     * `no-support`.
     * @example "example.org"
     */
    id_server?: string;
}

export interface DefineFilterData {
    /**
     * The ID of the filter that was created. Cannot start
     * with a `{` as this character is used to determine
     * if the filter provided is inline JSON or a previously
     * declared filter by homeservers on some APIs.
     * @example "66696p746572"
     */
    filter_id: string;
}

/** @example {"event_fields":["type","content","sender"],"event_format":"client","presence":{"not_senders":["@alice:example.com"],"types":["m.presence"]},"room":{"ephemeral":{"not_rooms":["!726s6s6q:example.com"],"not_senders":["@spam:example.com"],"types":["m.receipt","m.typing"]},"state":{"not_rooms":["!726s6s6q:example.com"],"types":["m.room.*"]},"timeline":{"limit":10,"not_rooms":["!726s6s6q:example.com"],"not_senders":["@spam:example.com"],"types":["m.room.message"]}}} */
export type DefineFilterPayload = {
    /** The user account data that isn't associated with rooms to include. */
    account_data?: {
        /** The maximum number of events to return. */
        limit?: number;
        /** A list of sender IDs to exclude. If this list is absent then no senders are excluded. A matching sender will be excluded even if it is listed in the `'senders'` filter. */
        not_senders?: string[];
        /** A list of event types to exclude. If this list is absent then no event types are excluded. A matching type will be excluded even if it is listed in the `'types'` filter. A '*' can be used as a wildcard to match any sequence of characters. */
        not_types?: string[];
        /** A list of senders IDs to include. If this list is absent then all senders are included. */
        senders?: string[];
        /** A list of event types to include. If this list is absent then all event types are included. A `'*'` can be used as a wildcard to match any sequence of characters. */
        types?: string[];
    };
    /** List of event fields to include. If this list is absent then all fields are included. The entries may include '.' characters to indicate sub-fields. So ['content.body'] will include the 'body' field of the 'content' object. A literal '.' character in a field name may be escaped using a '\\'. A server may include more fields than were requested. */
    event_fields?: string[];
    /** The format to use for events. 'client' will return the events in a format suitable for clients. 'federation' will return the raw event as received over federation. The default is 'client'. */
    event_format?: "client" | "federation";
    /** The presence updates to include. */
    presence?: {
        /** The maximum number of events to return. */
        limit?: number;
        /** A list of sender IDs to exclude. If this list is absent then no senders are excluded. A matching sender will be excluded even if it is listed in the `'senders'` filter. */
        not_senders?: string[];
        /** A list of event types to exclude. If this list is absent then no event types are excluded. A matching type will be excluded even if it is listed in the `'types'` filter. A '*' can be used as a wildcard to match any sequence of characters. */
        not_types?: string[];
        /** A list of senders IDs to include. If this list is absent then all senders are included. */
        senders?: string[];
        /** A list of event types to include. If this list is absent then all event types are included. A `'*'` can be used as a wildcard to match any sequence of characters. */
        types?: string[];
    };
    /**
     * RoomFilter
     * Filters to be applied to room data.
     */
    room?: {
        /** The per user account data to include for rooms. */
        account_data?: {
            /** The maximum number of events to return. */
            limit?: number;
            /** A list of sender IDs to exclude. If this list is absent then no senders are excluded. A matching sender will be excluded even if it is listed in the `'senders'` filter. */
            not_senders?: string[];
            /** A list of event types to exclude. If this list is absent then no event types are excluded. A matching type will be excluded even if it is listed in the `'types'` filter. A '*' can be used as a wildcard to match any sequence of characters. */
            not_types?: string[];
            /** A list of senders IDs to include. If this list is absent then all senders are included. */
            senders?: string[];
            /** A list of event types to include. If this list is absent then all event types are included. A `'*'` can be used as a wildcard to match any sequence of characters. */
            types?: string[];
        } & {
            /** If `true`, includes only events with a `url` key in their content. If `false`, excludes those events. If omitted, `url` key is not considered for filtering. */
            contains_url?: boolean;
            /**
             * If `true`, sends all membership events for all events, even if they have already
             * been sent to the client. Does not
             * apply unless `lazy_load_members` is `true`. See
             * [Lazy-loading room members](https://spec.matrix.org/v1.5/client-server-api/#lazy-loading-room-members)
             * for more information. Defaults to `false`.
             */
            include_redundant_members?: boolean;
            /**
             * If `true`, enables lazy-loading of membership events. See
             * [Lazy-loading room members](https://spec.matrix.org/v1.5/client-server-api/#lazy-loading-room-members)
             * for more information. Defaults to `false`.
             */
            lazy_load_members?: boolean;
            /** A list of room IDs to exclude. If this list is absent then no rooms are excluded. A matching room will be excluded even if it is listed in the `'rooms'` filter. */
            not_rooms?: string[];
            /** A list of room IDs to include. If this list is absent then all rooms are included. */
            rooms?: string[];
            /**
             * If `true`, enables per-[thread](https://spec.matrix.org/v1.5/client-server-api/#threading) notification
             * counts. Only applies to the `/sync` endpoint. Defaults to `false`.
             */
            unread_thread_notifications?: boolean;
        };
        /** The ephemeral events to include for rooms. These are the events that appear in the `ephemeral` property in the `/sync` response. */
        ephemeral?: {
            /** The maximum number of events to return. */
            limit?: number;
            /** A list of sender IDs to exclude. If this list is absent then no senders are excluded. A matching sender will be excluded even if it is listed in the `'senders'` filter. */
            not_senders?: string[];
            /** A list of event types to exclude. If this list is absent then no event types are excluded. A matching type will be excluded even if it is listed in the `'types'` filter. A '*' can be used as a wildcard to match any sequence of characters. */
            not_types?: string[];
            /** A list of senders IDs to include. If this list is absent then all senders are included. */
            senders?: string[];
            /** A list of event types to include. If this list is absent then all event types are included. A `'*'` can be used as a wildcard to match any sequence of characters. */
            types?: string[];
        } & {
            /** If `true`, includes only events with a `url` key in their content. If `false`, excludes those events. If omitted, `url` key is not considered for filtering. */
            contains_url?: boolean;
            /**
             * If `true`, sends all membership events for all events, even if they have already
             * been sent to the client. Does not
             * apply unless `lazy_load_members` is `true`. See
             * [Lazy-loading room members](https://spec.matrix.org/v1.5/client-server-api/#lazy-loading-room-members)
             * for more information. Defaults to `false`.
             */
            include_redundant_members?: boolean;
            /**
             * If `true`, enables lazy-loading of membership events. See
             * [Lazy-loading room members](https://spec.matrix.org/v1.5/client-server-api/#lazy-loading-room-members)
             * for more information. Defaults to `false`.
             */
            lazy_load_members?: boolean;
            /** A list of room IDs to exclude. If this list is absent then no rooms are excluded. A matching room will be excluded even if it is listed in the `'rooms'` filter. */
            not_rooms?: string[];
            /** A list of room IDs to include. If this list is absent then all rooms are included. */
            rooms?: string[];
            /**
             * If `true`, enables per-[thread](https://spec.matrix.org/v1.5/client-server-api/#threading) notification
             * counts. Only applies to the `/sync` endpoint. Defaults to `false`.
             */
            unread_thread_notifications?: boolean;
        };
        /** Include rooms that the user has left in the sync, default false */
        include_leave?: boolean;
        /** A list of room IDs to exclude. If this list is absent then no rooms are excluded. A matching room will be excluded even if it is listed in the `'rooms'` filter. This filter is applied before the filters in `ephemeral`, `state`, `timeline` or `account_data` */
        not_rooms?: string[];
        /** A list of room IDs to include. If this list is absent then all rooms are included. This filter is applied before the filters in `ephemeral`, `state`, `timeline` or `account_data` */
        rooms?: string[];
        /**
         * StateFilter
         * The state events to include for rooms.
         */
        state?: {
            /** The maximum number of events to return. */
            limit?: number;
            /** A list of sender IDs to exclude. If this list is absent then no senders are excluded. A matching sender will be excluded even if it is listed in the `'senders'` filter. */
            not_senders?: string[];
            /** A list of event types to exclude. If this list is absent then no event types are excluded. A matching type will be excluded even if it is listed in the `'types'` filter. A '*' can be used as a wildcard to match any sequence of characters. */
            not_types?: string[];
            /** A list of senders IDs to include. If this list is absent then all senders are included. */
            senders?: string[];
            /** A list of event types to include. If this list is absent then all event types are included. A `'*'` can be used as a wildcard to match any sequence of characters. */
            types?: string[];
        } & {
            /** If `true`, includes only events with a `url` key in their content. If `false`, excludes those events. If omitted, `url` key is not considered for filtering. */
            contains_url?: boolean;
            /**
             * If `true`, sends all membership events for all events, even if they have already
             * been sent to the client. Does not
             * apply unless `lazy_load_members` is `true`. See
             * [Lazy-loading room members](https://spec.matrix.org/v1.5/client-server-api/#lazy-loading-room-members)
             * for more information. Defaults to `false`.
             */
            include_redundant_members?: boolean;
            /**
             * If `true`, enables lazy-loading of membership events. See
             * [Lazy-loading room members](https://spec.matrix.org/v1.5/client-server-api/#lazy-loading-room-members)
             * for more information. Defaults to `false`.
             */
            lazy_load_members?: boolean;
            /** A list of room IDs to exclude. If this list is absent then no rooms are excluded. A matching room will be excluded even if it is listed in the `'rooms'` filter. */
            not_rooms?: string[];
            /** A list of room IDs to include. If this list is absent then all rooms are included. */
            rooms?: string[];
            /**
             * If `true`, enables per-[thread](https://spec.matrix.org/v1.5/client-server-api/#threading) notification
             * counts. Only applies to the `/sync` endpoint. Defaults to `false`.
             */
            unread_thread_notifications?: boolean;
        };
        /** The message and state update events to include for rooms. */
        timeline?: {
            /** The maximum number of events to return. */
            limit?: number;
            /** A list of sender IDs to exclude. If this list is absent then no senders are excluded. A matching sender will be excluded even if it is listed in the `'senders'` filter. */
            not_senders?: string[];
            /** A list of event types to exclude. If this list is absent then no event types are excluded. A matching type will be excluded even if it is listed in the `'types'` filter. A '*' can be used as a wildcard to match any sequence of characters. */
            not_types?: string[];
            /** A list of senders IDs to include. If this list is absent then all senders are included. */
            senders?: string[];
            /** A list of event types to include. If this list is absent then all event types are included. A `'*'` can be used as a wildcard to match any sequence of characters. */
            types?: string[];
        } & {
            /** If `true`, includes only events with a `url` key in their content. If `false`, excludes those events. If omitted, `url` key is not considered for filtering. */
            contains_url?: boolean;
            /**
             * If `true`, sends all membership events for all events, even if they have already
             * been sent to the client. Does not
             * apply unless `lazy_load_members` is `true`. See
             * [Lazy-loading room members](https://spec.matrix.org/v1.5/client-server-api/#lazy-loading-room-members)
             * for more information. Defaults to `false`.
             */
            include_redundant_members?: boolean;
            /**
             * If `true`, enables lazy-loading of membership events. See
             * [Lazy-loading room members](https://spec.matrix.org/v1.5/client-server-api/#lazy-loading-room-members)
             * for more information. Defaults to `false`.
             */
            lazy_load_members?: boolean;
            /** A list of room IDs to exclude. If this list is absent then no rooms are excluded. A matching room will be excluded even if it is listed in the `'rooms'` filter. */
            not_rooms?: string[];
            /** A list of room IDs to include. If this list is absent then all rooms are included. */
            rooms?: string[];
            /**
             * If `true`, enables per-[thread](https://spec.matrix.org/v1.5/client-server-api/#threading) notification
             * counts. Only applies to the `/sync` endpoint. Defaults to `false`.
             */
            unread_thread_notifications?: boolean;
        };
    };
};

export interface Delete3PidFromAccountData {
    /**
     * An indicator as to whether or not the homeserver was able to unbind
     * the 3PID from the identity server. `success` indicates that the
     * identity server has unbound the identifier whereas `no-support`
     * indicates that the identity server refuses to support the request
     * or the homeserver was not able to determine an identity server to
     * unbind from.
     * @example "success"
     */
    id_server_unbind_result: "no-support" | "success";
}

export type DeleteDeviceData = object;

/**
 * Authentication response
 * Used by servers to indicate that additional authentication information is required,
 */
export type DeleteDeviceError = {
    /** A list of the stages the client has completed successfully */
    completed?: string[];
    /** A list of the login flows supported by the server for this API. */
    flows: {
        /**
         * The login type of each of the stages required to complete this
         * authentication flow
         */
        stages: string[];
    }[];
    /**
     * Contains any information that the client will need to know in order to
     * use a given type of authentication. For each login type presented,
     * that type may be present as a key in this dictionary. For example, the
     * public part of an OAuth client ID could be given here.
     * @example {"example.type.baz":{"example_key":"foobar"}}
     */
    params?: Record<string, object>;
    /**
     * This is a session identifier that the client must pass back to the home
     * server, if one is provided, in subsequent attempts to authenticate in the
     * same API call.
     * @example "xxxxxxyz"
     */
    session?: string;
};

export interface DeleteDevicePayload {
    /**
     * Additional authentication information for the
     * user-interactive authentication API.
     */
    auth?: {
        /** The value of the session key given by the homeserver. */
        session?: string;
        /**
         * The authentication type that the client is attempting to complete.
         * May be omitted if `session` is given, and the client is reissuing a
         * request which it believes has been completed out-of-band (for example,
         * via the [fallback mechanism](#fallback)).
         */
        type?: string;
        [key: string]: any;
    };
}

export type DeleteDevicesData = object;

/**
 * Authentication response
 * Used by servers to indicate that additional authentication information is required,
 */
export type DeleteDevicesError = {
    /** A list of the stages the client has completed successfully */
    completed?: string[];
    /** A list of the login flows supported by the server for this API. */
    flows: {
        /**
         * The login type of each of the stages required to complete this
         * authentication flow
         */
        stages: string[];
    }[];
    /**
     * Contains any information that the client will need to know in order to
     * use a given type of authentication. For each login type presented,
     * that type may be present as a key in this dictionary. For example, the
     * public part of an OAuth client ID could be given here.
     * @example {"example.type.baz":{"example_key":"foobar"}}
     */
    params?: Record<string, object>;
    /**
     * This is a session identifier that the client must pass back to the home
     * server, if one is provided, in subsequent attempts to authenticate in the
     * same API call.
     * @example "xxxxxxyz"
     */
    session?: string;
};

export interface DeleteDevicesPayload {
    /**
     * Additional authentication information for the
     * user-interactive authentication API.
     */
    auth?: {
        /** The value of the session key given by the homeserver. */
        session?: string;
        /**
         * The authentication type that the client is attempting to complete.
         * May be omitted if `session` is given, and the client is reissuing a
         * request which it believes has been completed out-of-band (for example,
         * via the [fallback mechanism](#fallback)).
         */
        type?: string;
        [key: string]: any;
    };
    /**
     * The list of device IDs to delete.
     * @example ["QBUAZIFURK","AUIECTSRND"]
     */
    devices: string[];
}

export type DeletePushRuleData = object;

/**
 * Error
 * A Matrix-level Error
 */
export type DeletePushRuleError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

export type DeleteRoomAliasData = object;

/**
 * Error
 * A Matrix-level Error
 */
export type DeleteRoomAliasError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

/** RoomKeysUpdateResponse */
export interface DeleteRoomKeyBySessionIdData {
    /**
     * The number of keys stored in the backup
     * @example 10
     */
    count: number;
    /**
     * The new etag value representing stored keys in the backup.
     * See `GET /room_keys/version/{version}` for more details.
     * @example "abcdefg"
     */
    etag: string;
}

/**
 * Error RateLimitError
 * A Matrix-level Error
 * The rate limit was reached for this request
 */
export type DeleteRoomKeyBySessionIdError =
    | {
          /**
           * An error code.
           * @example "M_UNKNOWN"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "An unknown error occurred"
           */
          error?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

export interface DeleteRoomKeyBySessionIdParams {
    /**
     * The backup from which to delete the key
     * @example "1"
     */
    version: string;
    /**
     * The ID of the room that the specified key is for.
     * @example "!roomid:example.org"
     */
    roomId: string;
    /**
     * The ID of the megolm session whose key is to be deleted.
     * @example "sessionid"
     */
    sessionId: string;
}

/** RoomKeysUpdateResponse */
export interface DeleteRoomKeysByRoomIdData {
    /**
     * The number of keys stored in the backup
     * @example 10
     */
    count: number;
    /**
     * The new etag value representing stored keys in the backup.
     * See `GET /room_keys/version/{version}` for more details.
     * @example "abcdefg"
     */
    etag: string;
}

/**
 * Error RateLimitError
 * A Matrix-level Error
 * The rate limit was reached for this request
 */
export type DeleteRoomKeysByRoomIdError =
    | {
          /**
           * An error code.
           * @example "M_UNKNOWN"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "An unknown error occurred"
           */
          error?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

export interface DeleteRoomKeysByRoomIdParams {
    /**
     * The backup from which to delete the key.
     * @example "1"
     */
    version: string;
    /**
     * The ID of the room that the specified key is for.
     * @example "!roomid:example.org"
     */
    roomId: string;
}

/** RoomKeysUpdateResponse */
export interface DeleteRoomKeysData {
    /**
     * The number of keys stored in the backup
     * @example 10
     */
    count: number;
    /**
     * The new etag value representing stored keys in the backup.
     * See `GET /room_keys/version/{version}` for more details.
     * @example "abcdefg"
     */
    etag: string;
}

/**
 * Error RateLimitError
 * A Matrix-level Error
 * The rate limit was reached for this request
 */
export type DeleteRoomKeysError =
    | {
          /**
           * An error code.
           * @example "M_UNKNOWN"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "An unknown error occurred"
           */
          error?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

export interface DeleteRoomKeysParams {
    /**
     * The backup from which to delete the key
     * @example "1"
     */
    version: string;
}

export type DeleteRoomKeysVersionData = object;

/**
 * Error RateLimitError
 * A Matrix-level Error
 * The rate limit was reached for this request
 */
export type DeleteRoomKeysVersionError =
    | {
          /**
           * An error code.
           * @example "M_UNKNOWN"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "An unknown error occurred"
           */
          error?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

export type DeleteRoomTagData = object;

export type ForgetRoomData = object;

/**
 * Error RateLimitError
 * A Matrix-level Error
 * The rate limit was reached for this request
 */
export type ForgetRoomError =
    | {
          /**
           * An error code.
           * @example "M_UNKNOWN"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "An unknown error occurred"
           */
          error?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

export interface GetAccount3PiDsData {
    threepids?: {
        /**
         * The timestamp, in milliseconds, when the homeserver associated the third party identifier with the user.
         * @format int64
         */
        added_at: number;
        /** The third party identifier address. */
        address: string;
        /** The medium of the third party identifier. */
        medium: "email" | "msisdn";
        /**
         * The timestamp, in milliseconds, when the identifier was
         * validated by the identity server.
         * @format int64
         */
        validated_at: number;
    }[];
}

/** @example {"custom_account_data_key":"custom_config_value"} */
export type GetAccountDataData = object;

/**
 * Error Error
 * A Matrix-level Error
 * A Matrix-level Error
 */
export type GetAccountDataError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

/** @example {"custom_account_data_key":"custom_config_value"} */
export type GetAccountDataPerRoomData = object;

/**
 * Error Error
 * A Matrix-level Error
 * A Matrix-level Error
 */
export type GetAccountDataPerRoomError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

export interface GetAvatarUrlData {
    /**
     * The user's avatar URL if they have set one, otherwise not present.
     * @format uri
     */
    avatar_url?: string;
}

export interface GetCapabilitiesData {
    /**
     * Capabilities
     * The custom capabilities the server supports, using the
     * Java package naming convention.
     */
    capabilities: {
        /**
         * ChangePasswordCapability
         * Capability to indicate if the user can change their password.
         */
        "m.change_password"?: {
            /**
             * True if the user can change their password, false otherwise.
             * @example false
             */
            enabled: boolean;
        };
        /**
         * RoomVersionsCapability
         * The room versions the server supports.
         */
        "m.room_versions"?: {
            /** A detailed description of the room versions the server supports. */
            available: Record<string, "stable" | "unstable">;
            /**
             * The default room version the server is using for new rooms.
             * @example "1"
             */
            default: string;
        };
        [key: string]: any;
    };
}

/**
 * RateLimitError
 * The rate limit was reached for this request
 */
export type GetCapabilitiesError = {
    /**
     * The M_LIMIT_EXCEEDED error code
     * @example "M_LIMIT_EXCEEDED"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "Too many requests"
     */
    error?: string;
    /**
     * The amount of time in milliseconds the client should wait
     * before trying the request again.
     * @example 2000
     */
    retry_after_ms?: number;
};

export interface GetConfigData {
    /**
     * The maximum size an upload can be in bytes.
     * Clients SHOULD use this as a guide when uploading content.
     * If not listed or null, the size limit should be treated as unknown.
     * @format int64
     */
    "m.upload.size"?: number;
}

/**
 * Error
 * A Matrix-level Error
 */
export type GetConfigError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

/**
 * **Required.** The bytes for the uploaded file.
 * @format binary
 */
export type GetContentData = File;

/**
 * RateLimitError Error
 * The rate limit was reached for this request
 * A Matrix-level Error
 */
export type GetContentError =
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      }
    | {
          /**
           * An error code.
           * @example "M_UNKNOWN"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "An unknown error occurred"
           */
          error?: string;
      };

/**
 * **Required.** The bytes for the uploaded file.
 * @format binary
 */
export type GetContentOverrideNameData = File;

/**
 * RateLimitError Error
 * The rate limit was reached for this request
 * A Matrix-level Error
 */
export type GetContentOverrideNameError =
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      }
    | {
          /**
           * An error code.
           * @example "M_UNKNOWN"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "An unknown error occurred"
           */
          error?: string;
      };

export interface GetContentOverrideNameParams {
    /**
     * Indicates to the server that it should not attempt to fetch the media if it is deemed
     * remote. This is to prevent routing loops where the server contacts itself. Defaults to
     * true if not provided.
     * @default true
     * @example false
     */
    allow_remote?: boolean;
    /**
     * The server name from the `mxc://` URI (the authoritory component)
     * @example "matrix.org"
     */
    serverName: string;
    /**
     * The media ID from the `mxc://` URI (the path component)
     * @example "ascERGshawAWawugaAcauga"
     */
    mediaId: string;
    /**
     * A filename to give in the `Content-Disposition` header.
     * @example "filename.jpg"
     */
    fileName: string;
}

export interface GetContentParams {
    /**
     * Indicates to the server that it should not attempt to fetch the media if it is deemed
     * remote. This is to prevent routing loops where the server contacts itself. Defaults to
     * true if not provided.
     * @default true
     * @example false
     */
    allow_remote?: boolean;
    /**
     * The server name from the `mxc://` URI (the authoritory component)
     * @example "matrix.org"
     */
    serverName: string;
    /**
     * The media ID from the `mxc://` URI (the path component)
     * @example "ascERGshawAWawugaAcauga"
     */
    mediaId: string;
}

/**
 * **Required.** The bytes for the thumbnail.
 * @format binary
 */
export type GetContentThumbnailData = File;

/**
 * Error Error RateLimitError Error
 * A Matrix-level Error
 * A Matrix-level Error
 * The rate limit was reached for this request
 * A Matrix-level Error
 */
export type GetContentThumbnailError =
    | {
          /**
           * An error code.
           * @example "M_UNKNOWN"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "An unknown error occurred"
           */
          error?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

export interface GetContentThumbnailParams {
    /**
     * The *desired* width of the thumbnail. The actual thumbnail may be
     * larger than the size specified.
     * @example 64
     */
    width: number;
    /**
     * The *desired* height of the thumbnail. The actual thumbnail may be
     * larger than the size specified.
     * @example 64
     */
    height: number;
    /**
     * The desired resizing method. See the [Thumbnails](https://spec.matrix.org/v1.5/client-server-api/#thumbnails)
     * section for more information.
     * @example "scale"
     */
    method?: "crop" | "scale";
    /**
     * Indicates to the server that it should not attempt to fetch
     * the media if it is deemed remote. This is to prevent routing loops
     * where the server contacts itself. Defaults to true if not provided.
     * @default true
     * @example false
     */
    allow_remote?: boolean;
    /**
     * The server name from the `mxc://` URI (the authoritory component)
     * @example "example.org"
     */
    serverName: string;
    /**
     * The media ID from the `mxc://` URI (the path component)
     * @example "ascERGshawAWawugaAcauga"
     */
    mediaId: string;
}

/** A client device */
export type GetDeviceData = {
    /**
     * Identifier of this device.
     * @example "QBUAZIFURK"
     */
    device_id: string;
    /**
     * Display name set by the user for this device. Absent if no name has been
     * set.
     * @example "android"
     */
    display_name?: string;
    /**
     * The IP address where this device was last seen. (May be a few minutes out
     * of date, for efficiency reasons).
     * @example "1.2.3.4"
     */
    last_seen_ip?: string;
    /**
     * The timestamp (in milliseconds since the unix epoch) when this devices
     * was last seen. (May be a few minutes out of date, for efficiency
     * reasons).
     * @format int64
     * @example 1474491775024
     */
    last_seen_ts?: number;
};

export interface GetDevicesData {
    /** A list of all registered devices for this user. */
    devices?: {
        /**
         * Identifier of this device.
         * @example "QBUAZIFURK"
         */
        device_id: string;
        /**
         * Display name set by the user for this device. Absent if no name has been
         * set.
         * @example "android"
         */
        display_name?: string;
        /**
         * The IP address where this device was last seen. (May be a few minutes out
         * of date, for efficiency reasons).
         * @example "1.2.3.4"
         */
        last_seen_ip?: string;
        /**
         * The timestamp (in milliseconds since the unix epoch) when this devices
         * was last seen. (May be a few minutes out of date, for efficiency
         * reasons).
         * @format int64
         * @example 1474491775024
         */
        last_seen_ts?: number;
    }[];
}

export interface GetDisplayNameData {
    /** The user's display name if they have set one, otherwise not present. */
    displayname?: string;
}

/** The events and state surrounding the requested event. */
export interface GetEventContextData {
    /** A token that can be used to paginate forwards with. */
    end?: string;
    /** Details of the requested event. */
    event?: {
        /**
         * The body of this event, as created by the client which sent it.
         * @example {"membership":"join"}
         */
        content: object;
        /**
         * The globally unique identifier for this event.
         * @example "$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45"
         */
        event_id: string;
        /**
         * Timestamp (in milliseconds since the unix epoch) on originating homeserver
         * when this event was sent.
         * @format int64
         * @example 1632489532305
         */
        origin_server_ts: number;
        /**
         * Contains the fully-qualified ID of the user who sent this event.
         * @example "@example:example.org"
         */
        sender: string;
        /**
         * Present if, and only if, this event is a *state* event. The key making
         * this piece of state unique in the room. Note that it is often an empty
         * string.
         *
         * State keys starting with an `@` are reserved for referencing user IDs, such
         * as room members. With the exception of a few events, state events set with a
         * given user's ID as the state key MUST only be set by that user.
         * @example "@user:example.org"
         */
        state_key?: string;
        /**
         * The type of the event.
         * @example "m.room.member"
         */
        type: string;
        /**
         * UnsignedData
         * Contains optional extra information about the event.
         */
        unsigned?: {
            /**
             * The time in milliseconds that has elapsed since the event was sent. This field is generated by the local homeserver, and may be incorrect if the local time on at least one of the two servers is out of sync, which can cause the age to either be negative or greater than it actually is.
             * @format int64
             * @example 1567437
             */
            age?: number;
            /**
             * EventContent
             * The previous `content` for this event. This field is generated
             * by the local homeserver, and is only returned if the event is a state event,
             * and the client has permission to see the previous content.
             */
            prev_content?: object;
            /**
             * ClientEventWithoutRoomID
             * The event that redacted this event, if any.
             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
             */
            redacted_because?: object;
            /**
             * The client-supplied [transaction ID](https://spec.matrix.org/v1.5/client-server-api/#transaction-identifiers), for example, provided via
             * `PUT /_matrix/client/v3/rooms/{roomId}/send/{eventType}/{txnId}`,
             * if the client being given the event is the same one which sent it.
             */
            transaction_id?: string;
        };
    } & {
        /**
         * The ID of the room associated with this event.
         * @example "!jEsUZKDJdhlrceRyVU:example.org"
         */
        room_id: string;
        unsigned?: {
            /**
             * ClientEvent
             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","room_id":"!jEsUZKDJdhlrceRyVU:example.org","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
             */
            redacted_because?: any;
        };
    };
    /**
     * A list of room events that happened just after the
     * requested event, in chronological order.
     */
    events_after?: ({
        /**
         * The body of this event, as created by the client which sent it.
         * @example {"membership":"join"}
         */
        content: object;
        /**
         * The globally unique identifier for this event.
         * @example "$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45"
         */
        event_id: string;
        /**
         * Timestamp (in milliseconds since the unix epoch) on originating homeserver
         * when this event was sent.
         * @format int64
         * @example 1632489532305
         */
        origin_server_ts: number;
        /**
         * Contains the fully-qualified ID of the user who sent this event.
         * @example "@example:example.org"
         */
        sender: string;
        /**
         * Present if, and only if, this event is a *state* event. The key making
         * this piece of state unique in the room. Note that it is often an empty
         * string.
         *
         * State keys starting with an `@` are reserved for referencing user IDs, such
         * as room members. With the exception of a few events, state events set with a
         * given user's ID as the state key MUST only be set by that user.
         * @example "@user:example.org"
         */
        state_key?: string;
        /**
         * The type of the event.
         * @example "m.room.member"
         */
        type: string;
        /**
         * UnsignedData
         * Contains optional extra information about the event.
         */
        unsigned?: {
            /**
             * The time in milliseconds that has elapsed since the event was sent. This field is generated by the local homeserver, and may be incorrect if the local time on at least one of the two servers is out of sync, which can cause the age to either be negative or greater than it actually is.
             * @format int64
             * @example 1567437
             */
            age?: number;
            /**
             * EventContent
             * The previous `content` for this event. This field is generated
             * by the local homeserver, and is only returned if the event is a state event,
             * and the client has permission to see the previous content.
             */
            prev_content?: object;
            /**
             * ClientEventWithoutRoomID
             * The event that redacted this event, if any.
             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
             */
            redacted_because?: object;
            /**
             * The client-supplied [transaction ID](https://spec.matrix.org/v1.5/client-server-api/#transaction-identifiers), for example, provided via
             * `PUT /_matrix/client/v3/rooms/{roomId}/send/{eventType}/{txnId}`,
             * if the client being given the event is the same one which sent it.
             */
            transaction_id?: string;
        };
    } & {
        /**
         * The ID of the room associated with this event.
         * @example "!jEsUZKDJdhlrceRyVU:example.org"
         */
        room_id: string;
        unsigned?: {
            /**
             * ClientEvent
             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","room_id":"!jEsUZKDJdhlrceRyVU:example.org","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
             */
            redacted_because?: any;
        };
    })[];
    /**
     * A list of room events that happened just before the
     * requested event, in reverse-chronological order.
     */
    events_before?: ({
        /**
         * The body of this event, as created by the client which sent it.
         * @example {"membership":"join"}
         */
        content: object;
        /**
         * The globally unique identifier for this event.
         * @example "$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45"
         */
        event_id: string;
        /**
         * Timestamp (in milliseconds since the unix epoch) on originating homeserver
         * when this event was sent.
         * @format int64
         * @example 1632489532305
         */
        origin_server_ts: number;
        /**
         * Contains the fully-qualified ID of the user who sent this event.
         * @example "@example:example.org"
         */
        sender: string;
        /**
         * Present if, and only if, this event is a *state* event. The key making
         * this piece of state unique in the room. Note that it is often an empty
         * string.
         *
         * State keys starting with an `@` are reserved for referencing user IDs, such
         * as room members. With the exception of a few events, state events set with a
         * given user's ID as the state key MUST only be set by that user.
         * @example "@user:example.org"
         */
        state_key?: string;
        /**
         * The type of the event.
         * @example "m.room.member"
         */
        type: string;
        /**
         * UnsignedData
         * Contains optional extra information about the event.
         */
        unsigned?: {
            /**
             * The time in milliseconds that has elapsed since the event was sent. This field is generated by the local homeserver, and may be incorrect if the local time on at least one of the two servers is out of sync, which can cause the age to either be negative or greater than it actually is.
             * @format int64
             * @example 1567437
             */
            age?: number;
            /**
             * EventContent
             * The previous `content` for this event. This field is generated
             * by the local homeserver, and is only returned if the event is a state event,
             * and the client has permission to see the previous content.
             */
            prev_content?: object;
            /**
             * ClientEventWithoutRoomID
             * The event that redacted this event, if any.
             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
             */
            redacted_because?: object;
            /**
             * The client-supplied [transaction ID](https://spec.matrix.org/v1.5/client-server-api/#transaction-identifiers), for example, provided via
             * `PUT /_matrix/client/v3/rooms/{roomId}/send/{eventType}/{txnId}`,
             * if the client being given the event is the same one which sent it.
             */
            transaction_id?: string;
        };
    } & {
        /**
         * The ID of the room associated with this event.
         * @example "!jEsUZKDJdhlrceRyVU:example.org"
         */
        room_id: string;
        unsigned?: {
            /**
             * ClientEvent
             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","room_id":"!jEsUZKDJdhlrceRyVU:example.org","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
             */
            redacted_because?: any;
        };
    })[];
    /** A token that can be used to paginate backwards with. */
    start?: string;
    /** The state of the room at the last event returned. */
    state?: ({
        /**
         * The body of this event, as created by the client which sent it.
         * @example {"membership":"join"}
         */
        content: object;
        /**
         * The globally unique identifier for this event.
         * @example "$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45"
         */
        event_id: string;
        /**
         * Timestamp (in milliseconds since the unix epoch) on originating homeserver
         * when this event was sent.
         * @format int64
         * @example 1632489532305
         */
        origin_server_ts: number;
        /**
         * Contains the fully-qualified ID of the user who sent this event.
         * @example "@example:example.org"
         */
        sender: string;
        /**
         * Present if, and only if, this event is a *state* event. The key making
         * this piece of state unique in the room. Note that it is often an empty
         * string.
         *
         * State keys starting with an `@` are reserved for referencing user IDs, such
         * as room members. With the exception of a few events, state events set with a
         * given user's ID as the state key MUST only be set by that user.
         * @example "@user:example.org"
         */
        state_key?: string;
        /**
         * The type of the event.
         * @example "m.room.member"
         */
        type: string;
        /**
         * UnsignedData
         * Contains optional extra information about the event.
         */
        unsigned?: {
            /**
             * The time in milliseconds that has elapsed since the event was sent. This field is generated by the local homeserver, and may be incorrect if the local time on at least one of the two servers is out of sync, which can cause the age to either be negative or greater than it actually is.
             * @format int64
             * @example 1567437
             */
            age?: number;
            /**
             * EventContent
             * The previous `content` for this event. This field is generated
             * by the local homeserver, and is only returned if the event is a state event,
             * and the client has permission to see the previous content.
             */
            prev_content?: object;
            /**
             * ClientEventWithoutRoomID
             * The event that redacted this event, if any.
             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
             */
            redacted_because?: object;
            /**
             * The client-supplied [transaction ID](https://spec.matrix.org/v1.5/client-server-api/#transaction-identifiers), for example, provided via
             * `PUT /_matrix/client/v3/rooms/{roomId}/send/{eventType}/{txnId}`,
             * if the client being given the event is the same one which sent it.
             */
            transaction_id?: string;
        };
    } & {
        /**
         * The ID of the room associated with this event.
         * @example "!jEsUZKDJdhlrceRyVU:example.org"
         */
        room_id: string;
        unsigned?: {
            /**
             * ClientEvent
             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","room_id":"!jEsUZKDJdhlrceRyVU:example.org","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
             */
            redacted_because?: any;
        };
    })[];
}

export interface GetEventContextParams {
    /**
     * The maximum number of events to return. Default: 10.
     * @example 3
     */
    limit?: number;
    /**
     * A JSON `RoomEventFilter` to filter the returned events with. The
     * filter is only applied to `events_before`, `events_after`, and
     * `state`. It is not applied to the `event` itself. The filter may
     * be applied before or/and after the `limit` parameter - whichever the
     * homeserver prefers.
     *
     * See [Filtering](https://spec.matrix.org/v1.5/client-server-api/#filtering) for more information.
     * @example "66696p746572"
     */
    filter?: string;
    /**
     * The room to get events from.
     * @example "!636q39766251:example.com"
     */
    roomId: string;
    /**
     * The event to get context around.
     * @example "$f3h4d129462ha:example.com"
     */
    eventId: string;
}

export interface GetEventsData {
    /** An array of events. */
    chunk?: ({
        /**
         * The body of this event, as created by the client which sent it.
         * @example {"membership":"join"}
         */
        content: object;
        /**
         * The globally unique identifier for this event.
         * @example "$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45"
         */
        event_id: string;
        /**
         * Timestamp (in milliseconds since the unix epoch) on originating homeserver
         * when this event was sent.
         * @format int64
         * @example 1632489532305
         */
        origin_server_ts: number;
        /**
         * Contains the fully-qualified ID of the user who sent this event.
         * @example "@example:example.org"
         */
        sender: string;
        /**
         * Present if, and only if, this event is a *state* event. The key making
         * this piece of state unique in the room. Note that it is often an empty
         * string.
         *
         * State keys starting with an `@` are reserved for referencing user IDs, such
         * as room members. With the exception of a few events, state events set with a
         * given user's ID as the state key MUST only be set by that user.
         * @example "@user:example.org"
         */
        state_key?: string;
        /**
         * The type of the event.
         * @example "m.room.member"
         */
        type: string;
        /**
         * UnsignedData
         * Contains optional extra information about the event.
         */
        unsigned?: {
            /**
             * The time in milliseconds that has elapsed since the event was sent. This field is generated by the local homeserver, and may be incorrect if the local time on at least one of the two servers is out of sync, which can cause the age to either be negative or greater than it actually is.
             * @format int64
             * @example 1567437
             */
            age?: number;
            /**
             * EventContent
             * The previous `content` for this event. This field is generated
             * by the local homeserver, and is only returned if the event is a state event,
             * and the client has permission to see the previous content.
             */
            prev_content?: object;
            /**
             * ClientEventWithoutRoomID
             * The event that redacted this event, if any.
             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
             */
            redacted_because?: object;
            /**
             * The client-supplied [transaction ID](https://spec.matrix.org/v1.5/client-server-api/#transaction-identifiers), for example, provided via
             * `PUT /_matrix/client/v3/rooms/{roomId}/send/{eventType}/{txnId}`,
             * if the client being given the event is the same one which sent it.
             */
            transaction_id?: string;
        };
    } & {
        /**
         * The ID of the room associated with this event.
         * @example "!jEsUZKDJdhlrceRyVU:example.org"
         */
        room_id: string;
        unsigned?: {
            /**
             * ClientEvent
             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","room_id":"!jEsUZKDJdhlrceRyVU:example.org","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
             */
            redacted_because?: any;
        };
    })[];
    /**
     * A token which correlates to the end of `chunk`. This
     * token should be used in the next request to `/events`.
     */
    end?: string;
    /**
     * A token which correlates to the start of `chunk`. This
     * is usually the same token supplied to `from=`.
     */
    start?: string;
}

export interface GetEventsParams {
    /**
     * The token to stream from. This token is either from a previous
     * request to this API or from the initial sync API.
     * @example "s3456_9_0"
     */
    from?: string;
    /**
     * The maximum time in milliseconds to wait for an event.
     * @example "35000"
     */
    timeout?: number;
}

export type GetFilterData = {
    /** The user account data that isn't associated with rooms to include. */
    account_data?: {
        /** The maximum number of events to return. */
        limit?: number;
        /** A list of sender IDs to exclude. If this list is absent then no senders are excluded. A matching sender will be excluded even if it is listed in the `'senders'` filter. */
        not_senders?: string[];
        /** A list of event types to exclude. If this list is absent then no event types are excluded. A matching type will be excluded even if it is listed in the `'types'` filter. A '*' can be used as a wildcard to match any sequence of characters. */
        not_types?: string[];
        /** A list of senders IDs to include. If this list is absent then all senders are included. */
        senders?: string[];
        /** A list of event types to include. If this list is absent then all event types are included. A `'*'` can be used as a wildcard to match any sequence of characters. */
        types?: string[];
    };
    /** List of event fields to include. If this list is absent then all fields are included. The entries may include '.' characters to indicate sub-fields. So ['content.body'] will include the 'body' field of the 'content' object. A literal '.' character in a field name may be escaped using a '\\'. A server may include more fields than were requested. */
    event_fields?: string[];
    /** The format to use for events. 'client' will return the events in a format suitable for clients. 'federation' will return the raw event as received over federation. The default is 'client'. */
    event_format?: "client" | "federation";
    /** The presence updates to include. */
    presence?: {
        /** The maximum number of events to return. */
        limit?: number;
        /** A list of sender IDs to exclude. If this list is absent then no senders are excluded. A matching sender will be excluded even if it is listed in the `'senders'` filter. */
        not_senders?: string[];
        /** A list of event types to exclude. If this list is absent then no event types are excluded. A matching type will be excluded even if it is listed in the `'types'` filter. A '*' can be used as a wildcard to match any sequence of characters. */
        not_types?: string[];
        /** A list of senders IDs to include. If this list is absent then all senders are included. */
        senders?: string[];
        /** A list of event types to include. If this list is absent then all event types are included. A `'*'` can be used as a wildcard to match any sequence of characters. */
        types?: string[];
    };
    /**
     * RoomFilter
     * Filters to be applied to room data.
     */
    room?: {
        /** The per user account data to include for rooms. */
        account_data?: {
            /** The maximum number of events to return. */
            limit?: number;
            /** A list of sender IDs to exclude. If this list is absent then no senders are excluded. A matching sender will be excluded even if it is listed in the `'senders'` filter. */
            not_senders?: string[];
            /** A list of event types to exclude. If this list is absent then no event types are excluded. A matching type will be excluded even if it is listed in the `'types'` filter. A '*' can be used as a wildcard to match any sequence of characters. */
            not_types?: string[];
            /** A list of senders IDs to include. If this list is absent then all senders are included. */
            senders?: string[];
            /** A list of event types to include. If this list is absent then all event types are included. A `'*'` can be used as a wildcard to match any sequence of characters. */
            types?: string[];
        } & {
            /** If `true`, includes only events with a `url` key in their content. If `false`, excludes those events. If omitted, `url` key is not considered for filtering. */
            contains_url?: boolean;
            /**
             * If `true`, sends all membership events for all events, even if they have already
             * been sent to the client. Does not
             * apply unless `lazy_load_members` is `true`. See
             * [Lazy-loading room members](https://spec.matrix.org/v1.5/client-server-api/#lazy-loading-room-members)
             * for more information. Defaults to `false`.
             */
            include_redundant_members?: boolean;
            /**
             * If `true`, enables lazy-loading of membership events. See
             * [Lazy-loading room members](https://spec.matrix.org/v1.5/client-server-api/#lazy-loading-room-members)
             * for more information. Defaults to `false`.
             */
            lazy_load_members?: boolean;
            /** A list of room IDs to exclude. If this list is absent then no rooms are excluded. A matching room will be excluded even if it is listed in the `'rooms'` filter. */
            not_rooms?: string[];
            /** A list of room IDs to include. If this list is absent then all rooms are included. */
            rooms?: string[];
            /**
             * If `true`, enables per-[thread](https://spec.matrix.org/v1.5/client-server-api/#threading) notification
             * counts. Only applies to the `/sync` endpoint. Defaults to `false`.
             */
            unread_thread_notifications?: boolean;
        };
        /** The ephemeral events to include for rooms. These are the events that appear in the `ephemeral` property in the `/sync` response. */
        ephemeral?: {
            /** The maximum number of events to return. */
            limit?: number;
            /** A list of sender IDs to exclude. If this list is absent then no senders are excluded. A matching sender will be excluded even if it is listed in the `'senders'` filter. */
            not_senders?: string[];
            /** A list of event types to exclude. If this list is absent then no event types are excluded. A matching type will be excluded even if it is listed in the `'types'` filter. A '*' can be used as a wildcard to match any sequence of characters. */
            not_types?: string[];
            /** A list of senders IDs to include. If this list is absent then all senders are included. */
            senders?: string[];
            /** A list of event types to include. If this list is absent then all event types are included. A `'*'` can be used as a wildcard to match any sequence of characters. */
            types?: string[];
        } & {
            /** If `true`, includes only events with a `url` key in their content. If `false`, excludes those events. If omitted, `url` key is not considered for filtering. */
            contains_url?: boolean;
            /**
             * If `true`, sends all membership events for all events, even if they have already
             * been sent to the client. Does not
             * apply unless `lazy_load_members` is `true`. See
             * [Lazy-loading room members](https://spec.matrix.org/v1.5/client-server-api/#lazy-loading-room-members)
             * for more information. Defaults to `false`.
             */
            include_redundant_members?: boolean;
            /**
             * If `true`, enables lazy-loading of membership events. See
             * [Lazy-loading room members](https://spec.matrix.org/v1.5/client-server-api/#lazy-loading-room-members)
             * for more information. Defaults to `false`.
             */
            lazy_load_members?: boolean;
            /** A list of room IDs to exclude. If this list is absent then no rooms are excluded. A matching room will be excluded even if it is listed in the `'rooms'` filter. */
            not_rooms?: string[];
            /** A list of room IDs to include. If this list is absent then all rooms are included. */
            rooms?: string[];
            /**
             * If `true`, enables per-[thread](https://spec.matrix.org/v1.5/client-server-api/#threading) notification
             * counts. Only applies to the `/sync` endpoint. Defaults to `false`.
             */
            unread_thread_notifications?: boolean;
        };
        /** Include rooms that the user has left in the sync, default false */
        include_leave?: boolean;
        /** A list of room IDs to exclude. If this list is absent then no rooms are excluded. A matching room will be excluded even if it is listed in the `'rooms'` filter. This filter is applied before the filters in `ephemeral`, `state`, `timeline` or `account_data` */
        not_rooms?: string[];
        /** A list of room IDs to include. If this list is absent then all rooms are included. This filter is applied before the filters in `ephemeral`, `state`, `timeline` or `account_data` */
        rooms?: string[];
        /**
         * StateFilter
         * The state events to include for rooms.
         */
        state?: {
            /** The maximum number of events to return. */
            limit?: number;
            /** A list of sender IDs to exclude. If this list is absent then no senders are excluded. A matching sender will be excluded even if it is listed in the `'senders'` filter. */
            not_senders?: string[];
            /** A list of event types to exclude. If this list is absent then no event types are excluded. A matching type will be excluded even if it is listed in the `'types'` filter. A '*' can be used as a wildcard to match any sequence of characters. */
            not_types?: string[];
            /** A list of senders IDs to include. If this list is absent then all senders are included. */
            senders?: string[];
            /** A list of event types to include. If this list is absent then all event types are included. A `'*'` can be used as a wildcard to match any sequence of characters. */
            types?: string[];
        } & {
            /** If `true`, includes only events with a `url` key in their content. If `false`, excludes those events. If omitted, `url` key is not considered for filtering. */
            contains_url?: boolean;
            /**
             * If `true`, sends all membership events for all events, even if they have already
             * been sent to the client. Does not
             * apply unless `lazy_load_members` is `true`. See
             * [Lazy-loading room members](https://spec.matrix.org/v1.5/client-server-api/#lazy-loading-room-members)
             * for more information. Defaults to `false`.
             */
            include_redundant_members?: boolean;
            /**
             * If `true`, enables lazy-loading of membership events. See
             * [Lazy-loading room members](https://spec.matrix.org/v1.5/client-server-api/#lazy-loading-room-members)
             * for more information. Defaults to `false`.
             */
            lazy_load_members?: boolean;
            /** A list of room IDs to exclude. If this list is absent then no rooms are excluded. A matching room will be excluded even if it is listed in the `'rooms'` filter. */
            not_rooms?: string[];
            /** A list of room IDs to include. If this list is absent then all rooms are included. */
            rooms?: string[];
            /**
             * If `true`, enables per-[thread](https://spec.matrix.org/v1.5/client-server-api/#threading) notification
             * counts. Only applies to the `/sync` endpoint. Defaults to `false`.
             */
            unread_thread_notifications?: boolean;
        };
        /** The message and state update events to include for rooms. */
        timeline?: {
            /** The maximum number of events to return. */
            limit?: number;
            /** A list of sender IDs to exclude. If this list is absent then no senders are excluded. A matching sender will be excluded even if it is listed in the `'senders'` filter. */
            not_senders?: string[];
            /** A list of event types to exclude. If this list is absent then no event types are excluded. A matching type will be excluded even if it is listed in the `'types'` filter. A '*' can be used as a wildcard to match any sequence of characters. */
            not_types?: string[];
            /** A list of senders IDs to include. If this list is absent then all senders are included. */
            senders?: string[];
            /** A list of event types to include. If this list is absent then all event types are included. A `'*'` can be used as a wildcard to match any sequence of characters. */
            types?: string[];
        } & {
            /** If `true`, includes only events with a `url` key in their content. If `false`, excludes those events. If omitted, `url` key is not considered for filtering. */
            contains_url?: boolean;
            /**
             * If `true`, sends all membership events for all events, even if they have already
             * been sent to the client. Does not
             * apply unless `lazy_load_members` is `true`. See
             * [Lazy-loading room members](https://spec.matrix.org/v1.5/client-server-api/#lazy-loading-room-members)
             * for more information. Defaults to `false`.
             */
            include_redundant_members?: boolean;
            /**
             * If `true`, enables lazy-loading of membership events. See
             * [Lazy-loading room members](https://spec.matrix.org/v1.5/client-server-api/#lazy-loading-room-members)
             * for more information. Defaults to `false`.
             */
            lazy_load_members?: boolean;
            /** A list of room IDs to exclude. If this list is absent then no rooms are excluded. A matching room will be excluded even if it is listed in the `'rooms'` filter. */
            not_rooms?: string[];
            /** A list of room IDs to include. If this list is absent then all rooms are included. */
            rooms?: string[];
            /**
             * If `true`, enables per-[thread](https://spec.matrix.org/v1.5/client-server-api/#threading) notification
             * counts. Only applies to the `/sync` endpoint. Defaults to `false`.
             */
            unread_thread_notifications?: boolean;
        };
    };
};

export interface GetJoinedMembersByRoomData {
    /** A map from user ID to a RoomMember object. */
    joined?: Record<
        string,
        {
            /**
             * The mxc avatar url of the user this object is representing.
             * @format uri
             */
            avatar_url?: string;
            /** The display name of the user this object is representing. */
            display_name?: string;
        }
    >;
}

export interface GetJoinedRoomsData {
    /** The ID of each room in which the user has `joined` membership. */
    joined_rooms: string[];
}

export interface GetKeysChangesData {
    /**
     * The Matrix User IDs of all users who updated their device
     * identity keys.
     * @example ["@alice:example.com","@bob:example.org"]
     */
    changed?: string[];
    /**
     * The Matrix User IDs of all users who may have left all
     * the end-to-end encrypted rooms they previously shared
     * with the user.
     * @example ["@clara:example.com","@doug:example.org"]
     */
    left?: string[];
}

export interface GetKeysChangesParams {
    /**
     * The desired start point of the list. Should be the `next_batch` field
     * from a response to an earlier call to [`/sync`](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3sync). Users who have not
     * uploaded new device identity keys since this point, nor deleted
     * existing devices with identity keys since then, will be excluded
     * from the results.
     * @example "s72594_4483_1934"
     */
    from: string;
    /**
     * The desired end point of the list. Should be the `next_batch`
     * field from a recent call to [`/sync`](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3sync) - typically the most recent
     * such call. This may be used by the server as a hint to check its
     * caches are up to date.
     * @example "s75689_5632_2435"
     */
    to: string;
}

export interface GetLocalAliasesData {
    /** The server's local aliases on the room. Can be empty. */
    aliases: string[];
}

/**
 * Error Error RateLimitError
 * A Matrix-level Error
 * A Matrix-level Error
 * The rate limit was reached for this request
 */
export type GetLocalAliasesError =
    | {
          /**
           * An error code.
           * @example "M_UNKNOWN"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "An unknown error occurred"
           */
          error?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

export interface GetLoginFlowsData {
    /** The homeserver's supported login types */
    flows?: {
        /**
         * The login type. This is supplied as the `type` when
         * logging in.
         */
        type?: string;
    }[];
}

/**
 * RateLimitError
 * The rate limit was reached for this request
 */
export type GetLoginFlowsError = {
    /**
     * The M_LIMIT_EXCEEDED error code
     * @example "M_LIMIT_EXCEEDED"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "Too many requests"
     */
    error?: string;
    /**
     * The amount of time in milliseconds the client should wait
     * before trying the request again.
     * @example 2000
     */
    retry_after_ms?: number;
};

export interface GetMembersByRoomData {
    chunk?: ({
        /**
         * The body of this event, as created by the client which sent it.
         * @example {"membership":"join"}
         */
        content: object;
        /**
         * The globally unique identifier for this event.
         * @example "$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45"
         */
        event_id: string;
        /**
         * Timestamp (in milliseconds since the unix epoch) on originating homeserver
         * when this event was sent.
         * @format int64
         * @example 1632489532305
         */
        origin_server_ts: number;
        /**
         * Contains the fully-qualified ID of the user who sent this event.
         * @example "@example:example.org"
         */
        sender: string;
        /**
         * Present if, and only if, this event is a *state* event. The key making
         * this piece of state unique in the room. Note that it is often an empty
         * string.
         *
         * State keys starting with an `@` are reserved for referencing user IDs, such
         * as room members. With the exception of a few events, state events set with a
         * given user's ID as the state key MUST only be set by that user.
         * @example "@user:example.org"
         */
        state_key?: string;
        /**
         * The type of the event.
         * @example "m.room.member"
         */
        type: string;
        /**
         * UnsignedData
         * Contains optional extra information about the event.
         */
        unsigned?: {
            /**
             * The time in milliseconds that has elapsed since the event was sent. This field is generated by the local homeserver, and may be incorrect if the local time on at least one of the two servers is out of sync, which can cause the age to either be negative or greater than it actually is.
             * @format int64
             * @example 1567437
             */
            age?: number;
            /**
             * EventContent
             * The previous `content` for this event. This field is generated
             * by the local homeserver, and is only returned if the event is a state event,
             * and the client has permission to see the previous content.
             */
            prev_content?: object;
            /**
             * ClientEventWithoutRoomID
             * The event that redacted this event, if any.
             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
             */
            redacted_because?: object;
            /**
             * The client-supplied [transaction ID](https://spec.matrix.org/v1.5/client-server-api/#transaction-identifiers), for example, provided via
             * `PUT /_matrix/client/v3/rooms/{roomId}/send/{eventType}/{txnId}`,
             * if the client being given the event is the same one which sent it.
             */
            transaction_id?: string;
        };
    } & {
        /**
         * The ID of the room associated with this event.
         * @example "!jEsUZKDJdhlrceRyVU:example.org"
         */
        room_id: string;
        unsigned?: {
            /**
             * ClientEvent
             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","room_id":"!jEsUZKDJdhlrceRyVU:example.org","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
             */
            redacted_because?: any;
        };
    })[];
}

export interface GetMembersByRoomParams {
    /**
     * The point in time (pagination token) to return members for in the room.
     * This token can be obtained from a `prev_batch` token returned for
     * each room by the sync API. Defaults to the current state of the room,
     * as determined by the server.
     * @example "YWxsCgpOb25lLDM1ODcwOA"
     */
    at?: string;
    /**
     * The kind of membership to filter for. Defaults to no filtering if
     * unspecified. When specified alongside `not_membership`, the two
     * parameters create an 'or' condition: either the membership *is*
     * the same as `membership` **or** *is not* the same as `not_membership`.
     * @example "join"
     */
    membership?: "join" | "invite" | "knock" | "leave" | "ban";
    /**
     * The kind of membership to exclude from the results. Defaults to no
     * filtering if unspecified.
     * @example "leave"
     */
    not_membership?: "join" | "invite" | "knock" | "leave" | "ban";
    /**
     * The room to get the member events for.
     * @example "!636q39766251:example.com"
     */
    roomId: string;
}

export interface GetNotificationsData {
    /**
     * The token to supply in the `from` param of the next
     * `/notifications` request in order to request more
     * events. If this is absent, there are no more results.
     */
    next_token?: string;
    /** The list of events that triggered notifications. */
    notifications: {
        /**
         * The action(s) to perform when the conditions for this rule are met.
         * See [Push Rules: API](https://spec.matrix.org/v1.5/client-server-api/#push-rules-api).
         */
        actions: (object | string)[];
        /**
         * Event
         * The Event object for the event that triggered the notification.
         */
        event: {
            /**
             * The body of this event, as created by the client which sent it.
             * @example {"membership":"join"}
             */
            content: object;
            /**
             * The globally unique identifier for this event.
             * @example "$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45"
             */
            event_id: string;
            /**
             * Timestamp (in milliseconds since the unix epoch) on originating homeserver
             * when this event was sent.
             * @format int64
             * @example 1632489532305
             */
            origin_server_ts: number;
            /**
             * Contains the fully-qualified ID of the user who sent this event.
             * @example "@example:example.org"
             */
            sender: string;
            /**
             * Present if, and only if, this event is a *state* event. The key making
             * this piece of state unique in the room. Note that it is often an empty
             * string.
             *
             * State keys starting with an `@` are reserved for referencing user IDs, such
             * as room members. With the exception of a few events, state events set with a
             * given user's ID as the state key MUST only be set by that user.
             * @example "@user:example.org"
             */
            state_key?: string;
            /**
             * The type of the event.
             * @example "m.room.member"
             */
            type: string;
            /**
             * UnsignedData
             * Contains optional extra information about the event.
             */
            unsigned?: {
                /**
                 * The time in milliseconds that has elapsed since the event was sent. This field is generated by the local homeserver, and may be incorrect if the local time on at least one of the two servers is out of sync, which can cause the age to either be negative or greater than it actually is.
                 * @format int64
                 * @example 1567437
                 */
                age?: number;
                /**
                 * EventContent
                 * The previous `content` for this event. This field is generated
                 * by the local homeserver, and is only returned if the event is a state event,
                 * and the client has permission to see the previous content.
                 */
                prev_content?: object;
                /**
                 * ClientEventWithoutRoomID
                 * The event that redacted this event, if any.
                 * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
                 */
                redacted_because?: object;
                /**
                 * The client-supplied [transaction ID](https://spec.matrix.org/v1.5/client-server-api/#transaction-identifiers), for example, provided via
                 * `PUT /_matrix/client/v3/rooms/{roomId}/send/{eventType}/{txnId}`,
                 * if the client being given the event is the same one which sent it.
                 */
                transaction_id?: string;
            };
        };
        /** The profile tag of the rule that matched this event. */
        profile_tag?: string;
        /**
         * Indicates whether the user has sent a read receipt indicating
         * that they have read this message.
         */
        read: boolean;
        /** The ID of the room in which the event was posted. */
        room_id: string;
        /**
         * The unix timestamp at which the event notification was sent,
         * in milliseconds.
         * @format int64
         */
        ts: number;
    }[];
}

export interface GetNotificationsParams {
    /**
     * Pagination token to continue from. This should be the `next_token`
     * returned from an earlier call to this endpoint.
     * @example "xxxxx"
     */
    from?: string;
    /**
     * Limit on the number of events to return in this request.
     * @example 20
     */
    limit?: number;
    /**
     * Allows basic filtering of events returned. Supply `highlight`
     * to return only events where the notification had the highlight
     * tweak set.
     * @example "highlight"
     */
    only?: string;
}

/**
 * ClientEvent
 * The format used for events when they are returned from a homeserver to a client
 * via the Client-Server API, or sent to an Application Service via the Application Services API.
 */
export type GetOneEventData = {
    /**
     * The body of this event, as created by the client which sent it.
     * @example {"membership":"join"}
     */
    content: object;
    /**
     * The globally unique identifier for this event.
     * @example "$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45"
     */
    event_id: string;
    /**
     * Timestamp (in milliseconds since the unix epoch) on originating homeserver
     * when this event was sent.
     * @format int64
     * @example 1632489532305
     */
    origin_server_ts: number;
    /**
     * Contains the fully-qualified ID of the user who sent this event.
     * @example "@example:example.org"
     */
    sender: string;
    /**
     * Present if, and only if, this event is a *state* event. The key making
     * this piece of state unique in the room. Note that it is often an empty
     * string.
     *
     * State keys starting with an `@` are reserved for referencing user IDs, such
     * as room members. With the exception of a few events, state events set with a
     * given user's ID as the state key MUST only be set by that user.
     * @example "@user:example.org"
     */
    state_key?: string;
    /**
     * The type of the event.
     * @example "m.room.member"
     */
    type: string;
    /**
     * UnsignedData
     * Contains optional extra information about the event.
     */
    unsigned?: {
        /**
         * The time in milliseconds that has elapsed since the event was sent. This field is generated by the local homeserver, and may be incorrect if the local time on at least one of the two servers is out of sync, which can cause the age to either be negative or greater than it actually is.
         * @format int64
         * @example 1567437
         */
        age?: number;
        /**
         * EventContent
         * The previous `content` for this event. This field is generated
         * by the local homeserver, and is only returned if the event is a state event,
         * and the client has permission to see the previous content.
         */
        prev_content?: object;
        /**
         * ClientEventWithoutRoomID
         * The event that redacted this event, if any.
         * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
         */
        redacted_because?: object;
        /**
         * The client-supplied [transaction ID](https://spec.matrix.org/v1.5/client-server-api/#transaction-identifiers), for example, provided via
         * `PUT /_matrix/client/v3/rooms/{roomId}/send/{eventType}/{txnId}`,
         * if the client being given the event is the same one which sent it.
         */
        transaction_id?: string;
    };
} & {
    /**
     * The ID of the room associated with this event.
     * @example "!jEsUZKDJdhlrceRyVU:example.org"
     */
    room_id: string;
    unsigned?: {
        /**
         * ClientEvent
         * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","room_id":"!jEsUZKDJdhlrceRyVU:example.org","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
         */
        redacted_because?: any;
    };
};

/**
 * ClientEvent
 * The format used for events when they are returned from a homeserver to a client
 * via the Client-Server API, or sent to an Application Service via the Application Services API.
 */
export type GetOneRoomEventData = {
    /**
     * The body of this event, as created by the client which sent it.
     * @example {"membership":"join"}
     */
    content: object;
    /**
     * The globally unique identifier for this event.
     * @example "$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45"
     */
    event_id: string;
    /**
     * Timestamp (in milliseconds since the unix epoch) on originating homeserver
     * when this event was sent.
     * @format int64
     * @example 1632489532305
     */
    origin_server_ts: number;
    /**
     * Contains the fully-qualified ID of the user who sent this event.
     * @example "@example:example.org"
     */
    sender: string;
    /**
     * Present if, and only if, this event is a *state* event. The key making
     * this piece of state unique in the room. Note that it is often an empty
     * string.
     *
     * State keys starting with an `@` are reserved for referencing user IDs, such
     * as room members. With the exception of a few events, state events set with a
     * given user's ID as the state key MUST only be set by that user.
     * @example "@user:example.org"
     */
    state_key?: string;
    /**
     * The type of the event.
     * @example "m.room.member"
     */
    type: string;
    /**
     * UnsignedData
     * Contains optional extra information about the event.
     */
    unsigned?: {
        /**
         * The time in milliseconds that has elapsed since the event was sent. This field is generated by the local homeserver, and may be incorrect if the local time on at least one of the two servers is out of sync, which can cause the age to either be negative or greater than it actually is.
         * @format int64
         * @example 1567437
         */
        age?: number;
        /**
         * EventContent
         * The previous `content` for this event. This field is generated
         * by the local homeserver, and is only returned if the event is a state event,
         * and the client has permission to see the previous content.
         */
        prev_content?: object;
        /**
         * ClientEventWithoutRoomID
         * The event that redacted this event, if any.
         * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
         */
        redacted_because?: object;
        /**
         * The client-supplied [transaction ID](https://spec.matrix.org/v1.5/client-server-api/#transaction-identifiers), for example, provided via
         * `PUT /_matrix/client/v3/rooms/{roomId}/send/{eventType}/{txnId}`,
         * if the client being given the event is the same one which sent it.
         */
        transaction_id?: string;
    };
} & {
    /**
     * The ID of the room associated with this event.
     * @example "!jEsUZKDJdhlrceRyVU:example.org"
     */
    room_id: string;
    unsigned?: {
        /**
         * ClientEvent
         * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","room_id":"!jEsUZKDJdhlrceRyVU:example.org","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
         */
        redacted_because?: any;
    };
};

/**
 * Error
 * A Matrix-level Error
 */
export type GetOneRoomEventError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

export interface GetPresenceData {
    /** Whether the user is currently active */
    currently_active?: boolean;
    /**
     * The length of time in milliseconds since an action was performed
     * by this user.
     */
    last_active_ago?: number;
    /** This user's presence. */
    presence: "online" | "offline" | "unavailable";
    /** The state message for this user if one was set. */
    status_msg?: string | null;
}

/**
 * Error Error
 * A Matrix-level Error
 * A Matrix-level Error
 */
export type GetPresenceError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

/** Protocol */
export interface GetProtocolMetadataData {
    /**
     * Field Types
     * The type definitions for the fields defined in the `user_fields` and
     * `location_fields`. Each entry in those arrays MUST have an entry here. The
     * `string` key for this object is field name itself.
     *
     * May be an empty object if no fields are defined.
     * @example {"channel":{"placeholder":"#foobar","regexp":"#[^\\s]+"},"network":{"placeholder":"irc.example.org","regexp":"([a-z0-9]+\\.)*[a-z0-9]+"},"nickname":{"placeholder":"username","regexp":"[^\\s#]+"}}
     */
    field_types: Record<
        string,
        {
            /** An placeholder serving as a valid example of the field value. */
            placeholder: string;
            /**
             * A regular expression for validation of a field's value. This may be relatively
             * coarse to verify the value as the application service providing this protocol
             * may apply additional validation or filtering.
             */
            regexp: string;
        }
    >;
    /**
     * A content URI representing an icon for the third party protocol.
     * @example "mxc://example.org/aBcDeFgH"
     */
    icon: string;
    /**
     * A list of objects representing independent instances of configuration.
     * For example, multiple networks on IRC if multiple are provided by the
     * same application service.
     */
    instances: {
        /**
         * A human-readable description for the protocol, such as the name.
         * @example "Freenode"
         */
        desc: string;
        /**
         * Preset values for `fields` the client may use to search by.
         * @example {"network":"freenode"}
         */
        fields: object;
        /**
         * An optional content URI representing the protocol. Overrides the one provided
         * at the higher level Protocol object.
         * @example "mxc://example.org/JkLmNoPq"
         */
        icon?: string;
        /**
         * A unique identifier across all instances.
         * @example "freenode"
         */
        network_id: string;
    }[];
    /**
     * Fields which may be used to identify a third party location. These should be
     * ordered to suggest the way that entities may be grouped, where higher
     * groupings are ordered first. For example, the name of a network should be
     * searched before the name of a channel.
     * @example ["network","channel"]
     */
    location_fields: string[];
    /**
     * Fields which may be used to identify a third party user. These should be
     * ordered to suggest the way that entities may be grouped, where higher
     * groupings are ordered first. For example, the name of a network should be
     * searched before the nickname of a user.
     * @example ["network","nickname"]
     */
    user_fields: string[];
}

/**
 * Error
 * A Matrix-level Error
 */
export type GetProtocolMetadataError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

/**
 * Dictionary of supported third party protocols.
 * @example {"gitter":{"field_types":{"room":{"placeholder":"matrix-org/matrix-doc","regexp":"[^\\s]+\\/[^\\s]+"},"username":{"placeholder":"@username","regexp":"@[^\\s]+"}},"instances":[{"desc":"Gitter","fields":{},"icon":"mxc://example.org/zXyWvUt","network_id":"gitter"}],"location_fields":["room"],"user_fields":["username"]},"irc":{"field_types":{"channel":{"placeholder":"#foobar","regexp":"#[^\\s]+"},"network":{"placeholder":"irc.example.org","regexp":"([a-z0-9]+\\.)*[a-z0-9]+"},"nickname":{"placeholder":"username","regexp":"[^\\s]+"}},"icon":"mxc://example.org/aBcDeFgH","instances":[{"desc":"Freenode","fields":{"network":"freenode.net"},"icon":"mxc://example.org/JkLmNoPq","network_id":"freenode"}],"location_fields":["network","channel"],"user_fields":["network","nickname"]}}
 */
export type GetProtocolsData = Record<
    string,
    {
        /**
         * Field Types
         * The type definitions for the fields defined in the `user_fields` and
         * `location_fields`. Each entry in those arrays MUST have an entry here. The
         * `string` key for this object is field name itself.
         *
         * May be an empty object if no fields are defined.
         * @example {"channel":{"placeholder":"#foobar","regexp":"#[^\\s]+"},"network":{"placeholder":"irc.example.org","regexp":"([a-z0-9]+\\.)*[a-z0-9]+"},"nickname":{"placeholder":"username","regexp":"[^\\s#]+"}}
         */
        field_types: Record<
            string,
            {
                /** An placeholder serving as a valid example of the field value. */
                placeholder: string;
                /**
                 * A regular expression for validation of a field's value. This may be relatively
                 * coarse to verify the value as the application service providing this protocol
                 * may apply additional validation or filtering.
                 */
                regexp: string;
            }
        >;
        /**
         * A content URI representing an icon for the third party protocol.
         * @example "mxc://example.org/aBcDeFgH"
         */
        icon: string;
        /**
         * A list of objects representing independent instances of configuration.
         * For example, multiple networks on IRC if multiple are provided by the
         * same application service.
         */
        instances: {
            /**
             * A human-readable description for the protocol, such as the name.
             * @example "Freenode"
             */
            desc: string;
            /**
             * Preset values for `fields` the client may use to search by.
             * @example {"network":"freenode"}
             */
            fields: object;
            /**
             * An optional content URI representing the protocol. Overrides the one provided
             * at the higher level Protocol object.
             * @example "mxc://example.org/JkLmNoPq"
             */
            icon?: string;
            /**
             * A unique identifier across all instances.
             * @example "freenode"
             */
            network_id: string;
        }[];
        /**
         * Fields which may be used to identify a third party location. These should be
         * ordered to suggest the way that entities may be grouped, where higher
         * groupings are ordered first. For example, the name of a network should be
         * searched before the name of a channel.
         * @example ["network","channel"]
         */
        location_fields: string[];
        /**
         * Fields which may be used to identify a third party user. These should be
         * ordered to suggest the way that entities may be grouped, where higher
         * groupings are ordered first. For example, the name of a network should be
         * searched before the nickname of a user.
         * @example ["network","nickname"]
         */
        user_fields: string[];
    }
>;

/**
 * A list of the rooms on the server.
 * @example {"chunk":[{"avatar_url":"mxc://bleecker.street/CHEDDARandBRIE","guest_can_join":false,"join_rule":"public","name":"CHEESE","num_joined_members":37,"room_id":"!ol19s:bleecker.street","room_type":"m.space","topic":"Tasty tasty cheese","world_readable":true}],"next_batch":"p190q","prev_batch":"p1902","total_room_count_estimate":115}
 */
export interface GetPublicRoomsData {
    /** A paginated chunk of public rooms. */
    chunk: ({
        /**
         * The URL for the room's avatar, if one is set.
         * @format uri
         * @example "mxc://example.org/abcdef"
         */
        avatar_url?: string;
        /**
         * The canonical alias of the room, if any.
         * @example "#general:example.org"
         */
        canonical_alias?: string;
        /**
         * Whether guest users may join the room and participate in it.
         * If they can, they will be subject to ordinary power level
         * rules like any other user.
         * @example true
         */
        guest_can_join: boolean;
        /**
         * The room's join rule. When not present, the room is assumed to
         * be `public`.
         * @example "public"
         */
        join_rule?: string;
        /**
         * The name of the room, if any.
         * @example "General Chat"
         */
        name?: string;
        /**
         * The number of members joined to the room.
         * @example 42
         */
        num_joined_members: number;
        /**
         * The ID of the room.
         * @example "!abcdefg:example.org"
         */
        room_id: string;
        /** The `type` of room (from [`m.room.create`](https://spec.matrix.org/v1.5/client-server-api/#mroomcreate)), if any. */
        room_type?: string;
        /**
         * The topic of the room, if any.
         * @example "All things general"
         */
        topic?: string;
        /**
         * Whether the room may be viewed by guest users without joining.
         * @example false
         */
        world_readable: boolean;
    } & {
        /**
         * The room's join rule. When not present, the room is assumed to
         * be `public`. Note that rooms with `invite` join rules are not
         * expected here, but rooms with `knock` rules are given their
         * near-public nature.
         * @example "public"
         */
        join_rule?: string;
    })[];
    /**
     * A pagination token for the response. The absence of this token
     * means there are no more results to fetch and the client should
     * stop paginating.
     */
    next_batch?: string;
    /**
     * A pagination token that allows fetching previous results. The
     * absence of this token means there are no results before this
     * batch, i.e. this is the first batch.
     */
    prev_batch?: string;
    /**
     * An estimate on the total number of public rooms, if the
     * server has an estimate.
     */
    total_room_count_estimate?: number;
}

export interface GetPublicRoomsParams {
    /** Limit the number of results returned. */
    limit?: number;
    /**
     * A pagination token from a previous request, allowing clients to
     * get the next (or previous) batch of rooms.
     * The direction of pagination is specified solely by which token
     * is supplied, rather than via an explicit flag.
     */
    since?: string;
    /**
     * The server to fetch the public room lists from. Defaults to the
     * local server.
     */
    server?: string;
}

export interface GetPushRuleActionsData {
    /** The action(s) to perform for this rule. */
    actions: (string | object)[];
}

/**
 * Error
 * A Matrix-level Error
 */
export type GetPushRuleActionsError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

/** The push rule. */
export type GetPushRuleData = {
    /** The actions to perform when this rule is matched. */
    actions: (object | string)[];
    /**
     * The conditions that must hold true for an event in order for a rule to be
     * applied to an event. A rule with no conditions always matches. Only
     * applicable to `underride` and `override` rules.
     */
    conditions?: {
        /**
         * Required for `room_member_count` conditions. A decimal integer
         * optionally prefixed by one of, ==, <, >, >= or <=. A prefix of < matches
         * rooms where the member count is strictly less than the given number and
         * so forth. If no prefix is present, this parameter defaults to ==.
         */
        is?: string;
        /**
         * Required for `event_match` conditions. The dot-separated field of the
         * event to match.
         *
         * Required for `sender_notification_permission` conditions. The field in
         * the power level event the user needs a minimum power level for. Fields
         * must be specified under the `notifications` property in the power level
         * event's `content`.
         */
        key?: string;
        /**
         * The kind of condition to apply. See [conditions](https://spec.matrix.org/v1.5/client-server-api/#conditions) for
         * more information on the allowed kinds and how they work.
         */
        kind: string;
        /**
         * Required for `event_match` conditions. The glob-style pattern to
         * match against.
         */
        pattern?: string;
    }[];
    /** Whether this is a default rule, or has been set explicitly. */
    default: boolean;
    /** Whether the push rule is enabled or not. */
    enabled: boolean;
    /**
     * The glob-style pattern to match against.  Only applicable to `content`
     * rules.
     */
    pattern?: string;
    /** The ID of this rule. */
    rule_id: string;
};

/**
 * Error
 * A Matrix-level Error
 */
export type GetPushRuleError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

export interface GetPushRulesData {
    /**
     * Ruleset
     * The global ruleset.
     */
    global: {
        content?: {
            /** The actions to perform when this rule is matched. */
            actions: (object | string)[];
            /**
             * The conditions that must hold true for an event in order for a rule to be
             * applied to an event. A rule with no conditions always matches. Only
             * applicable to `underride` and `override` rules.
             */
            conditions?: {
                /**
                 * Required for `room_member_count` conditions. A decimal integer
                 * optionally prefixed by one of, ==, <, >, >= or <=. A prefix of < matches
                 * rooms where the member count is strictly less than the given number and
                 * so forth. If no prefix is present, this parameter defaults to ==.
                 */
                is?: string;
                /**
                 * Required for `event_match` conditions. The dot-separated field of the
                 * event to match.
                 *
                 * Required for `sender_notification_permission` conditions. The field in
                 * the power level event the user needs a minimum power level for. Fields
                 * must be specified under the `notifications` property in the power level
                 * event's `content`.
                 */
                key?: string;
                /**
                 * The kind of condition to apply. See [conditions](https://spec.matrix.org/v1.5/client-server-api/#conditions) for
                 * more information on the allowed kinds and how they work.
                 */
                kind: string;
                /**
                 * Required for `event_match` conditions. The glob-style pattern to
                 * match against.
                 */
                pattern?: string;
            }[];
            /** Whether this is a default rule, or has been set explicitly. */
            default: boolean;
            /** Whether the push rule is enabled or not. */
            enabled: boolean;
            /**
             * The glob-style pattern to match against.  Only applicable to `content`
             * rules.
             */
            pattern?: string;
            /** The ID of this rule. */
            rule_id: string;
        }[];
        override?: {
            /** The actions to perform when this rule is matched. */
            actions: (object | string)[];
            /**
             * The conditions that must hold true for an event in order for a rule to be
             * applied to an event. A rule with no conditions always matches. Only
             * applicable to `underride` and `override` rules.
             */
            conditions?: {
                /**
                 * Required for `room_member_count` conditions. A decimal integer
                 * optionally prefixed by one of, ==, <, >, >= or <=. A prefix of < matches
                 * rooms where the member count is strictly less than the given number and
                 * so forth. If no prefix is present, this parameter defaults to ==.
                 */
                is?: string;
                /**
                 * Required for `event_match` conditions. The dot-separated field of the
                 * event to match.
                 *
                 * Required for `sender_notification_permission` conditions. The field in
                 * the power level event the user needs a minimum power level for. Fields
                 * must be specified under the `notifications` property in the power level
                 * event's `content`.
                 */
                key?: string;
                /**
                 * The kind of condition to apply. See [conditions](https://spec.matrix.org/v1.5/client-server-api/#conditions) for
                 * more information on the allowed kinds and how they work.
                 */
                kind: string;
                /**
                 * Required for `event_match` conditions. The glob-style pattern to
                 * match against.
                 */
                pattern?: string;
            }[];
            /** Whether this is a default rule, or has been set explicitly. */
            default: boolean;
            /** Whether the push rule is enabled or not. */
            enabled: boolean;
            /**
             * The glob-style pattern to match against.  Only applicable to `content`
             * rules.
             */
            pattern?: string;
            /** The ID of this rule. */
            rule_id: string;
        }[];
        room?: {
            /** The actions to perform when this rule is matched. */
            actions: (object | string)[];
            /**
             * The conditions that must hold true for an event in order for a rule to be
             * applied to an event. A rule with no conditions always matches. Only
             * applicable to `underride` and `override` rules.
             */
            conditions?: {
                /**
                 * Required for `room_member_count` conditions. A decimal integer
                 * optionally prefixed by one of, ==, <, >, >= or <=. A prefix of < matches
                 * rooms where the member count is strictly less than the given number and
                 * so forth. If no prefix is present, this parameter defaults to ==.
                 */
                is?: string;
                /**
                 * Required for `event_match` conditions. The dot-separated field of the
                 * event to match.
                 *
                 * Required for `sender_notification_permission` conditions. The field in
                 * the power level event the user needs a minimum power level for. Fields
                 * must be specified under the `notifications` property in the power level
                 * event's `content`.
                 */
                key?: string;
                /**
                 * The kind of condition to apply. See [conditions](https://spec.matrix.org/v1.5/client-server-api/#conditions) for
                 * more information on the allowed kinds and how they work.
                 */
                kind: string;
                /**
                 * Required for `event_match` conditions. The glob-style pattern to
                 * match against.
                 */
                pattern?: string;
            }[];
            /** Whether this is a default rule, or has been set explicitly. */
            default: boolean;
            /** Whether the push rule is enabled or not. */
            enabled: boolean;
            /**
             * The glob-style pattern to match against.  Only applicable to `content`
             * rules.
             */
            pattern?: string;
            /** The ID of this rule. */
            rule_id: string;
        }[];
        sender?: {
            /** The actions to perform when this rule is matched. */
            actions: (object | string)[];
            /**
             * The conditions that must hold true for an event in order for a rule to be
             * applied to an event. A rule with no conditions always matches. Only
             * applicable to `underride` and `override` rules.
             */
            conditions?: {
                /**
                 * Required for `room_member_count` conditions. A decimal integer
                 * optionally prefixed by one of, ==, <, >, >= or <=. A prefix of < matches
                 * rooms where the member count is strictly less than the given number and
                 * so forth. If no prefix is present, this parameter defaults to ==.
                 */
                is?: string;
                /**
                 * Required for `event_match` conditions. The dot-separated field of the
                 * event to match.
                 *
                 * Required for `sender_notification_permission` conditions. The field in
                 * the power level event the user needs a minimum power level for. Fields
                 * must be specified under the `notifications` property in the power level
                 * event's `content`.
                 */
                key?: string;
                /**
                 * The kind of condition to apply. See [conditions](https://spec.matrix.org/v1.5/client-server-api/#conditions) for
                 * more information on the allowed kinds and how they work.
                 */
                kind: string;
                /**
                 * Required for `event_match` conditions. The glob-style pattern to
                 * match against.
                 */
                pattern?: string;
            }[];
            /** Whether this is a default rule, or has been set explicitly. */
            default: boolean;
            /** Whether the push rule is enabled or not. */
            enabled: boolean;
            /**
             * The glob-style pattern to match against.  Only applicable to `content`
             * rules.
             */
            pattern?: string;
            /** The ID of this rule. */
            rule_id: string;
        }[];
        underride?: {
            /** The actions to perform when this rule is matched. */
            actions: (object | string)[];
            /**
             * The conditions that must hold true for an event in order for a rule to be
             * applied to an event. A rule with no conditions always matches. Only
             * applicable to `underride` and `override` rules.
             */
            conditions?: {
                /**
                 * Required for `room_member_count` conditions. A decimal integer
                 * optionally prefixed by one of, ==, <, >, >= or <=. A prefix of < matches
                 * rooms where the member count is strictly less than the given number and
                 * so forth. If no prefix is present, this parameter defaults to ==.
                 */
                is?: string;
                /**
                 * Required for `event_match` conditions. The dot-separated field of the
                 * event to match.
                 *
                 * Required for `sender_notification_permission` conditions. The field in
                 * the power level event the user needs a minimum power level for. Fields
                 * must be specified under the `notifications` property in the power level
                 * event's `content`.
                 */
                key?: string;
                /**
                 * The kind of condition to apply. See [conditions](https://spec.matrix.org/v1.5/client-server-api/#conditions) for
                 * more information on the allowed kinds and how they work.
                 */
                kind: string;
                /**
                 * Required for `event_match` conditions. The glob-style pattern to
                 * match against.
                 */
                pattern?: string;
            }[];
            /** Whether this is a default rule, or has been set explicitly. */
            default: boolean;
            /** Whether the push rule is enabled or not. */
            enabled: boolean;
            /**
             * The glob-style pattern to match against.  Only applicable to `content`
             * rules.
             */
            pattern?: string;
            /** The ID of this rule. */
            rule_id: string;
        }[];
    };
}

export interface GetPushersData {
    /**
     * Pushers
     * An array containing the current pushers for the user
     */
    pushers?: {
        /**
         * A string that will allow the user to identify what application
         * owns this pusher.
         */
        app_display_name: string;
        /**
         * This is a reverse-DNS style identifier for the application.
         * Max length, 64 chars.
         */
        app_id: string;
        /**
         * PusherData
         * A dictionary of information for the pusher implementation
         * itself.
         */
        data: {
            /**
             * The format to use when sending notifications to the Push
             * Gateway.
             */
            format?: string;
            /**
             * Required if `kind` is `http`. The URL to use to send
             * notifications to.
             * @format uri
             */
            url?: string;
        };
        /**
         * A string that will allow the user to identify what device owns
         * this pusher.
         */
        device_display_name: string;
        /**
         * The kind of pusher. `"http"` is a pusher that
         * sends HTTP pokes.
         */
        kind: string;
        /**
         * The preferred language for receiving notifications (e.g. 'en'
         * or 'en-US')
         */
        lang: string;
        /**
         * This string determines which set of device specific rules this
         * pusher executes.
         */
        profile_tag?: string;
        /**
         * This is a unique identifier for this pusher. See `/set` for
         * more detail.
         * Max length, 512 bytes.
         */
        pushkey: string;
    }[];
}

export interface GetRelatingEventsData {
    /**
     * ChildEventsChunk
     * The child events of the requested event, ordered topologically most-recent first.
     */
    chunk: ({
        /**
         * The body of this event, as created by the client which sent it.
         * @example {"membership":"join"}
         */
        content: object;
        /**
         * The globally unique identifier for this event.
         * @example "$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45"
         */
        event_id: string;
        /**
         * Timestamp (in milliseconds since the unix epoch) on originating homeserver
         * when this event was sent.
         * @format int64
         * @example 1632489532305
         */
        origin_server_ts: number;
        /**
         * Contains the fully-qualified ID of the user who sent this event.
         * @example "@example:example.org"
         */
        sender: string;
        /**
         * Present if, and only if, this event is a *state* event. The key making
         * this piece of state unique in the room. Note that it is often an empty
         * string.
         *
         * State keys starting with an `@` are reserved for referencing user IDs, such
         * as room members. With the exception of a few events, state events set with a
         * given user's ID as the state key MUST only be set by that user.
         * @example "@user:example.org"
         */
        state_key?: string;
        /**
         * The type of the event.
         * @example "m.room.member"
         */
        type: string;
        /**
         * UnsignedData
         * Contains optional extra information about the event.
         */
        unsigned?: {
            /**
             * The time in milliseconds that has elapsed since the event was sent. This field is generated by the local homeserver, and may be incorrect if the local time on at least one of the two servers is out of sync, which can cause the age to either be negative or greater than it actually is.
             * @format int64
             * @example 1567437
             */
            age?: number;
            /**
             * EventContent
             * The previous `content` for this event. This field is generated
             * by the local homeserver, and is only returned if the event is a state event,
             * and the client has permission to see the previous content.
             */
            prev_content?: object;
            /**
             * ClientEventWithoutRoomID
             * The event that redacted this event, if any.
             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
             */
            redacted_because?: object;
            /**
             * The client-supplied [transaction ID](https://spec.matrix.org/v1.5/client-server-api/#transaction-identifiers), for example, provided via
             * `PUT /_matrix/client/v3/rooms/{roomId}/send/{eventType}/{txnId}`,
             * if the client being given the event is the same one which sent it.
             */
            transaction_id?: string;
        };
    } & {
        /**
         * The ID of the room associated with this event.
         * @example "!jEsUZKDJdhlrceRyVU:example.org"
         */
        room_id: string;
        unsigned?: {
            /**
             * ClientEvent
             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","room_id":"!jEsUZKDJdhlrceRyVU:example.org","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
             */
            redacted_because?: any;
        };
    })[];
    /**
     * An opaque string representing a pagination token. The absence of this token
     * means there are no more results to fetch and the client should stop paginating.
     */
    next_batch?: string;
    /**
     * An opaque string representing a pagination token. The absence of this token
     * means this is the start of the result set, i.e. this is the first batch/page.
     */
    prev_batch?: string;
}

/**
 * Error
 * A Matrix-level Error
 */
export type GetRelatingEventsError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

export interface GetRelatingEventsParams {
    /**
     * The pagination token to start returning results from. If not supplied, results
     * start at the most recent topological event known to the server.
     *
     * Can be a `next_batch` or `prev_batch` token from a previous call, or a returned
     * `start` token from [`/messages`](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3roomsroomidmessages),
     * or a `next_batch` token from [`/sync`](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3sync).
     * @example "page2_token"
     */
    from?: string;
    /**
     * The pagination token to stop returning results at. If not supplied, results
     * continue up to `limit` or until there are no more events.
     *
     * Like `from`, this can be a previous token from a prior call to this endpoint
     * or from `/messages` or `/sync`.
     * @example "page3_token"
     */
    to?: string;
    /**
     * The maximum number of results to return in a single `chunk`. The server can
     * and should apply a maximum value to this parameter to avoid large responses.
     *
     * Similarly, the server should apply a default value when not supplied.
     * @example 20
     */
    limit?: number;
    /**
     * Optional (default `b`) direction to return events from. If this is set to `f`, events
     * will be returned in chronological order starting at `from`. If it
     * is set to `b`, events will be returned in *reverse* chronological
     * order, again starting at `from`.
     */
    dir?: "b" | "f";
    /**
     * The ID of the room containing the parent event.
     * @example "!636q39766251:matrix.org"
     */
    roomId: string;
    /**
     * The ID of the parent event whose child events are to be returned.
     * @example "$asfDuShaf7Gafaw"
     */
    eventId: string;
}

export interface GetRelatingEventsWithRelTypeAndEventTypeData {
    /**
     * ChildEventsChunk
     * The child events of the requested event, ordered topologically most-recent
     * first. The events returned will match the `relType` and `eventType` supplied
     * in the URL.
     */
    chunk: ({
        /**
         * The body of this event, as created by the client which sent it.
         * @example {"membership":"join"}
         */
        content: object;
        /**
         * The globally unique identifier for this event.
         * @example "$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45"
         */
        event_id: string;
        /**
         * Timestamp (in milliseconds since the unix epoch) on originating homeserver
         * when this event was sent.
         * @format int64
         * @example 1632489532305
         */
        origin_server_ts: number;
        /**
         * Contains the fully-qualified ID of the user who sent this event.
         * @example "@example:example.org"
         */
        sender: string;
        /**
         * Present if, and only if, this event is a *state* event. The key making
         * this piece of state unique in the room. Note that it is often an empty
         * string.
         *
         * State keys starting with an `@` are reserved for referencing user IDs, such
         * as room members. With the exception of a few events, state events set with a
         * given user's ID as the state key MUST only be set by that user.
         * @example "@user:example.org"
         */
        state_key?: string;
        /**
         * The type of the event.
         * @example "m.room.member"
         */
        type: string;
        /**
         * UnsignedData
         * Contains optional extra information about the event.
         */
        unsigned?: {
            /**
             * The time in milliseconds that has elapsed since the event was sent. This field is generated by the local homeserver, and may be incorrect if the local time on at least one of the two servers is out of sync, which can cause the age to either be negative or greater than it actually is.
             * @format int64
             * @example 1567437
             */
            age?: number;
            /**
             * EventContent
             * The previous `content` for this event. This field is generated
             * by the local homeserver, and is only returned if the event is a state event,
             * and the client has permission to see the previous content.
             */
            prev_content?: object;
            /**
             * ClientEventWithoutRoomID
             * The event that redacted this event, if any.
             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
             */
            redacted_because?: object;
            /**
             * The client-supplied [transaction ID](https://spec.matrix.org/v1.5/client-server-api/#transaction-identifiers), for example, provided via
             * `PUT /_matrix/client/v3/rooms/{roomId}/send/{eventType}/{txnId}`,
             * if the client being given the event is the same one which sent it.
             */
            transaction_id?: string;
        };
    } & {
        /**
         * The ID of the room associated with this event.
         * @example "!jEsUZKDJdhlrceRyVU:example.org"
         */
        room_id: string;
        unsigned?: {
            /**
             * ClientEvent
             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","room_id":"!jEsUZKDJdhlrceRyVU:example.org","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
             */
            redacted_because?: any;
        };
    })[];
    /**
     * An opaque string representing a pagination token. The absence of this token
     * means there are no more results to fetch and the client should stop paginating.
     */
    next_batch?: string;
    /**
     * An opaque string representing a pagination token. The absence of this token
     * means this is the start of the result set, i.e. this is the first batch/page.
     */
    prev_batch?: string;
}

/**
 * Error
 * A Matrix-level Error
 */
export type GetRelatingEventsWithRelTypeAndEventTypeError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

export interface GetRelatingEventsWithRelTypeAndEventTypeParams {
    /**
     * The pagination token to start returning results from. If not supplied, results
     * start at the most recent topological event known to the server.
     *
     * Can be a `next_batch` or `prev_batch` token from a previous call, or a returned
     * `start` token from [`/messages`](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3roomsroomidmessages),
     * or a `next_batch` token from [`/sync`](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3sync).
     * @example "page2_token"
     */
    from?: string;
    /**
     * The pagination token to stop returning results at. If not supplied, results
     * continue up to `limit` or until there are no more events.
     *
     * Like `from`, this can be a previous token from a prior call to this endpoint
     * or from `/messages` or `/sync`.
     * @example "page3_token"
     */
    to?: string;
    /**
     * The maximum number of results to return in a single `chunk`. The server can
     * and should apply a maximum value to this parameter to avoid large responses.
     *
     * Similarly, the server should apply a default value when not supplied.
     * @example 20
     */
    limit?: number;
    /**
     * Optional (default `b`) direction to return events from. If this is set to `f`, events
     * will be returned in chronological order starting at `from`. If it
     * is set to `b`, events will be returned in *reverse* chronological
     * order, again starting at `from`.
     */
    dir?: "b" | "f";
    /**
     * The ID of the room containing the parent event.
     * @example "!636q39766251:matrix.org"
     */
    roomId: string;
    /**
     * The ID of the parent event whose child events are to be returned.
     * @example "$asfDuShaf7Gafaw"
     */
    eventId: string;
    /**
     * The [relationship type](https://spec.matrix.org/v1.5/client-server-api/#relationship-types) to search for.
     * @example "org.example.my_relation"
     */
    relType: string;
    /**
     * The event type of child events to search for.
     *
     * Note that in encrypted rooms this will typically always be `m.room.encrypted`
     * regardless of the event type contained within the encrypted payload.
     * @example "m.room.message"
     */
    eventType: string;
}

export interface GetRelatingEventsWithRelTypeData {
    /**
     * ChildEventsChunk
     * The child events of the requested event, ordered topologically
     * most-recent first. The events returned will match the `relType`
     * supplied in the URL.
     */
    chunk: ({
        /**
         * The body of this event, as created by the client which sent it.
         * @example {"membership":"join"}
         */
        content: object;
        /**
         * The globally unique identifier for this event.
         * @example "$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45"
         */
        event_id: string;
        /**
         * Timestamp (in milliseconds since the unix epoch) on originating homeserver
         * when this event was sent.
         * @format int64
         * @example 1632489532305
         */
        origin_server_ts: number;
        /**
         * Contains the fully-qualified ID of the user who sent this event.
         * @example "@example:example.org"
         */
        sender: string;
        /**
         * Present if, and only if, this event is a *state* event. The key making
         * this piece of state unique in the room. Note that it is often an empty
         * string.
         *
         * State keys starting with an `@` are reserved for referencing user IDs, such
         * as room members. With the exception of a few events, state events set with a
         * given user's ID as the state key MUST only be set by that user.
         * @example "@user:example.org"
         */
        state_key?: string;
        /**
         * The type of the event.
         * @example "m.room.member"
         */
        type: string;
        /**
         * UnsignedData
         * Contains optional extra information about the event.
         */
        unsigned?: {
            /**
             * The time in milliseconds that has elapsed since the event was sent. This field is generated by the local homeserver, and may be incorrect if the local time on at least one of the two servers is out of sync, which can cause the age to either be negative or greater than it actually is.
             * @format int64
             * @example 1567437
             */
            age?: number;
            /**
             * EventContent
             * The previous `content` for this event. This field is generated
             * by the local homeserver, and is only returned if the event is a state event,
             * and the client has permission to see the previous content.
             */
            prev_content?: object;
            /**
             * ClientEventWithoutRoomID
             * The event that redacted this event, if any.
             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
             */
            redacted_because?: object;
            /**
             * The client-supplied [transaction ID](https://spec.matrix.org/v1.5/client-server-api/#transaction-identifiers), for example, provided via
             * `PUT /_matrix/client/v3/rooms/{roomId}/send/{eventType}/{txnId}`,
             * if the client being given the event is the same one which sent it.
             */
            transaction_id?: string;
        };
    } & {
        /**
         * The ID of the room associated with this event.
         * @example "!jEsUZKDJdhlrceRyVU:example.org"
         */
        room_id: string;
        unsigned?: {
            /**
             * ClientEvent
             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","room_id":"!jEsUZKDJdhlrceRyVU:example.org","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
             */
            redacted_because?: any;
        };
    })[];
    /**
     * An opaque string representing a pagination token. The absence of this token
     * means there are no more results to fetch and the client should stop paginating.
     */
    next_batch?: string;
    /**
     * An opaque string representing a pagination token. The absence of this token
     * means this is the start of the result set, i.e. this is the first batch/page.
     */
    prev_batch?: string;
}

/**
 * Error
 * A Matrix-level Error
 */
export type GetRelatingEventsWithRelTypeError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

export interface GetRelatingEventsWithRelTypeParams {
    /**
     * The pagination token to start returning results from. If not supplied, results
     * start at the most recent topological event known to the server.
     *
     * Can be a `next_batch` or `prev_batch` token from a previous call, or a returned
     * `start` token from [`/messages`](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3roomsroomidmessages),
     * or a `next_batch` token from [`/sync`](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3sync).
     * @example "page2_token"
     */
    from?: string;
    /**
     * The pagination token to stop returning results at. If not supplied, results
     * continue up to `limit` or until there are no more events.
     *
     * Like `from`, this can be a previous token from a prior call to this endpoint
     * or from `/messages` or `/sync`.
     * @example "page3_token"
     */
    to?: string;
    /**
     * The maximum number of results to return in a single `chunk`. The server can
     * and should apply a maximum value to this parameter to avoid large responses.
     *
     * Similarly, the server should apply a default value when not supplied.
     * @example 20
     */
    limit?: number;
    /**
     * Optional (default `b`) direction to return events from. If this is set to `f`, events
     * will be returned in chronological order starting at `from`. If it
     * is set to `b`, events will be returned in *reverse* chronological
     * order, again starting at `from`.
     */
    dir?: "b" | "f";
    /**
     * The ID of the room containing the parent event.
     * @example "!636q39766251:matrix.org"
     */
    roomId: string;
    /**
     * The ID of the parent event whose child events are to be returned.
     * @example "$asfDuShaf7Gafaw"
     */
    eventId: string;
    /**
     * The [relationship type](https://spec.matrix.org/v1.5/client-server-api/#relationship-types) to search for.
     * @example "org.example.my_relation"
     */
    relType: string;
}

/** A list of messages with a new token to request more. */
export interface GetRoomEventsData {
    /**
     * A list of room events. The order depends on the `dir` parameter.
     * For `dir=b` events will be in reverse-chronological order,
     * for `dir=f` in chronological order. (The exact definition of `chronological`
     * is dependent on the server implementation.)
     *
     * Note that an empty `chunk` does not *necessarily* imply that no more events
     * are available. Clients should continue to paginate until no `end` property
     * is returned.
     */
    chunk: ({
        /**
         * The body of this event, as created by the client which sent it.
         * @example {"membership":"join"}
         */
        content: object;
        /**
         * The globally unique identifier for this event.
         * @example "$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45"
         */
        event_id: string;
        /**
         * Timestamp (in milliseconds since the unix epoch) on originating homeserver
         * when this event was sent.
         * @format int64
         * @example 1632489532305
         */
        origin_server_ts: number;
        /**
         * Contains the fully-qualified ID of the user who sent this event.
         * @example "@example:example.org"
         */
        sender: string;
        /**
         * Present if, and only if, this event is a *state* event. The key making
         * this piece of state unique in the room. Note that it is often an empty
         * string.
         *
         * State keys starting with an `@` are reserved for referencing user IDs, such
         * as room members. With the exception of a few events, state events set with a
         * given user's ID as the state key MUST only be set by that user.
         * @example "@user:example.org"
         */
        state_key?: string;
        /**
         * The type of the event.
         * @example "m.room.member"
         */
        type: string;
        /**
         * UnsignedData
         * Contains optional extra information about the event.
         */
        unsigned?: {
            /**
             * The time in milliseconds that has elapsed since the event was sent. This field is generated by the local homeserver, and may be incorrect if the local time on at least one of the two servers is out of sync, which can cause the age to either be negative or greater than it actually is.
             * @format int64
             * @example 1567437
             */
            age?: number;
            /**
             * EventContent
             * The previous `content` for this event. This field is generated
             * by the local homeserver, and is only returned if the event is a state event,
             * and the client has permission to see the previous content.
             */
            prev_content?: object;
            /**
             * ClientEventWithoutRoomID
             * The event that redacted this event, if any.
             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
             */
            redacted_because?: object;
            /**
             * The client-supplied [transaction ID](https://spec.matrix.org/v1.5/client-server-api/#transaction-identifiers), for example, provided via
             * `PUT /_matrix/client/v3/rooms/{roomId}/send/{eventType}/{txnId}`,
             * if the client being given the event is the same one which sent it.
             */
            transaction_id?: string;
        };
    } & {
        /**
         * The ID of the room associated with this event.
         * @example "!jEsUZKDJdhlrceRyVU:example.org"
         */
        room_id: string;
        unsigned?: {
            /**
             * ClientEvent
             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","room_id":"!jEsUZKDJdhlrceRyVU:example.org","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
             */
            redacted_because?: any;
        };
    })[];
    /**
     * A token corresponding to the end of `chunk`. This token can be passed
     * back to this endpoint to request further events.
     *
     * If no further events are available (either because we have
     * reached the start of the timeline, or because the user does
     * not have permission to see any more events), this property
     * is omitted from the response.
     */
    end?: string;
    /**
     * A token corresponding to the start of `chunk`. This will be the same as
     * the value given in `from`.
     */
    start: string;
    /**
     * A list of state events relevant to showing the `chunk`. For example, if
     * `lazy_load_members` is enabled in the filter then this may contain
     * the membership events for the senders of events in the `chunk`.
     *
     * Unless `include_redundant_members` is `true`, the server
     * may remove membership events which would have already been
     * sent to the client in prior calls to this endpoint, assuming
     * the membership of those members has not changed.
     */
    state?: ({
        /**
         * The body of this event, as created by the client which sent it.
         * @example {"membership":"join"}
         */
        content: object;
        /**
         * The globally unique identifier for this event.
         * @example "$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45"
         */
        event_id: string;
        /**
         * Timestamp (in milliseconds since the unix epoch) on originating homeserver
         * when this event was sent.
         * @format int64
         * @example 1632489532305
         */
        origin_server_ts: number;
        /**
         * Contains the fully-qualified ID of the user who sent this event.
         * @example "@example:example.org"
         */
        sender: string;
        /**
         * Present if, and only if, this event is a *state* event. The key making
         * this piece of state unique in the room. Note that it is often an empty
         * string.
         *
         * State keys starting with an `@` are reserved for referencing user IDs, such
         * as room members. With the exception of a few events, state events set with a
         * given user's ID as the state key MUST only be set by that user.
         * @example "@user:example.org"
         */
        state_key?: string;
        /**
         * The type of the event.
         * @example "m.room.member"
         */
        type: string;
        /**
         * UnsignedData
         * Contains optional extra information about the event.
         */
        unsigned?: {
            /**
             * The time in milliseconds that has elapsed since the event was sent. This field is generated by the local homeserver, and may be incorrect if the local time on at least one of the two servers is out of sync, which can cause the age to either be negative or greater than it actually is.
             * @format int64
             * @example 1567437
             */
            age?: number;
            /**
             * EventContent
             * The previous `content` for this event. This field is generated
             * by the local homeserver, and is only returned if the event is a state event,
             * and the client has permission to see the previous content.
             */
            prev_content?: object;
            /**
             * ClientEventWithoutRoomID
             * The event that redacted this event, if any.
             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
             */
            redacted_because?: object;
            /**
             * The client-supplied [transaction ID](https://spec.matrix.org/v1.5/client-server-api/#transaction-identifiers), for example, provided via
             * `PUT /_matrix/client/v3/rooms/{roomId}/send/{eventType}/{txnId}`,
             * if the client being given the event is the same one which sent it.
             */
            transaction_id?: string;
        };
    } & {
        /**
         * The ID of the room associated with this event.
         * @example "!jEsUZKDJdhlrceRyVU:example.org"
         */
        room_id: string;
        unsigned?: {
            /**
             * ClientEvent
             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","room_id":"!jEsUZKDJdhlrceRyVU:example.org","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
             */
            redacted_because?: any;
        };
    })[];
}

export interface GetRoomEventsParams {
    /**
     * The token to start returning events from. This token can be obtained
     * from a `prev_batch` or `next_batch` token returned by the `/sync` endpoint,
     * or from an `end` token returned by a previous request to this endpoint.
     *
     * This endpoint can also accept a value returned as a `start` token
     * by a previous request to this endpoint, though servers are not
     * required to support this. Clients should not rely on the behaviour.
     *
     * If it is not provided, the homeserver shall return a list of messages
     * from the first or last (per the value of the `dir` parameter) visible
     * event in the room history for the requesting user.
     * @example "s345_678_333"
     */
    from?: string;
    /**
     * The token to stop returning events at. This token can be obtained from
     * a `prev_batch` or `next_batch` token returned by the `/sync` endpoint,
     * or from an `end` token returned by a previous request to this endpoint.
     */
    to?: string;
    /**
     * The direction to return events from. If this is set to `f`, events
     * will be returned in chronological order starting at `from`. If it
     * is set to `b`, events will be returned in *reverse* chronological
     * order, again starting at `from`.
     * @example "b"
     */
    dir: "b" | "f";
    /**
     * The maximum number of events to return. Default: 10.
     * @example "3"
     */
    limit?: number;
    /**
     * A JSON RoomEventFilter to filter returned events with.
     * @example "{"contains_url":true}"
     */
    filter?: string;
    /**
     * The room to get events from.
     * @example "!636q39766251:example.com"
     */
    roomId: string;
}

export interface GetRoomIdByAliasData {
    /** The room ID for this room alias. */
    room_id?: string;
    /** A list of servers that are aware of this room alias. */
    servers?: string[];
}

/**
 * Error Error
 * A Matrix-level Error
 * A Matrix-level Error
 */
export type GetRoomIdByAliasError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

/**
 * KeyBackupData
 * The key data
 */
export interface GetRoomKeyBySessionIdData {
    /**
     * The index of the first message in the session that the key can decrypt.
     * @example 1
     */
    first_message_index: number;
    /**
     * The number of times this key has been forwarded via key-sharing between devices.
     * @example 0
     */
    forwarded_count: number;
    /**
     * Whether the device backing up the key verified the device that the key
     * is from.
     * @example false
     */
    is_verified: boolean;
    /**
     * Algorithm-dependent data.  See the documentation for the backup
     * algorithms in [Server-side key backups](https://spec.matrix.org/v1.5/client-server-api/#server-side-key-backups) for more information on the
     * expected format of the data.
     * @example {"ciphertext":"base64+ciphertext+of+JSON+data","ephemeral":"base64+ephemeral+key","mac":"base64+mac+of+ciphertext"}
     */
    session_data: object;
}

/**
 * Error RateLimitError
 * A Matrix-level Error
 * The rate limit was reached for this request
 */
export type GetRoomKeyBySessionIdError =
    | {
          /**
           * An error code.
           * @example "M_UNKNOWN"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "An unknown error occurred"
           */
          error?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

export interface GetRoomKeyBySessionIdParams {
    /**
     * The backup from which to retrieve the key.
     * @example "1"
     */
    version: string;
    /**
     * The ID of the room that the requested key is for.
     * @example "!roomid:example.org"
     */
    roomId: string;
    /**
     * The ID of the megolm session whose key is requested.
     * @example "sessionid"
     */
    sessionId: string;
}

/**
 * RoomKeyBackup
 * The backed up keys for a room.
 */
export interface GetRoomKeysByRoomIdData {
    /**
     * A map of session IDs to key data.
     * @example {"sessionid1":{"first_message_index":1,"forwarded_count":0,"is_verified":true,"session_data":{"ciphertext":"base64+ciphertext+of+JSON+data","ephemeral":"base64+ephemeral+key","mac":"base64+mac+of+ciphertext"}}}
     */
    sessions: Record<
        string,
        {
            /**
             * The index of the first message in the session that the key can decrypt.
             * @example 1
             */
            first_message_index: number;
            /**
             * The number of times this key has been forwarded via key-sharing between devices.
             * @example 0
             */
            forwarded_count: number;
            /**
             * Whether the device backing up the key verified the device that the key
             * is from.
             * @example false
             */
            is_verified: boolean;
            /**
             * Algorithm-dependent data.  See the documentation for the backup
             * algorithms in [Server-side key backups](https://spec.matrix.org/v1.5/client-server-api/#server-side-key-backups) for more information on the
             * expected format of the data.
             * @example {"ciphertext":"base64+ciphertext+of+JSON+data","ephemeral":"base64+ephemeral+key","mac":"base64+mac+of+ciphertext"}
             */
            session_data: object;
        }
    >;
}

/**
 * Error RateLimitError
 * A Matrix-level Error
 * The rate limit was reached for this request
 */
export type GetRoomKeysByRoomIdError =
    | {
          /**
           * An error code.
           * @example "M_UNKNOWN"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "An unknown error occurred"
           */
          error?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

export interface GetRoomKeysByRoomIdParams {
    /**
     * The backup from which to retrieve the key.
     * @example "1"
     */
    version: string;
    /**
     * The ID of the room that the requested key is for.
     * @example "!roomid:example.org"
     */
    roomId: string;
}

export interface GetRoomKeysData {
    /**
     * A map of room IDs to room key backup data.
     * @example {"!room:example.org":{"sessions":{"sessionid1":{"first_message_index":1,"forwarded_count":0,"is_verified":true,"session_data":{"ciphertext":"base64+ciphertext+of+JSON+data","ephemeral":"base64+ephemeral+key","mac":"base64+mac+of+ciphertext"}}}}}
     */
    rooms: Record<
        string,
        {
            /**
             * A map of session IDs to key data.
             * @example {"sessionid1":{"first_message_index":1,"forwarded_count":0,"is_verified":true,"session_data":{"ciphertext":"base64+ciphertext+of+JSON+data","ephemeral":"base64+ephemeral+key","mac":"base64+mac+of+ciphertext"}}}
             */
            sessions: Record<
                string,
                {
                    /**
                     * The index of the first message in the session that the key can decrypt.
                     * @example 1
                     */
                    first_message_index: number;
                    /**
                     * The number of times this key has been forwarded via key-sharing between devices.
                     * @example 0
                     */
                    forwarded_count: number;
                    /**
                     * Whether the device backing up the key verified the device that the key
                     * is from.
                     * @example false
                     */
                    is_verified: boolean;
                    /**
                     * Algorithm-dependent data.  See the documentation for the backup
                     * algorithms in [Server-side key backups](https://spec.matrix.org/v1.5/client-server-api/#server-side-key-backups) for more information on the
                     * expected format of the data.
                     * @example {"ciphertext":"base64+ciphertext+of+JSON+data","ephemeral":"base64+ephemeral+key","mac":"base64+mac+of+ciphertext"}
                     */
                    session_data: object;
                }
            >;
        }
    >;
}

/**
 * Error RateLimitError
 * A Matrix-level Error
 * The rate limit was reached for this request
 */
export type GetRoomKeysError =
    | {
          /**
           * An error code.
           * @example "M_UNKNOWN"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "An unknown error occurred"
           */
          error?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

export interface GetRoomKeysParams {
    /**
     * The backup from which to retrieve the keys.
     * @example "1"
     */
    version: string;
}

export interface GetRoomKeysVersionCurrentData {
    /**
     * The algorithm used for storing backups.
     * @example "m.megolm_backup.v1.curve25519-aes-sha2"
     */
    algorithm: "m.megolm_backup.v1.curve25519-aes-sha2";
    /**
     * Algorithm-dependent data. See the documentation for the backup
     * algorithms in [Server-side key backups](https://spec.matrix.org/v1.5/client-server-api/#server-side-key-backups) for more information on the
     * expected format of the data.
     * @example {"public_key":"abcdefg","signatures":{"@alice:example.org":{"ed25519:deviceid":"signature"}}}
     */
    auth_data: object;
    /**
     * The number of keys stored in the backup.
     * @example 42
     */
    count: number;
    /**
     * An opaque string representing stored keys in the backup.
     * Clients can compare it with the `etag` value they received
     * in the request of their last key storage request.  If not
     * equal, another client has modified the backup.
     * @example "anopaquestring"
     */
    etag: string;
    /**
     * The backup version.
     * @example "1"
     */
    version: string;
}

/**
 * Error RateLimitError
 * A Matrix-level Error
 * The rate limit was reached for this request
 */
export type GetRoomKeysVersionCurrentError =
    | {
          /**
           * An error code.
           * @example "M_UNKNOWN"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "An unknown error occurred"
           */
          error?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

export interface GetRoomKeysVersionData {
    /**
     * The algorithm used for storing backups.
     * @example "m.megolm_backup.v1.curve25519-aes-sha2"
     */
    algorithm: "m.megolm_backup.v1.curve25519-aes-sha2";
    /**
     * Algorithm-dependent data. See the documentation for the backup
     * algorithms in [Server-side key backups](https://spec.matrix.org/v1.5/client-server-api/#server-side-key-backups) for more information on the
     * expected format of the data.
     * @example {"public_key":"abcdefg","signatures":{"@alice:example.org":{"ed25519:deviceid":"signature"}}}
     */
    auth_data: object;
    /**
     * The number of keys stored in the backup.
     * @example 42
     */
    count: number;
    /**
     * An opaque string representing stored keys in the backup.
     * Clients can compare it with the `etag` value they received
     * in the request of their last key storage request.  If not
     * equal, another client has modified the backup.
     * @example "anopaquestring"
     */
    etag: string;
    /**
     * The backup version.
     * @example "1"
     */
    version: string;
}

/**
 * Error RateLimitError
 * A Matrix-level Error
 * The rate limit was reached for this request
 */
export type GetRoomKeysVersionError =
    | {
          /**
           * An error code.
           * @example "M_UNKNOWN"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "An unknown error occurred"
           */
          error?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

/**
 * RoomState
 * If the user is a member of the room this will be the
 * current state of the room as a list of events. If the user
 * has left the room then this will be the state of the room
 * when they left as a list of events.
 */
export type GetRoomStateData = ({
    /**
     * The body of this event, as created by the client which sent it.
     * @example {"membership":"join"}
     */
    content: object;
    /**
     * The globally unique identifier for this event.
     * @example "$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45"
     */
    event_id: string;
    /**
     * Timestamp (in milliseconds since the unix epoch) on originating homeserver
     * when this event was sent.
     * @format int64
     * @example 1632489532305
     */
    origin_server_ts: number;
    /**
     * Contains the fully-qualified ID of the user who sent this event.
     * @example "@example:example.org"
     */
    sender: string;
    /**
     * Present if, and only if, this event is a *state* event. The key making
     * this piece of state unique in the room. Note that it is often an empty
     * string.
     *
     * State keys starting with an `@` are reserved for referencing user IDs, such
     * as room members. With the exception of a few events, state events set with a
     * given user's ID as the state key MUST only be set by that user.
     * @example "@user:example.org"
     */
    state_key?: string;
    /**
     * The type of the event.
     * @example "m.room.member"
     */
    type: string;
    /**
     * UnsignedData
     * Contains optional extra information about the event.
     */
    unsigned?: {
        /**
         * The time in milliseconds that has elapsed since the event was sent. This field is generated by the local homeserver, and may be incorrect if the local time on at least one of the two servers is out of sync, which can cause the age to either be negative or greater than it actually is.
         * @format int64
         * @example 1567437
         */
        age?: number;
        /**
         * EventContent
         * The previous `content` for this event. This field is generated
         * by the local homeserver, and is only returned if the event is a state event,
         * and the client has permission to see the previous content.
         */
        prev_content?: object;
        /**
         * ClientEventWithoutRoomID
         * The event that redacted this event, if any.
         * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
         */
        redacted_because?: object;
        /**
         * The client-supplied [transaction ID](https://spec.matrix.org/v1.5/client-server-api/#transaction-identifiers), for example, provided via
         * `PUT /_matrix/client/v3/rooms/{roomId}/send/{eventType}/{txnId}`,
         * if the client being given the event is the same one which sent it.
         */
        transaction_id?: string;
    };
} & {
    /**
     * The ID of the room associated with this event.
     * @example "!jEsUZKDJdhlrceRyVU:example.org"
     */
    room_id: string;
    unsigned?: {
        /**
         * ClientEvent
         * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","room_id":"!jEsUZKDJdhlrceRyVU:example.org","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
         */
        redacted_because?: any;
    };
})[];

export type GetRoomStateWithKeyData = object;

export interface GetRoomTagsData {
    tags?: Record<
        string,
        {
            /**
             * A number in a range `[0,1]` describing a relative
             * position of the room under the given tag.
             * @format float
             */
            order?: number;
            [key: string]: any;
        }
    >;
}

export interface GetRoomVisibilityOnDirectoryData {
    /** The visibility of the room in the directory. */
    visibility?: "private" | "public";
}

/**
 * Error
 * A Matrix-level Error
 */
export type GetRoomVisibilityOnDirectoryError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

export interface GetSpaceHierarchyData {
    /**
     * A token to supply to `from` to keep paginating the responses. Not present when there are
     * no further results.
     */
    next_batch?: string;
    /** The rooms for the current page, with the current filters. */
    rooms: ({
        /**
         * The URL for the room's avatar, if one is set.
         * @format uri
         * @example "mxc://example.org/abcdef"
         */
        avatar_url?: string;
        /**
         * The canonical alias of the room, if any.
         * @example "#general:example.org"
         */
        canonical_alias?: string;
        /**
         * Whether guest users may join the room and participate in it.
         * If they can, they will be subject to ordinary power level
         * rules like any other user.
         * @example true
         */
        guest_can_join: boolean;
        /**
         * The room's join rule. When not present, the room is assumed to
         * be `public`.
         * @example "public"
         */
        join_rule?: string;
        /**
         * The name of the room, if any.
         * @example "General Chat"
         */
        name?: string;
        /**
         * The number of members joined to the room.
         * @example 42
         */
        num_joined_members: number;
        /**
         * The ID of the room.
         * @example "!abcdefg:example.org"
         */
        room_id: string;
        /** The `type` of room (from [`m.room.create`](https://spec.matrix.org/v1.5/client-server-api/#mroomcreate)), if any. */
        room_type?: string;
        /**
         * The topic of the room, if any.
         * @example "All things general"
         */
        topic?: string;
        /**
         * Whether the room may be viewed by guest users without joining.
         * @example false
         */
        world_readable: boolean;
    } & {
        /**
         * The [`m.space.child`](#mspacechild) events of the space-room, represented
         * as [Stripped State Events](#stripped-state) with an added `origin_server_ts` key.
         *
         * If the room is not a space-room, this should be empty.
         */
        children_state: ({
            /**
             * EventContent
             * The `content` for the event.
             */
            content: object;
            /** The `sender` for the event. */
            sender: string;
            /** The `state_key` for the event. */
            state_key: string;
            /** The `type` for the event. */
            type: string;
        } & {
            /**
             * The `origin_server_ts` for the event.
             * @format int64
             */
            origin_server_ts: number;
        })[];
        /** The `type` of room (from [`m.room.create`](https://spec.matrix.org/v1.5/client-server-api/#mroomcreate)), if any. */
        room_type?: string;
    })[];
}

/**
 * Error Error RateLimitError
 * A Matrix-level Error
 * A Matrix-level Error
 * The rate limit was reached for this request
 */
export type GetSpaceHierarchyError =
    | {
          /**
           * An error code.
           * @example "M_UNKNOWN"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "An unknown error occurred"
           */
          error?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

export interface GetSpaceHierarchyParams {
    /**
     * Optional (default `false`) flag to indicate whether or not the server should only consider
     * suggested rooms. Suggested rooms are annotated in their [`m.space.child`](#mspacechild) event
     * contents.
     * @example true
     */
    suggested_only?: boolean;
    /**
     * Optional limit for the maximum number of rooms to include per response. Must be an integer
     * greater than zero.
     *
     * Servers should apply a default value, and impose a maximum value to avoid resource exhaustion.
     * @example 20
     */
    limit?: number;
    /**
     * Optional limit for how far to go into the space. Must be a non-negative integer.
     *
     * When reached, no further child rooms will be returned.
     *
     * Servers should apply a default value, and impose a maximum value to avoid resource exhaustion.
     * @example 5
     */
    max_depth?: number;
    /**
     * A pagination token from a previous result. If specified, `max_depth` and `suggested_only` cannot
     * be changed from the first request.
     * @example "next_batch_token"
     */
    from?: string;
    /**
     * The room ID of the space to get a hierarchy for.
     * @example "!space:example.org"
     */
    roomId: string;
}

export interface GetThreadRootsData {
    /**
     * The thread roots, ordered by the `latest_event` in each event's aggregation bundle. All events
     * returned include bundled [aggregations](https://spec.matrix.org/v1.5/client-server-api/#aggregations).
     *
     * If the thread root event was sent by an [ignored user](https://spec.matrix.org/v1.5/client-server-api/#ignoring-users), the
     * event is returned redacted to the caller. This is to simulate the same behaviour of a client doing
     * aggregation locally on the thread.
     */
    chunk: ({
        /**
         * The body of this event, as created by the client which sent it.
         * @example {"membership":"join"}
         */
        content: object;
        /**
         * The globally unique identifier for this event.
         * @example "$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45"
         */
        event_id: string;
        /**
         * Timestamp (in milliseconds since the unix epoch) on originating homeserver
         * when this event was sent.
         * @format int64
         * @example 1632489532305
         */
        origin_server_ts: number;
        /**
         * Contains the fully-qualified ID of the user who sent this event.
         * @example "@example:example.org"
         */
        sender: string;
        /**
         * Present if, and only if, this event is a *state* event. The key making
         * this piece of state unique in the room. Note that it is often an empty
         * string.
         *
         * State keys starting with an `@` are reserved for referencing user IDs, such
         * as room members. With the exception of a few events, state events set with a
         * given user's ID as the state key MUST only be set by that user.
         * @example "@user:example.org"
         */
        state_key?: string;
        /**
         * The type of the event.
         * @example "m.room.member"
         */
        type: string;
        /**
         * UnsignedData
         * Contains optional extra information about the event.
         */
        unsigned?: {
            /**
             * The time in milliseconds that has elapsed since the event was sent. This field is generated by the local homeserver, and may be incorrect if the local time on at least one of the two servers is out of sync, which can cause the age to either be negative or greater than it actually is.
             * @format int64
             * @example 1567437
             */
            age?: number;
            /**
             * EventContent
             * The previous `content` for this event. This field is generated
             * by the local homeserver, and is only returned if the event is a state event,
             * and the client has permission to see the previous content.
             */
            prev_content?: object;
            /**
             * ClientEventWithoutRoomID
             * The event that redacted this event, if any.
             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
             */
            redacted_because?: object;
            /**
             * The client-supplied [transaction ID](https://spec.matrix.org/v1.5/client-server-api/#transaction-identifiers), for example, provided via
             * `PUT /_matrix/client/v3/rooms/{roomId}/send/{eventType}/{txnId}`,
             * if the client being given the event is the same one which sent it.
             */
            transaction_id?: string;
        };
    } & {
        /**
         * The ID of the room associated with this event.
         * @example "!jEsUZKDJdhlrceRyVU:example.org"
         */
        room_id: string;
        unsigned?: {
            /**
             * ClientEvent
             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","room_id":"!jEsUZKDJdhlrceRyVU:example.org","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
             */
            redacted_because?: any;
        };
    })[];
    /**
     * A token to supply to `from` to keep paginating the responses. Not present when there are
     * no further results.
     */
    next_batch?: string;
}

/**
 * Error Error RateLimitError
 * A Matrix-level Error
 * A Matrix-level Error
 * The rate limit was reached for this request
 */
export type GetThreadRootsError =
    | {
          /**
           * An error code.
           * @example "M_UNKNOWN"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "An unknown error occurred"
           */
          error?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

export interface GetThreadRootsParams {
    /**
     * Optional (default `all`) flag to denote which thread roots are of interest to the caller.
     * When `all`, all thread roots found in the room are returned. When `participated`, only
     * thread roots for threads the user has [participated in](https://spec.matrix.org/v1.5/client-server-api/#server-side-aggregation-of-mthread-relationships)
     * will be returned.
     * @example "all"
     */
    include?: "all" | "participated";
    /**
     * Optional limit for the maximum number of thread roots to include per response. Must be an integer
     * greater than zero.
     *
     * Servers should apply a default value, and impose a maximum value to avoid resource exhaustion.
     * @example 20
     */
    limit?: number;
    /**
     * A pagination token from a previous result. When not provided, the server starts paginating from
     * the most recent event visible to the user (as per history visibility rules; topologically).
     * @example "next_batch_token"
     */
    from?: string;
    /**
     * The room ID where the thread roots are located.
     * @example "!room:example.org"
     */
    roomId: string;
}

export interface GetTokenOwnerData {
    /**
     * Device ID associated with the access token. If no device
     * is associated with the access token (such as in the case
     * of application services) then this field can be omitted.
     * Otherwise this is required.
     */
    device_id?: string;
    /**
     * When `true`, the user is a [Guest User](#guest-access). When
     * not present or `false`, the user is presumed to be a non-guest
     * user.
     */
    is_guest?: boolean;
    /** The user ID that owns the access token. */
    user_id: string;
}

/**
 * Error Error RateLimitError
 * A Matrix-level Error
 * A Matrix-level Error
 * The rate limit was reached for this request
 */
export type GetTokenOwnerError =
    | {
          /**
           * An error code.
           * @example "M_UNKNOWN"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "An unknown error occurred"
           */
          error?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

export interface GetTurnServerData {
    /** The password to use. */
    password: string;
    /** The time-to-live in seconds */
    ttl: number;
    /** A list of TURN URIs */
    uris: string[];
    /** The username to use. */
    username: string;
}

/**
 * RateLimitError
 * The rate limit was reached for this request
 */
export type GetTurnServerError = {
    /**
     * The M_LIMIT_EXCEEDED error code
     * @example "M_LIMIT_EXCEEDED"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "Too many requests"
     */
    error?: string;
    /**
     * The amount of time in milliseconds the client should wait
     * before trying the request again.
     * @example 2000
     */
    retry_after_ms?: number;
};

export interface GetUrlPreviewData {
    /**
     * The byte-size of the image. Omitted if there is no image attached.
     * @format int64
     */
    "matrix:image:size"?: number;
    /**
     * An [MXC URI](https://spec.matrix.org/v1.5/client-server-api/#matrix-content-mxc-uris) to the image. Omitted if there is no image.
     * @format uri
     */
    "og:image"?: string;
}

/**
 * RateLimitError
 * The rate limit was reached for this request
 */
export type GetUrlPreviewError = {
    /**
     * The M_LIMIT_EXCEEDED error code
     * @example "M_LIMIT_EXCEEDED"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "Too many requests"
     */
    error?: string;
    /**
     * The amount of time in milliseconds the client should wait
     * before trying the request again.
     * @example 2000
     */
    retry_after_ms?: number;
};

export interface GetUrlPreviewParams {
    /**
     * The URL to get a preview of.
     * @format uri
     * @example "https://matrix.org"
     */
    url: string;
    /**
     * The preferred point in time to return a preview for. The server may
     * return a newer version if it does not have the requested version
     * available.
     * @format int64
     * @example 1510610716656
     */
    ts?: number;
}

export interface GetUserProfileData {
    /**
     * The user's avatar URL if they have set one, otherwise not present.
     * @format uri
     */
    avatar_url?: string;
    /** The user's display name if they have set one, otherwise not present. */
    displayname?: string;
}

/**
 * Error Error
 * A Matrix-level Error
 * A Matrix-level Error
 */
export type GetUserProfileError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

export interface GetVersionsData {
    /**
     * Experimental features the server supports. Features not listed here,
     * or the lack of this property all together, indicate that a feature is
     * not supported.
     */
    unstable_features?: Record<string, boolean>;
    /** The supported versions. */
    versions: string[];
}

/**
 * Discovery Information
 * Used by clients to determine the homeserver, identity server, and other
 * optional components they should be interacting with.
 * @example {"m.homeserver":{"base_url":"https://matrix.example.com"},"m.identity_server":{"base_url":"https://identity.example.com"},"org.example.custom.property":{"app_url":"https://custom.app.example.org"}}
 */
export interface GetWellknownData {
    /**
     * Homeserver Information
     * Used by clients to discover homeserver information.
     */
    "m.homeserver": {
        /**
         * The base URL for the homeserver for client-server connections.
         * @format uri
         * @example "https://matrix.example.com"
         */
        base_url: string;
    };
    /**
     * Identity Server Information
     * Used by clients to discover identity server information.
     */
    "m.identity_server"?: {
        /**
         * The base URL for the identity server for client-server connections.
         * @format uri
         * @example "https://identity.example.com"
         */
        base_url: string;
    };
    [key: string]: any;
}

export interface GetWhoIsData {
    /** Each key is an identifier for one of the user's devices. */
    devices?: Record<
        string,
        {
            /** A user's sessions (i.e. what they did with an access token from one login). */
            sessions?: {
                /** Information particular connections in the session. */
                connections?: {
                    /** Most recently seen IP address of the session. */
                    ip?: string;
                    /**
                     * Unix timestamp that the session was last active.
                     * @format int64
                     */
                    last_seen?: number;
                    /** User agent string last seen in the session. */
                    user_agent?: string;
                }[];
            }[];
        }
    >;
    /** The Matrix user ID of the user. */
    user_id?: string;
}

export interface InitialSyncData {
    /** The global private data created by this user. */
    account_data?: {
        /** The fields in this object will vary depending on the type of event. When interacting with the REST API, this is the HTTP body. */
        content: object;
        /** The type of event. This SHOULD be namespaced similar to Java package naming conventions e.g. 'com.example.subdomain.event.type' */
        type: string;
    }[];
    /**
     * A token which correlates to the end of the timelines returned. This
     * token should be used with the `/events` endpoint to listen for new
     * events.
     */
    end: string;
    /** A list of presence events. */
    presence: ({
        /**
         * The body of this event, as created by the client which sent it.
         * @example {"membership":"join"}
         */
        content: object;
        /**
         * The globally unique identifier for this event.
         * @example "$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45"
         */
        event_id: string;
        /**
         * Timestamp (in milliseconds since the unix epoch) on originating homeserver
         * when this event was sent.
         * @format int64
         * @example 1632489532305
         */
        origin_server_ts: number;
        /**
         * Contains the fully-qualified ID of the user who sent this event.
         * @example "@example:example.org"
         */
        sender: string;
        /**
         * Present if, and only if, this event is a *state* event. The key making
         * this piece of state unique in the room. Note that it is often an empty
         * string.
         *
         * State keys starting with an `@` are reserved for referencing user IDs, such
         * as room members. With the exception of a few events, state events set with a
         * given user's ID as the state key MUST only be set by that user.
         * @example "@user:example.org"
         */
        state_key?: string;
        /**
         * The type of the event.
         * @example "m.room.member"
         */
        type: string;
        /**
         * UnsignedData
         * Contains optional extra information about the event.
         */
        unsigned?: {
            /**
             * The time in milliseconds that has elapsed since the event was sent. This field is generated by the local homeserver, and may be incorrect if the local time on at least one of the two servers is out of sync, which can cause the age to either be negative or greater than it actually is.
             * @format int64
             * @example 1567437
             */
            age?: number;
            /**
             * EventContent
             * The previous `content` for this event. This field is generated
             * by the local homeserver, and is only returned if the event is a state event,
             * and the client has permission to see the previous content.
             */
            prev_content?: object;
            /**
             * ClientEventWithoutRoomID
             * The event that redacted this event, if any.
             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
             */
            redacted_because?: object;
            /**
             * The client-supplied [transaction ID](https://spec.matrix.org/v1.5/client-server-api/#transaction-identifiers), for example, provided via
             * `PUT /_matrix/client/v3/rooms/{roomId}/send/{eventType}/{txnId}`,
             * if the client being given the event is the same one which sent it.
             */
            transaction_id?: string;
        };
    } & {
        /**
         * The ID of the room associated with this event.
         * @example "!jEsUZKDJdhlrceRyVU:example.org"
         */
        room_id: string;
        unsigned?: {
            /**
             * ClientEvent
             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","room_id":"!jEsUZKDJdhlrceRyVU:example.org","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
             */
            redacted_because?: any;
        };
    })[];
    rooms: {
        /**
         * The private data that this user has attached to
         * this room.
         */
        account_data?: ({
            /**
             * The body of this event, as created by the client which sent it.
             * @example {"membership":"join"}
             */
            content: object;
            /**
             * The globally unique identifier for this event.
             * @example "$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45"
             */
            event_id: string;
            /**
             * Timestamp (in milliseconds since the unix epoch) on originating homeserver
             * when this event was sent.
             * @format int64
             * @example 1632489532305
             */
            origin_server_ts: number;
            /**
             * Contains the fully-qualified ID of the user who sent this event.
             * @example "@example:example.org"
             */
            sender: string;
            /**
             * Present if, and only if, this event is a *state* event. The key making
             * this piece of state unique in the room. Note that it is often an empty
             * string.
             *
             * State keys starting with an `@` are reserved for referencing user IDs, such
             * as room members. With the exception of a few events, state events set with a
             * given user's ID as the state key MUST only be set by that user.
             * @example "@user:example.org"
             */
            state_key?: string;
            /**
             * The type of the event.
             * @example "m.room.member"
             */
            type: string;
            /**
             * UnsignedData
             * Contains optional extra information about the event.
             */
            unsigned?: {
                /**
                 * The time in milliseconds that has elapsed since the event was sent. This field is generated by the local homeserver, and may be incorrect if the local time on at least one of the two servers is out of sync, which can cause the age to either be negative or greater than it actually is.
                 * @format int64
                 * @example 1567437
                 */
                age?: number;
                /**
                 * EventContent
                 * The previous `content` for this event. This field is generated
                 * by the local homeserver, and is only returned if the event is a state event,
                 * and the client has permission to see the previous content.
                 */
                prev_content?: object;
                /**
                 * ClientEventWithoutRoomID
                 * The event that redacted this event, if any.
                 * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
                 */
                redacted_because?: object;
                /**
                 * The client-supplied [transaction ID](https://spec.matrix.org/v1.5/client-server-api/#transaction-identifiers), for example, provided via
                 * `PUT /_matrix/client/v3/rooms/{roomId}/send/{eventType}/{txnId}`,
                 * if the client being given the event is the same one which sent it.
                 */
                transaction_id?: string;
            };
        } & {
            /**
             * The ID of the room associated with this event.
             * @example "!jEsUZKDJdhlrceRyVU:example.org"
             */
            room_id: string;
            unsigned?: {
                /**
                 * ClientEvent
                 * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","room_id":"!jEsUZKDJdhlrceRyVU:example.org","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
                 */
                redacted_because?: any;
            };
        })[];
        /**
         * InviteEvent
         * The invite event if `membership` is `invite`
         */
        invite?: {
            /**
             * The body of this event, as created by the client which sent it.
             * @example {"membership":"join"}
             */
            content: object;
            /**
             * The globally unique identifier for this event.
             * @example "$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45"
             */
            event_id: string;
            /**
             * Timestamp (in milliseconds since the unix epoch) on originating homeserver
             * when this event was sent.
             * @format int64
             * @example 1632489532305
             */
            origin_server_ts: number;
            /**
             * Contains the fully-qualified ID of the user who sent this event.
             * @example "@example:example.org"
             */
            sender: string;
            /**
             * Present if, and only if, this event is a *state* event. The key making
             * this piece of state unique in the room. Note that it is often an empty
             * string.
             *
             * State keys starting with an `@` are reserved for referencing user IDs, such
             * as room members. With the exception of a few events, state events set with a
             * given user's ID as the state key MUST only be set by that user.
             * @example "@user:example.org"
             */
            state_key?: string;
            /**
             * The type of the event.
             * @example "m.room.member"
             */
            type: string;
            /**
             * UnsignedData
             * Contains optional extra information about the event.
             */
            unsigned?: {
                /**
                 * The time in milliseconds that has elapsed since the event was sent. This field is generated by the local homeserver, and may be incorrect if the local time on at least one of the two servers is out of sync, which can cause the age to either be negative or greater than it actually is.
                 * @format int64
                 * @example 1567437
                 */
                age?: number;
                /**
                 * EventContent
                 * The previous `content` for this event. This field is generated
                 * by the local homeserver, and is only returned if the event is a state event,
                 * and the client has permission to see the previous content.
                 */
                prev_content?: object;
                /**
                 * ClientEventWithoutRoomID
                 * The event that redacted this event, if any.
                 * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
                 */
                redacted_because?: object;
                /**
                 * The client-supplied [transaction ID](https://spec.matrix.org/v1.5/client-server-api/#transaction-identifiers), for example, provided via
                 * `PUT /_matrix/client/v3/rooms/{roomId}/send/{eventType}/{txnId}`,
                 * if the client being given the event is the same one which sent it.
                 */
                transaction_id?: string;
            };
        } & {
            /**
             * The ID of the room associated with this event.
             * @example "!jEsUZKDJdhlrceRyVU:example.org"
             */
            room_id: string;
            unsigned?: {
                /**
                 * ClientEvent
                 * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","room_id":"!jEsUZKDJdhlrceRyVU:example.org","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
                 */
                redacted_because?: any;
            };
        };
        /** The user's membership state in this room. */
        membership: "invite" | "join" | "leave" | "ban";
        /**
         * PaginationChunk
         * The pagination chunk for this room.
         */
        messages?: {
            /**
             * If the user is a member of the room this will be a
             * list of the most recent messages for this room. If
             * the user has left the room this will be the
             * messages that preceded them leaving. This array
             * will consist of at most `limit` elements.
             */
            chunk: ({
                /**
                 * The body of this event, as created by the client which sent it.
                 * @example {"membership":"join"}
                 */
                content: object;
                /**
                 * The globally unique identifier for this event.
                 * @example "$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45"
                 */
                event_id: string;
                /**
                 * Timestamp (in milliseconds since the unix epoch) on originating homeserver
                 * when this event was sent.
                 * @format int64
                 * @example 1632489532305
                 */
                origin_server_ts: number;
                /**
                 * Contains the fully-qualified ID of the user who sent this event.
                 * @example "@example:example.org"
                 */
                sender: string;
                /**
                 * Present if, and only if, this event is a *state* event. The key making
                 * this piece of state unique in the room. Note that it is often an empty
                 * string.
                 *
                 * State keys starting with an `@` are reserved for referencing user IDs, such
                 * as room members. With the exception of a few events, state events set with a
                 * given user's ID as the state key MUST only be set by that user.
                 * @example "@user:example.org"
                 */
                state_key?: string;
                /**
                 * The type of the event.
                 * @example "m.room.member"
                 */
                type: string;
                /**
                 * UnsignedData
                 * Contains optional extra information about the event.
                 */
                unsigned?: {
                    /**
                     * The time in milliseconds that has elapsed since the event was sent. This field is generated by the local homeserver, and may be incorrect if the local time on at least one of the two servers is out of sync, which can cause the age to either be negative or greater than it actually is.
                     * @format int64
                     * @example 1567437
                     */
                    age?: number;
                    /**
                     * EventContent
                     * The previous `content` for this event. This field is generated
                     * by the local homeserver, and is only returned if the event is a state event,
                     * and the client has permission to see the previous content.
                     */
                    prev_content?: object;
                    /**
                     * ClientEventWithoutRoomID
                     * The event that redacted this event, if any.
                     * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
                     */
                    redacted_because?: object;
                    /**
                     * The client-supplied [transaction ID](https://spec.matrix.org/v1.5/client-server-api/#transaction-identifiers), for example, provided via
                     * `PUT /_matrix/client/v3/rooms/{roomId}/send/{eventType}/{txnId}`,
                     * if the client being given the event is the same one which sent it.
                     */
                    transaction_id?: string;
                };
            } & {
                /**
                 * The ID of the room associated with this event.
                 * @example "!jEsUZKDJdhlrceRyVU:example.org"
                 */
                room_id: string;
                unsigned?: {
                    /**
                     * ClientEvent
                     * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","room_id":"!jEsUZKDJdhlrceRyVU:example.org","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
                     */
                    redacted_because?: any;
                };
            })[];
            /**
             * A token which correlates to the end of `chunk`.
             * Can be passed to
             * [`/rooms/<room_id>/messages`](#get_matrixclientv3roomsroomidmessages)
             * to retrieve later events.
             */
            end: string;
            /**
             * A token which correlates to the start of `chunk`.
             * Can be passed to
             * [`/rooms/<room_id>/messages`](#get_matrixclientv3roomsroomidmessages)
             * to retrieve earlier events.
             *
             * If no earlier events are available, this property may be omitted from
             * the response.
             */
            start?: string;
        };
        /** The ID of this room. */
        room_id: string;
        /**
         * If the user is a member of the room this will be the
         * current state of the room as a list of events. If the
         * user has left the room this will be the state of the
         * room when they left it.
         */
        state?: ({
            /**
             * The body of this event, as created by the client which sent it.
             * @example {"membership":"join"}
             */
            content: object;
            /**
             * The globally unique identifier for this event.
             * @example "$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45"
             */
            event_id: string;
            /**
             * Timestamp (in milliseconds since the unix epoch) on originating homeserver
             * when this event was sent.
             * @format int64
             * @example 1632489532305
             */
            origin_server_ts: number;
            /**
             * Contains the fully-qualified ID of the user who sent this event.
             * @example "@example:example.org"
             */
            sender: string;
            /**
             * Present if, and only if, this event is a *state* event. The key making
             * this piece of state unique in the room. Note that it is often an empty
             * string.
             *
             * State keys starting with an `@` are reserved for referencing user IDs, such
             * as room members. With the exception of a few events, state events set with a
             * given user's ID as the state key MUST only be set by that user.
             * @example "@user:example.org"
             */
            state_key?: string;
            /**
             * The type of the event.
             * @example "m.room.member"
             */
            type: string;
            /**
             * UnsignedData
             * Contains optional extra information about the event.
             */
            unsigned?: {
                /**
                 * The time in milliseconds that has elapsed since the event was sent. This field is generated by the local homeserver, and may be incorrect if the local time on at least one of the two servers is out of sync, which can cause the age to either be negative or greater than it actually is.
                 * @format int64
                 * @example 1567437
                 */
                age?: number;
                /**
                 * EventContent
                 * The previous `content` for this event. This field is generated
                 * by the local homeserver, and is only returned if the event is a state event,
                 * and the client has permission to see the previous content.
                 */
                prev_content?: object;
                /**
                 * ClientEventWithoutRoomID
                 * The event that redacted this event, if any.
                 * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
                 */
                redacted_because?: object;
                /**
                 * The client-supplied [transaction ID](https://spec.matrix.org/v1.5/client-server-api/#transaction-identifiers), for example, provided via
                 * `PUT /_matrix/client/v3/rooms/{roomId}/send/{eventType}/{txnId}`,
                 * if the client being given the event is the same one which sent it.
                 */
                transaction_id?: string;
            };
        } & {
            /**
             * The ID of the room associated with this event.
             * @example "!jEsUZKDJdhlrceRyVU:example.org"
             */
            room_id: string;
            unsigned?: {
                /**
                 * ClientEvent
                 * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","room_id":"!jEsUZKDJdhlrceRyVU:example.org","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
                 */
                redacted_because?: any;
            };
        })[];
        /**
         * Whether this room is visible to the `/publicRooms` API
         * or not."
         */
        visibility?: "private" | "public";
    }[];
}

export interface InitialSyncParams {
    /**
     * The maximum number of messages to return for each room.
     * @example "2"
     */
    limit?: number;
    /**
     * Whether to include rooms that the user has left. If `false` then
     * only rooms that the user has been invited to or has joined are
     * included. If set to `true` then rooms that the user has left are
     * included as well. By default this is `false`.
     * @example "true"
     */
    archived?: boolean;
}

export type InviteBy3PidData = object;

/**
 * Error RateLimitError
 * A Matrix-level Error
 * The rate limit was reached for this request
 */
export type InviteBy3PidError =
    | {
          /**
           * An error code.
           * @example "M_UNKNOWN"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "An unknown error occurred"
           */
          error?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

/** @example {"address":"cheeky@monkey.com","id_access_token":"abc123_OpaqueString","id_server":"matrix.org","medium":"email"} */
export interface InviteBy3PidPayload {
    /** The invitee's third party identifier. */
    address: string;
    /**
     * An access token previously registered with the identity server. Servers
     * can treat this as optional to distinguish between r0.5-compatible clients
     * and this specification version.
     */
    id_access_token: string;
    /** The hostname+port of the identity server which should be used for third party identifier lookups. */
    id_server: string;
    /** The kind of address being passed in the address field, for example `email`. */
    medium: string;
}

export type InviteUserData = object;

/**
 * Error Error RateLimitError
 * A Matrix-level Error
 * A Matrix-level Error
 * The rate limit was reached for this request
 */
export type InviteUserError =
    | {
          /**
           * An error code.
           * @example "M_UNKNOWN"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "An unknown error occurred"
           */
          error?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

/** @example {"reason":"Welcome to the team!","user_id":"@cheeky_monkey:matrix.org"} */
export interface InviteUserPayload {
    /**
     * Optional reason to be included as the `reason` on the subsequent
     * membership event.
     */
    reason?: string;
    /** The fully qualified user ID of the invitee. */
    user_id: string;
}

export interface IsPushRuleEnabledData {
    /** Whether the push rule is enabled or not. */
    enabled: boolean;
}

/**
 * Error
 * A Matrix-level Error
 */
export type IsPushRuleEnabledError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

export interface JoinRoomByIdData {
    /** The joined room ID. */
    room_id: string;
}

/**
 * Error RateLimitError
 * A Matrix-level Error
 * The rate limit was reached for this request
 */
export type JoinRoomByIdError =
    | {
          /**
           * An error code.
           * @example "M_UNKNOWN"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "An unknown error occurred"
           */
          error?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

export interface JoinRoomByIdPayload {
    /**
     * Optional reason to be included as the `reason` on the subsequent
     * membership event.
     * @example "Looking for support"
     */
    reason?: string;
    /**
     * If supplied, the homeserver must verify that it matches a pending
     * `m.room.third_party_invite` event in the room, and perform
     * key validity checking if required by the event.
     */
    third_party_signed?: {
        /**
         * The Matrix ID of the invitee.
         * @example "@bob:example.org"
         */
        mxid: string;
        /**
         * The Matrix ID of the user who issued the invite.
         * @example "@alice:example.org"
         */
        sender: string;
        /**
         * Signatures
         * A signatures object containing a signature of the entire signed object.
         * @example {"example.org":{"ed25519:0":"some9signature"}}
         */
        signatures: Record<string, Record<string, string>>;
        /**
         * The state key of the m.third_party_invite event.
         * @example "random8nonce"
         */
        token: string;
    };
}

export interface JoinRoomData {
    /** The joined room ID. */
    room_id: string;
}

/**
 * Error RateLimitError
 * A Matrix-level Error
 * The rate limit was reached for this request
 */
export type JoinRoomError =
    | {
          /**
           * An error code.
           * @example "M_UNKNOWN"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "An unknown error occurred"
           */
          error?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

export interface JoinRoomParams {
    /**
     * The servers to attempt to join the room through. One of the servers
     * must be participating in the room.
     * @example ["matrix.org","elsewhere.ca"]
     */
    server_name?: string[];
    /**
     * The room identifier or alias to join.
     * @example "#monkeys:matrix.org"
     */
    roomIdOrAlias: string;
}

export interface JoinRoomPayload {
    /**
     * Optional reason to be included as the `reason` on the subsequent
     * membership event.
     * @example "Looking for support"
     */
    reason?: string;
    /**
     * If a `third_party_signed` was supplied, the homeserver must verify
     * that it matches a pending `m.room.third_party_invite` event in the
     * room, and perform key validity checking if required by the event.
     */
    third_party_signed?: {
        /**
         * The Matrix ID of the invitee.
         * @example "@bob:example.org"
         */
        mxid: string;
        /**
         * The Matrix ID of the user who issued the invite.
         * @example "@alice:example.org"
         */
        sender: string;
        /**
         * Signatures
         * A signatures object containing a signature of the entire signed object.
         * @example {"example.org":{"ed25519:0":"some9signature"}}
         */
        signatures: Record<string, Record<string, string>>;
        /**
         * The state key of the m.third_party_invite event.
         * @example "random8nonce"
         */
        token: string;
    };
}

export type KickData = object;

/**
 * Error
 * A Matrix-level Error
 */
export type KickError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

/** @example {"reason":"Telling unfunny jokes","user_id":"@cheeky_monkey:matrix.org"} */
export interface KickPayload {
    /**
     * The reason the user has been kicked. This will be supplied as the
     * `reason` on the target's updated [`m.room.member`](https://spec.matrix.org/v1.5/client-server-api/#mroommember) event.
     */
    reason?: string;
    /** The fully qualified user ID of the user being kicked. */
    user_id: string;
}

export interface KnockRoomData {
    /** The knocked room ID. */
    room_id: string;
}

/**
 * Error Error RateLimitError
 * A Matrix-level Error
 * A Matrix-level Error
 * The rate limit was reached for this request
 */
export type KnockRoomError =
    | {
          /**
           * An error code.
           * @example "M_UNKNOWN"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "An unknown error occurred"
           */
          error?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

export interface KnockRoomParams {
    /**
     * The servers to attempt to knock on the room through. One of the servers
     * must be participating in the room.
     * @example ["matrix.org","elsewhere.ca"]
     */
    server_name?: string[];
    /**
     * The room identifier or alias to knock upon.
     * @example "#monkeys:matrix.org"
     */
    roomIdOrAlias: string;
}

export interface KnockRoomPayload {
    /**
     * Optional reason to be included as the `reason` on the subsequent
     * membership event.
     * @example "Looking for support"
     */
    reason?: string;
}

export type LeaveRoomData = object;

/**
 * RateLimitError
 * The rate limit was reached for this request
 */
export type LeaveRoomError = {
    /**
     * The M_LIMIT_EXCEEDED error code
     * @example "M_LIMIT_EXCEEDED"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "Too many requests"
     */
    error?: string;
    /**
     * The amount of time in milliseconds the client should wait
     * before trying the request again.
     * @example 2000
     */
    retry_after_ms?: number;
};

/** @example {"reason":"Saying farewell - thanks for the support!"} */
export interface LeaveRoomPayload {
    /**
     * Optional reason to be included as the `reason` on the subsequent
     * membership event.
     */
    reason?: string;
}

export interface LoginData {
    /**
     * An access token for the account.
     * This access token can then be used to authorize other requests.
     */
    access_token: string;
    /**
     * ID of the logged-in device. Will be the same as the
     * corresponding parameter in the request, if one was specified.
     */
    device_id: string;
    /**
     * The lifetime of the access token, in milliseconds. Once
     * the access token has expired a new access token can be
     * obtained by using the provided refresh token. If no
     * refresh token is provided, the client will need to re-log in
     * to obtain a new access token. If not given, the client can
     * assume that the access token will not expire.
     */
    expires_in_ms?: number;
    /**
     * The server_name of the homeserver on which the account has
     * been registered.
     *
     * **Deprecated**. Clients should extract the server_name from
     * `user_id` (by splitting at the first colon) if they require
     * it. Note also that `homeserver` is not spelt this way.
     */
    home_server?: string;
    /**
     * A refresh token for the account. This token can be used to
     * obtain a new access token when it expires by calling the
     * `/refresh` endpoint.
     */
    refresh_token?: string;
    /** The fully-qualified Matrix ID for the account. */
    user_id: string;
    /**
     * Optional client configuration provided by the server. If present,
     * clients SHOULD use the provided object to reconfigure themselves,
     * optionally validating the URLs within. This object takes the same
     * form as the one returned from .well-known autodiscovery.
     */
    well_known?: {
        /**
         * Homeserver Information
         * Used by clients to discover homeserver information.
         */
        "m.homeserver": {
            /**
             * The base URL for the homeserver for client-server connections.
             * @format uri
             * @example "https://matrix.example.com"
             */
            base_url: string;
        };
        /**
         * Identity Server Information
         * Used by clients to discover identity server information.
         */
        "m.identity_server"?: {
            /**
             * The base URL for the identity server for client-server connections.
             * @format uri
             * @example "https://identity.example.com"
             */
            base_url: string;
        };
        [key: string]: any;
    };
}

/**
 * Error Error RateLimitError
 * A Matrix-level Error
 * A Matrix-level Error
 * The rate limit was reached for this request
 */
export type LoginError =
    | {
          /**
           * An error code.
           * @example "M_UNKNOWN"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "An unknown error occurred"
           */
          error?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

/** @example {"identifier":{"type":"m.id.user","user":"cheeky_monkey"},"initial_device_display_name":"Jungle Phone","password":"ilovebananas","type":"m.login.password"} */
export interface LoginPayload {
    /** Third party identifier for the user.  Deprecated in favour of `identifier`. */
    address?: string;
    /**
     * ID of the client device. If this does not correspond to a
     * known client device, a new device will be created. The given
     * device ID must not be the same as a
     * [cross-signing](https://spec.matrix.org/v1.5/client-server-api/#cross-signing) key ID.
     * The server will auto-generate a device_id
     * if this is not specified.
     */
    device_id?: string;
    /**
     * User identifier
     * Identification information for a user
     */
    identifier?: {
        /** The type of identification.  See [Identifier types](https://spec.matrix.org/v1.5/client-server-api/#identifier-types) for supported values and additional property descriptions. */
        type: string;
        [key: string]: any;
    };
    /**
     * A display name to assign to the newly-created device. Ignored
     * if `device_id` corresponds to a known device.
     */
    initial_device_display_name?: string;
    /** When logging in using a third party identifier, the medium of the identifier. Must be 'email'.  Deprecated in favour of `identifier`. */
    medium?: string;
    /**
     * Required when `type` is `m.login.password`. The user's
     * password.
     */
    password?: string;
    /** If true, the client supports refresh tokens. */
    refresh_token?: boolean;
    /** Required when `type` is `m.login.token`. Part of Token-based login. */
    token?: string;
    /** The login type being used. */
    type: "m.login.password" | "m.login.token";
    /** The fully qualified user ID or just local part of the user ID, to log in.  Deprecated in favour of `identifier`. */
    user?: string;
}

export type LogoutAllData = object;

export type LogoutData = object;

export interface PeekEventsData {
    /** An array of events. */
    chunk?: ({
        /**
         * The body of this event, as created by the client which sent it.
         * @example {"membership":"join"}
         */
        content: object;
        /**
         * The globally unique identifier for this event.
         * @example "$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45"
         */
        event_id: string;
        /**
         * Timestamp (in milliseconds since the unix epoch) on originating homeserver
         * when this event was sent.
         * @format int64
         * @example 1632489532305
         */
        origin_server_ts: number;
        /**
         * Contains the fully-qualified ID of the user who sent this event.
         * @example "@example:example.org"
         */
        sender: string;
        /**
         * Present if, and only if, this event is a *state* event. The key making
         * this piece of state unique in the room. Note that it is often an empty
         * string.
         *
         * State keys starting with an `@` are reserved for referencing user IDs, such
         * as room members. With the exception of a few events, state events set with a
         * given user's ID as the state key MUST only be set by that user.
         * @example "@user:example.org"
         */
        state_key?: string;
        /**
         * The type of the event.
         * @example "m.room.member"
         */
        type: string;
        /**
         * UnsignedData
         * Contains optional extra information about the event.
         */
        unsigned?: {
            /**
             * The time in milliseconds that has elapsed since the event was sent. This field is generated by the local homeserver, and may be incorrect if the local time on at least one of the two servers is out of sync, which can cause the age to either be negative or greater than it actually is.
             * @format int64
             * @example 1567437
             */
            age?: number;
            /**
             * EventContent
             * The previous `content` for this event. This field is generated
             * by the local homeserver, and is only returned if the event is a state event,
             * and the client has permission to see the previous content.
             */
            prev_content?: object;
            /**
             * ClientEventWithoutRoomID
             * The event that redacted this event, if any.
             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
             */
            redacted_because?: object;
            /**
             * The client-supplied [transaction ID](https://spec.matrix.org/v1.5/client-server-api/#transaction-identifiers), for example, provided via
             * `PUT /_matrix/client/v3/rooms/{roomId}/send/{eventType}/{txnId}`,
             * if the client being given the event is the same one which sent it.
             */
            transaction_id?: string;
        };
    } & {
        /**
         * The ID of the room associated with this event.
         * @example "!jEsUZKDJdhlrceRyVU:example.org"
         */
        room_id: string;
        unsigned?: {
            /**
             * ClientEvent
             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","room_id":"!jEsUZKDJdhlrceRyVU:example.org","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
             */
            redacted_because?: any;
        };
    })[];
    /**
     * A token which correlates to the last value in `chunk`. This
     * token should be used in the next request to `/events`.
     */
    end?: string;
    /**
     * A token which correlates to the first value in `chunk`. This
     * is usually the same token supplied to `from=`.
     */
    start?: string;
}

export interface PeekEventsParams {
    /**
     * The token to stream from. This token is either from a previous
     * request to this API or from the initial sync API.
     * @example "s3456_9_0"
     */
    from?: string;
    /**
     * The maximum time in milliseconds to wait for an event.
     * @example "35000"
     */
    timeout?: number;
    /**
     * The room ID for which events should be returned.
     * @example ["!somewhere:over.the.rainbow"]
     */
    room_id?: string;
}

export interface Post3PiDsData {
    /**
     * An optional field containing a URL where the client must
     * submit the validation token to, with identical parameters
     * to the Identity Service API's `POST
     * /validate/email/submitToken` endpoint (without the requirement
     * for an access token). The homeserver must send this token to the
     * user (if applicable), who should then be prompted to provide it
     * to the client.
     *
     * If this field is not present, the client can assume that
     * verification will happen without the client's involvement
     * provided the homeserver advertises this specification version
     * in the `/versions` response (ie: r0.5.0).
     * @format uri
     * @example "https://example.org/path/to/submitToken"
     */
    submit_url?: string;
}

/**
 * Error
 * A Matrix-level Error
 */
export type Post3PiDsError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

/** @example {"three_pid_creds":{"client_secret":"d0nt-T3ll","id_access_token":"abc123_OpaqueString","id_server":"matrix.org","sid":"abc123987"}} */
export interface Post3PiDsPayload {
    /**
     * ThreePidCredentials
     * The third party credentials to associate with the account.
     */
    three_pid_creds: {
        /** The client secret used in the session with the identity server. */
        client_secret: string;
        /**
         * An access token previously registered with the identity server. Servers
         * can treat this as optional to distinguish between r0.5-compatible clients
         * and this specification version.
         */
        id_access_token: string;
        /** The identity server to use. */
        id_server: string;
        /** The session identifier given by the identity server. */
        sid: string;
    };
}

/** An empty object. */
export type PostPusherData = object;

/**
 * Error RateLimitError
 * A Matrix-level Error
 * The rate limit was reached for this request
 */
export type PostPusherError =
    | {
          /**
           * An error code.
           * @example "M_UNKNOWN"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "An unknown error occurred"
           */
          error?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

/** @example {"app_display_name":"Mat Rix","app_id":"com.example.app.ios","append":false,"data":{"format":"event_id_only","url":"https://push-gateway.location.here/_matrix/push/v1/notify"},"device_display_name":"iPhone 9","kind":"http","lang":"en","profile_tag":"xxyyzz","pushkey":"APA91bHPRgkF3JUikC4ENAHEeMrd41Zxv3hVZjC9KtT8OvPVGJ-hQMRKRrZuJAEcl7B338qju59zJMjw2DELjzEvxwYv7hH5Ynpc1ODQ0aT4U4OFEeco8ohsN5PjL1iC2dNtk2BAokeMCg2ZXKqpc8FXKmhX94kIxQ"} */
export interface PostPusherPayload {
    /**
     * A string that will allow the user to identify what application
     * owns this pusher.
     */
    app_display_name: string;
    /**
     * This is a reverse-DNS style identifier for the application.
     * It is recommended that this end with the platform, such that
     * different platform versions get different app identifiers.
     * Max length, 64 chars.
     *
     * If the `kind` is `"email"`, this is `"m.email"`.
     */
    app_id: string;
    /**
     * If true, the homeserver should add another pusher with the
     * given pushkey and App ID in addition to any others with
     * different user IDs. Otherwise, the homeserver must remove any
     * other pushers with the same App ID and pushkey for different
     * users. The default is `false`.
     */
    append?: boolean;
    /**
     * PusherData
     * A dictionary of information for the pusher implementation
     * itself. If `kind` is `http`, this should contain `url`
     * which is the URL to use to send notifications to.
     */
    data: {
        /**
         * The format to send notifications in to Push Gateways if the
         * `kind` is `http`. The details about what fields the
         * homeserver should send to the push gateway are defined in the
         * [Push Gateway Specification](https://spec.matrix.org/v1.5/push-gateway-api/). Currently the only format
         * available is 'event_id_only'.
         */
        format?: string;
        /**
         * Required if `kind` is `http`. The URL to use to send
         * notifications to. MUST be an HTTPS URL with a path of
         * `/_matrix/push/v1/notify`.
         * @format uri
         * @example "https://push-gateway.location.here/_matrix/push/v1/notify"
         */
        url?: string;
    };
    /**
     * A string that will allow the user to identify what device owns
     * this pusher.
     */
    device_display_name: string;
    /**
     * The kind of pusher to configure. `"http"` makes a pusher that
     * sends HTTP pokes. `"email"` makes a pusher that emails the
     * user with unread notifications. `null` deletes the pusher.
     */
    kind: string;
    /**
     * The preferred language for receiving notifications (e.g. 'en'
     * or 'en-US').
     */
    lang: string;
    /**
     * This string determines which set of device specific rules this
     * pusher executes.
     */
    profile_tag?: string;
    /**
     * This is a unique identifier for this pusher. The value you
     * should use for this is the routing or destination address
     * information for the notification, for example, the APNS token
     * for APNS or the Registration ID for GCM. If your notification
     * client has no such concept, use any unique identifier.
     * Max length, 512 bytes.
     *
     * If the `kind` is `"email"`, this is the email address to
     * send notifications to.
     */
    pushkey: string;
}

export type PostReceiptData = object;

/**
 * Error RateLimitError
 * A Matrix-level Error
 * The rate limit was reached for this request
 */
export type PostReceiptError =
    | {
          /**
           * An error code.
           * @example "M_UNKNOWN"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "An unknown error occurred"
           */
          error?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

/** @example {"thread_id":"main"} */
export interface PostReceiptPayload {
    /**
     * The root thread event's ID (or `main`) for which
     * thread this receipt is intended to be under. If
     * not specified, the read receipt is *unthreaded*
     * (default).
     */
    thread_id?: string;
}

export interface PostRoomKeysVersionData {
    /**
     * The backup version. This is an opaque string.
     * @example "1"
     */
    version: string;
}

/**
 * RateLimitError
 * The rate limit was reached for this request
 */
export type PostRoomKeysVersionError = {
    /**
     * The M_LIMIT_EXCEEDED error code
     * @example "M_LIMIT_EXCEEDED"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "Too many requests"
     */
    error?: string;
    /**
     * The amount of time in milliseconds the client should wait
     * before trying the request again.
     * @example 2000
     */
    retry_after_ms?: number;
};

export interface PostRoomKeysVersionPayload {
    /**
     * The algorithm used for storing backups.
     * @example "m.megolm_backup.v1.curve25519-aes-sha2"
     */
    algorithm: "m.megolm_backup.v1.curve25519-aes-sha2";
    /**
     * Algorithm-dependent data. See the documentation for the backup
     * algorithms in [Server-side key backups](https://spec.matrix.org/v1.5/client-server-api/#server-side-key-backups) for more information on the
     * expected format of the data.
     * @example {"public_key":"abcdefg","signatures":{"@alice:example.org":{"ed25519:deviceid":"signature"}}}
     */
    auth_data: object;
}

/** RoomKeysUpdateResponse */
export interface PutRoomKeyBySessionIdData {
    /**
     * The number of keys stored in the backup
     * @example 10
     */
    count: number;
    /**
     * The new etag value representing stored keys in the backup.
     * See `GET /room_keys/version/{version}` for more details.
     * @example "abcdefg"
     */
    etag: string;
}

/**
 * Error RateLimitError
 * A Matrix-level Error
 * The rate limit was reached for this request
 */
export type PutRoomKeyBySessionIdError =
    | {
          /**
           * An error code.
           * @example "M_UNKNOWN"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "An unknown error occurred"
           */
          error?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

export interface PutRoomKeyBySessionIdParams {
    /**
     * The backup in which to store the key. Must be the current backup.
     * @example "1"
     */
    version: string;
    /**
     * The ID of the room that the key is for.
     * @example "!roomid:example.org"
     */
    roomId: string;
    /**
     * The ID of the megolm session that the key is for.
     * @example "sessionid"
     */
    sessionId: string;
}

/**
 * KeyBackupData
 * The key data
 */
export interface PutRoomKeyBySessionIdPayload {
    /**
     * The index of the first message in the session that the key can decrypt.
     * @example 1
     */
    first_message_index: number;
    /**
     * The number of times this key has been forwarded via key-sharing between devices.
     * @example 0
     */
    forwarded_count: number;
    /**
     * Whether the device backing up the key verified the device that the key
     * is from.
     * @example false
     */
    is_verified: boolean;
    /**
     * Algorithm-dependent data.  See the documentation for the backup
     * algorithms in [Server-side key backups](https://spec.matrix.org/v1.5/client-server-api/#server-side-key-backups) for more information on the
     * expected format of the data.
     * @example {"ciphertext":"base64+ciphertext+of+JSON+data","ephemeral":"base64+ephemeral+key","mac":"base64+mac+of+ciphertext"}
     */
    session_data: object;
}

/** RoomKeysUpdateResponse */
export interface PutRoomKeysByRoomIdData {
    /**
     * The number of keys stored in the backup
     * @example 10
     */
    count: number;
    /**
     * The new etag value representing stored keys in the backup.
     * See `GET /room_keys/version/{version}` for more details.
     * @example "abcdefg"
     */
    etag: string;
}

/**
 * Error Error RateLimitError
 * A Matrix-level Error
 * A Matrix-level Error
 * The rate limit was reached for this request
 */
export type PutRoomKeysByRoomIdError =
    | {
          /**
           * An error code.
           * @example "M_UNKNOWN"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "An unknown error occurred"
           */
          error?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

export interface PutRoomKeysByRoomIdParams {
    /**
     * The backup in which to store the keys. Must be the current backup.
     * @example "1"
     */
    version: string;
    /**
     * The ID of the room that the keys are for.
     * @example "!roomid:example.org"
     */
    roomId: string;
}

/**
 * RoomKeyBackup
 * The backed up keys for a room.
 */
export interface PutRoomKeysByRoomIdPayload {
    /**
     * A map of session IDs to key data.
     * @example {"sessionid1":{"first_message_index":1,"forwarded_count":0,"is_verified":true,"session_data":{"ciphertext":"base64+ciphertext+of+JSON+data","ephemeral":"base64+ephemeral+key","mac":"base64+mac+of+ciphertext"}}}
     */
    sessions: Record<
        string,
        {
            /**
             * The index of the first message in the session that the key can decrypt.
             * @example 1
             */
            first_message_index: number;
            /**
             * The number of times this key has been forwarded via key-sharing between devices.
             * @example 0
             */
            forwarded_count: number;
            /**
             * Whether the device backing up the key verified the device that the key
             * is from.
             * @example false
             */
            is_verified: boolean;
            /**
             * Algorithm-dependent data.  See the documentation for the backup
             * algorithms in [Server-side key backups](https://spec.matrix.org/v1.5/client-server-api/#server-side-key-backups) for more information on the
             * expected format of the data.
             * @example {"ciphertext":"base64+ciphertext+of+JSON+data","ephemeral":"base64+ephemeral+key","mac":"base64+mac+of+ciphertext"}
             */
            session_data: object;
        }
    >;
}

/** RoomKeysUpdateResponse */
export interface PutRoomKeysData {
    /**
     * The number of keys stored in the backup
     * @example 10
     */
    count: number;
    /**
     * The new etag value representing stored keys in the backup.
     * See `GET /room_keys/version/{version}` for more details.
     * @example "abcdefg"
     */
    etag: string;
}

/**
 * Error Error RateLimitError
 * A Matrix-level Error
 * A Matrix-level Error
 * The rate limit was reached for this request
 */
export type PutRoomKeysError =
    | {
          /**
           * An error code.
           * @example "M_UNKNOWN"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "An unknown error occurred"
           */
          error?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

export interface PutRoomKeysParams {
    /**
     * The backup in which to store the keys. Must be the current backup.
     * @example "1"
     */
    version: string;
}

export interface PutRoomKeysPayload {
    /**
     * A map of room IDs to room key backup data.
     * @example {"!room:example.org":{"sessions":{"sessionid1":{"first_message_index":1,"forwarded_count":0,"is_verified":true,"session_data":{"ciphertext":"base64+ciphertext+of+JSON+data","ephemeral":"base64+ephemeral+key","mac":"base64+mac+of+ciphertext"}}}}}
     */
    rooms: Record<
        string,
        {
            /**
             * A map of session IDs to key data.
             * @example {"sessionid1":{"first_message_index":1,"forwarded_count":0,"is_verified":true,"session_data":{"ciphertext":"base64+ciphertext+of+JSON+data","ephemeral":"base64+ephemeral+key","mac":"base64+mac+of+ciphertext"}}}
             */
            sessions: Record<
                string,
                {
                    /**
                     * The index of the first message in the session that the key can decrypt.
                     * @example 1
                     */
                    first_message_index: number;
                    /**
                     * The number of times this key has been forwarded via key-sharing between devices.
                     * @example 0
                     */
                    forwarded_count: number;
                    /**
                     * Whether the device backing up the key verified the device that the key
                     * is from.
                     * @example false
                     */
                    is_verified: boolean;
                    /**
                     * Algorithm-dependent data.  See the documentation for the backup
                     * algorithms in [Server-side key backups](https://spec.matrix.org/v1.5/client-server-api/#server-side-key-backups) for more information on the
                     * expected format of the data.
                     * @example {"ciphertext":"base64+ciphertext+of+JSON+data","ephemeral":"base64+ephemeral+key","mac":"base64+mac+of+ciphertext"}
                     */
                    session_data: object;
                }
            >;
        }
    >;
}

export type PutRoomKeysVersionData = object;

/**
 * Error Error RateLimitError
 * A Matrix-level Error
 * A Matrix-level Error
 * The rate limit was reached for this request
 */
export type PutRoomKeysVersionError =
    | {
          /**
           * An error code.
           * @example "M_UNKNOWN"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "An unknown error occurred"
           */
          error?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

export interface PutRoomKeysVersionPayload {
    /**
     * The algorithm used for storing backups.  Must be the same as
     * the algorithm currently used by the backup.
     * @example "m.megolm_backup.v1.curve25519-aes-sha2"
     */
    algorithm: "m.megolm_backup.v1.curve25519-aes-sha2";
    /**
     * Algorithm-dependent data. See the documentation for the backup
     * algorithms in [Server-side key backups](https://spec.matrix.org/v1.5/client-server-api/#server-side-key-backups) for more information on the
     * expected format of the data.
     * @example {"public_key":"abcdefg","signatures":{"@alice:example.org":{"ed25519:deviceid":"signature"}}}
     */
    auth_data: object;
    /**
     * The backup version.  If present, must be the same as the
     * version in the path parameter.
     * @example "1"
     */
    version?: string;
}

export interface QueryKeysData {
    /**
     * Information on the queried devices. A map from user ID, to a
     * map from device ID to device information.  For each device,
     * the information returned will be the same as uploaded via
     * `/keys/upload`, with the addition of an `unsigned`
     * property.
     * @example {"@alice:example.com":{"JLAFKJWSCS":{"algorithms":["m.olm.v1.curve25519-aes-sha2","m.megolm.v1.aes-sha2"],"device_id":"JLAFKJWSCS","keys":{"curve25519:JLAFKJWSCS":"3C5BFWi2Y8MaVvjM8M22DBmh24PmgR0nPvJOIArzgyI","ed25519:JLAFKJWSCS":"lEuiRJBit0IG6nUf5pUzWTUEsRVVe/HJkoKuEww9ULI"},"signatures":{"@alice:example.com":{"ed25519:JLAFKJWSCS":"dSO80A01XiigH3uBiDVx/EjzaoycHcjq9lfQX0uWsqxl2giMIiSPR8a4d291W1ihKJL/a+myXS367WT6NAIcBA"}},"unsigned":{"device_display_name":"Alice's mobile phone"},"user_id":"@alice:example.com"}}}
     */
    device_keys?: Record<
        string,
        Record<
            string,
            {
                /**
                 * The encryption algorithms supported by this device.
                 * @example ["m.olm.v1.curve25519-aes-sha2","m.megolm.v1.aes-sha2"]
                 */
                algorithms: string[];
                /**
                 * The ID of the device these keys belong to. Must match the device ID used
                 * when logging in.
                 * @example "JLAFKJWSCS"
                 */
                device_id: string;
                /**
                 * Public identity keys. The names of the properties should be in the
                 * format `<algorithm>:<device_id>`. The keys themselves should be
                 * encoded as specified by the key algorithm.
                 * @example {"curve25519:JLAFKJWSCS":"3C5BFWi2Y8MaVvjM8M22DBmh24PmgR0nPvJOIArzgyI","ed25519:JLAFKJWSCS":"lEuiRJBit0IG6nUf5pUzWTUEsRVVe/HJkoKuEww9ULI"}
                 */
                keys: Record<string, string>;
                /**
                 * Signatures
                 * Signatures for the device key object. A map from user ID, to a map from
                 * `<algorithm>:<device_id>` to the signature.
                 *
                 * The signature is calculated using the process described at [Signing JSON](https://spec.matrix.org/v1.5/appendices/#signing-json).
                 * @example {"@alice:example.com":{"ed25519:JLAFKJWSCS":"dSO80A01XiigH3uBiDVx/EjzaoycHcjq9lfQX0uWsqxl2giMIiSPR8a4d291W1ihKJL/a+myXS367WT6NAIcBA"}}
                 */
                signatures: Record<string, Record<string, string>>;
                /**
                 * The ID of the user the device belongs to. Must match the user ID used
                 * when logging in.
                 * @example "@alice:example.com"
                 */
                user_id: string;
            } & {
                /**
                 * UnsignedDeviceInfo
                 * Additional data added to the device key information
                 * by intermediate servers, and not covered by the
                 * signatures.
                 */
                unsigned?: {
                    /** The display name which the user set on the device. */
                    device_display_name?: string;
                };
            }
        >
    >;
    /**
     * If any remote homeservers could not be reached, they are
     * recorded here. The names of the properties are the names of
     * the unreachable servers.
     *
     * If the homeserver could be reached, but the user or device
     * was unknown, no failure is recorded. Instead, the corresponding
     * user or device is missing from the `device_keys` result.
     * @example {}
     */
    failures?: Record<string, object>;
    /**
     * Information on the master cross-signing keys of the queried users.
     * A map from user ID, to master key information.  For each key, the
     * information returned will be the same as uploaded via
     * `/keys/device_signing/upload`, along with the signatures
     * uploaded via `/keys/signatures/upload` that the requesting user
     * is allowed to see.
     * @example {"@alice:example.com":{"keys":{"ed25519:base64+master+public+key":"base64+master+public+key"},"usage":["master"],"user_id":"@alice:example.com"}}
     */
    master_keys?: Record<
        string,
        {
            /**
             * The public key.  The object must have exactly one property, whose name is
             * in the form `<algorithm>:<unpadded_base64_public_key>`, and whose value
             * is the unpadded base64 public key.
             * @example {"ed25519:alice+base64+public+key":"alice+base64+public+key"}
             */
            keys: Record<string, string>;
            /**
             * Signatures
             * Signatures of the key, calculated using the process described at [Signing JSON](https://spec.matrix.org/v1.5/appendices/#signing-json).
             * Optional for the master key. Other keys must be signed by the
             * user\'s master key.
             * @example {"@alice:example.com":{"ed25519:alice+base64+master+key":"signature+of+key"}}
             */
            signatures?: object;
            /** What the key is used for. */
            usage: ("master" | "self_signing" | "user_signing")[];
            /**
             * The ID of the user the key belongs to.
             * @example "@alice:example.com"
             */
            user_id: string;
        }
    >;
    /**
     * Information on the self-signing keys of the queried users. A map
     * from user ID, to self-signing key information.  For each key, the
     * information returned will be the same as uploaded via
     * `/keys/device_signing/upload`.
     * @example {"@alice:example.com":{"keys":{"ed25519:base64+self+signing+public+key":"base64+self+signing+master+public+key"},"signatures":{"@alice:example.com":{"ed25519:base64+master+public+key":"signature+of+self+signing+key"}},"usage":["self_signing"],"user_id":"@alice:example.com"}}
     */
    self_signing_keys?: Record<
        string,
        {
            /**
             * The public key.  The object must have exactly one property, whose name is
             * in the form `<algorithm>:<unpadded_base64_public_key>`, and whose value
             * is the unpadded base64 public key.
             * @example {"ed25519:alice+base64+public+key":"alice+base64+public+key"}
             */
            keys: Record<string, string>;
            /**
             * Signatures
             * Signatures of the key, calculated using the process described at [Signing JSON](https://spec.matrix.org/v1.5/appendices/#signing-json).
             * Optional for the master key. Other keys must be signed by the
             * user\'s master key.
             * @example {"@alice:example.com":{"ed25519:alice+base64+master+key":"signature+of+key"}}
             */
            signatures?: object;
            /** What the key is used for. */
            usage: ("master" | "self_signing" | "user_signing")[];
            /**
             * The ID of the user the key belongs to.
             * @example "@alice:example.com"
             */
            user_id: string;
        }
    >;
    /**
     * Information on the user-signing key of the user making the
     * request, if they queried their own device information. A map
     * from user ID, to user-signing key information.  The
     * information returned will be the same as uploaded via
     * `/keys/device_signing/upload`.
     * @example {"@alice:example.com":{"keys":{"ed25519:base64+user+signing+public+key":"base64+user+signing+master+public+key"},"signatures":{"@alice:example.com":{"ed25519:base64+master+public+key":"signature+of+user+signing+key"}},"usage":["user_signing"],"user_id":"@alice:example.com"}}
     */
    user_signing_keys?: Record<
        string,
        {
            /**
             * The public key.  The object must have exactly one property, whose name is
             * in the form `<algorithm>:<unpadded_base64_public_key>`, and whose value
             * is the unpadded base64 public key.
             * @example {"ed25519:alice+base64+public+key":"alice+base64+public+key"}
             */
            keys: Record<string, string>;
            /**
             * Signatures
             * Signatures of the key, calculated using the process described at [Signing JSON](https://spec.matrix.org/v1.5/appendices/#signing-json).
             * Optional for the master key. Other keys must be signed by the
             * user\'s master key.
             * @example {"@alice:example.com":{"ed25519:alice+base64+master+key":"signature+of+key"}}
             */
            signatures?: object;
            /** What the key is used for. */
            usage: ("master" | "self_signing" | "user_signing")[];
            /**
             * The ID of the user the key belongs to.
             * @example "@alice:example.com"
             */
            user_id: string;
        }
    >;
}

export interface QueryKeysPayload {
    /**
     * The keys to be downloaded. A map from user ID, to a list of
     * device IDs, or to an empty list to indicate all devices for the
     * corresponding user.
     * @example {"@alice:example.com":[]}
     */
    device_keys: Record<string, string[]>;
    /**
     * The time (in milliseconds) to wait when downloading keys from
     * remote servers. 10 seconds is the recommended default.
     * @example 10000
     */
    timeout?: number;
    /**
     * If the client is fetching keys as a result of a device update received
     * in a sync request, this should be the 'since' token of that sync request,
     * or any later sync token. This allows the server to ensure its response
     * contains the keys advertised by the notification in that sync.
     */
    token?: string;
}

/** List of matched third party locations. */
export type QueryLocationByAliasData = {
    /**
     * An alias for a matrix room.
     * @example "#freenode_#matrix:matrix.org"
     */
    alias: string;
    /**
     * Information used to identify this third party location.
     * @example {"channel":"#matrix","network":"freenode"}
     */
    fields: object;
    /**
     * The protocol ID that the third party location is a part of.
     * @example "irc"
     */
    protocol: string;
}[];

/**
 * Error
 * A Matrix-level Error
 */
export type QueryLocationByAliasError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

export interface QueryLocationByAliasParams {
    /**
     * The Matrix room alias to look up.
     * @example "#matrix:matrix.org"
     */
    alias: string;
}

/** List of matched third party locations. */
export type QueryLocationByProtocolData = {
    /**
     * An alias for a matrix room.
     * @example "#freenode_#matrix:matrix.org"
     */
    alias: string;
    /**
     * Information used to identify this third party location.
     * @example {"channel":"#matrix","network":"freenode"}
     */
    fields: object;
    /**
     * The protocol ID that the third party location is a part of.
     * @example "irc"
     */
    protocol: string;
}[];

/**
 * Error
 * A Matrix-level Error
 */
export type QueryLocationByProtocolError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

export interface QueryLocationByProtocolParams {
    /**
     * One or more custom fields to help identify the third party
     * location.
     */
    searchFields?: string;
    /**
     * The protocol used to communicate to the third party network.
     * @example "irc"
     */
    protocol: string;
}

/**
 * A list of the rooms on the server.
 * @example {"chunk":[{"avatar_url":"mxc://bleecker.street/CHEDDARandBRIE","guest_can_join":false,"join_rule":"public","name":"CHEESE","num_joined_members":37,"room_id":"!ol19s:bleecker.street","room_type":"m.space","topic":"Tasty tasty cheese","world_readable":true}],"next_batch":"p190q","prev_batch":"p1902","total_room_count_estimate":115}
 */
export interface QueryPublicRoomsData {
    /** A paginated chunk of public rooms. */
    chunk: ({
        /**
         * The URL for the room's avatar, if one is set.
         * @format uri
         * @example "mxc://example.org/abcdef"
         */
        avatar_url?: string;
        /**
         * The canonical alias of the room, if any.
         * @example "#general:example.org"
         */
        canonical_alias?: string;
        /**
         * Whether guest users may join the room and participate in it.
         * If they can, they will be subject to ordinary power level
         * rules like any other user.
         * @example true
         */
        guest_can_join: boolean;
        /**
         * The room's join rule. When not present, the room is assumed to
         * be `public`.
         * @example "public"
         */
        join_rule?: string;
        /**
         * The name of the room, if any.
         * @example "General Chat"
         */
        name?: string;
        /**
         * The number of members joined to the room.
         * @example 42
         */
        num_joined_members: number;
        /**
         * The ID of the room.
         * @example "!abcdefg:example.org"
         */
        room_id: string;
        /** The `type` of room (from [`m.room.create`](https://spec.matrix.org/v1.5/client-server-api/#mroomcreate)), if any. */
        room_type?: string;
        /**
         * The topic of the room, if any.
         * @example "All things general"
         */
        topic?: string;
        /**
         * Whether the room may be viewed by guest users without joining.
         * @example false
         */
        world_readable: boolean;
    } & {
        /**
         * The room's join rule. When not present, the room is assumed to
         * be `public`. Note that rooms with `invite` join rules are not
         * expected here, but rooms with `knock` rules are given their
         * near-public nature.
         * @example "public"
         */
        join_rule?: string;
    })[];
    /**
     * A pagination token for the response. The absence of this token
     * means there are no more results to fetch and the client should
     * stop paginating.
     */
    next_batch?: string;
    /**
     * A pagination token that allows fetching previous results. The
     * absence of this token means there are no results before this
     * batch, i.e. this is the first batch.
     */
    prev_batch?: string;
    /**
     * An estimate on the total number of public rooms, if the
     * server has an estimate.
     */
    total_room_count_estimate?: number;
}

export interface QueryPublicRoomsParams {
    /**
     * The server to fetch the public room lists from. Defaults to the
     * local server.
     */
    server?: string;
}

/** @example {"filter":{"generic_search_term":"foo","room_types":[null,"m.space"]},"include_all_networks":false,"limit":10,"third_party_instance_id":"irc"} */
export interface QueryPublicRoomsPayload {
    /**
     * Filter
     * Filter to apply to the results.
     */
    filter?: {
        /**
         * An optional string to search for in the room metadata, e.g. name,
         * topic, canonical alias, etc.
         */
        generic_search_term?: string;
        /**
         * An optional list of [room types](https://spec.matrix.org/v1.5/client-server-api/#types) to search
         * for. To include rooms without a room type, specify `null` within this
         * list. When not specified, all applicable rooms (regardless of type)
         * are returned.
         */
        room_types?: string[];
    };
    /**
     * Whether or not to include all known networks/protocols from
     * application services on the homeserver. Defaults to false.
     * @example false
     */
    include_all_networks?: boolean;
    /** Limit the number of results returned. */
    limit?: number;
    /**
     * A pagination token from a previous request, allowing clients
     * to get the next (or previous) batch of rooms.  The direction
     * of pagination is specified solely by which token is supplied,
     * rather than via an explicit flag.
     */
    since?: string;
    /**
     * The specific third party network/protocol to request from the
     * homeserver. Can only be used if `include_all_networks` is false.
     * @example "irc"
     */
    third_party_instance_id?: string;
}

/** List of matched third party users. */
export type QueryUserByIdData = {
    /**
     * Information used to identify this third party location.
     * @example {"user":"jim"}
     */
    fields: object;
    /**
     * The protocol ID that the third party location is a part of.
     * @example "gitter"
     */
    protocol: string;
    /**
     * A Matrix User ID represting a third party user.
     * @example "@_gitter_jim:matrix.org"
     */
    userid: string;
}[];

/**
 * Error
 * A Matrix-level Error
 */
export type QueryUserByIdError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

export interface QueryUserByIdParams {
    /**
     * The Matrix User ID to look up.
     * @example "@bob:matrix.org"
     */
    userid: string;
}

/** List of matched third party users. */
export type QueryUserByProtocolData = {
    /**
     * Information used to identify this third party location.
     * @example {"user":"jim"}
     */
    fields: object;
    /**
     * The protocol ID that the third party location is a part of.
     * @example "gitter"
     */
    protocol: string;
    /**
     * A Matrix User ID represting a third party user.
     * @example "@_gitter_jim:matrix.org"
     */
    userid: string;
}[];

/**
 * Error
 * A Matrix-level Error
 */
export type QueryUserByProtocolError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

export interface QueryUserByProtocolParams {
    /** One or more custom fields that are passed to the AS to help identify the user. */
    "fields..."?: string;
    /**
     * The name of the protocol.
     * @example "irc"
     */
    protocol: string;
}

export interface RedactEventData {
    /** A unique identifier for the event. */
    event_id?: string;
}

/** @example {"reason":"Indecent material"} */
export interface RedactEventPayload {
    /** The reason for the event being redacted. */
    reason?: string;
}

export interface RedirectToIdPParams {
    /**
     * URI to which the user will be redirected after the homeserver has
     * authenticated the user with SSO.
     */
    redirectUrl: string;
    /**
     * The `id` of the IdP from the `m.login.sso` `identity_providers`
     * array denoting the user's selection.
     */
    idpId: string;
}

export interface RedirectToSsoParams {
    /**
     * URI to which the user will be redirected after the homeserver has
     * authenticated the user with SSO.
     */
    redirectUrl: string;
}

export interface RefreshData {
    /** The new access token to use. */
    access_token: string;
    /**
     * The lifetime of the access token, in milliseconds. If not
     * given, the client can assume that the access token will not
     * expire.
     */
    expires_in_ms?: number;
    /**
     * The new refresh token to use when the access token needs to
     * be refreshed again. If not given, the old refresh token can
     * be re-used.
     */
    refresh_token?: string;
}

/**
 * Error RateLimitError
 * A Matrix-level Error
 * The rate limit was reached for this request
 */
export type RefreshError =
    | {
          /**
           * An error code.
           * @example "M_UNKNOWN"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "An unknown error occurred"
           */
          error?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

/** @example {"refresh_token":"some_token"} */
export interface RefreshPayload {
    /** The refresh token */
    refresh_token: string;
}

export interface RegisterData {
    /**
     * An access token for the account.
     * This access token can then be used to authorize other requests.
     * Required if the `inhibit_login` option is false.
     */
    access_token?: string;
    /**
     * ID of the registered device. Will be the same as the
     * corresponding parameter in the request, if one was specified.
     * Required if the `inhibit_login` option is false.
     */
    device_id?: string;
    /**
     * The lifetime of the access token, in milliseconds. Once
     * the access token has expired a new access token can be
     * obtained by using the provided refresh token. If no
     * refresh token is provided, the client will need to re-log in
     * to obtain a new access token. If not given, the client can
     * assume that the access token will not expire.
     *
     * Omitted if the `inhibit_login` option is true.
     */
    expires_in_ms?: number;
    /**
     * The server_name of the homeserver on which the account has
     * been registered.
     *
     * **Deprecated**. Clients should extract the server_name from
     * `user_id` (by splitting at the first colon) if they require
     * it. Note also that `homeserver` is not spelt this way.
     */
    home_server?: string;
    /**
     * A refresh token for the account. This token can be used to
     * obtain a new access token when it expires by calling the
     * `/refresh` endpoint.
     *
     * Omitted if the `inhibit_login` option is true.
     */
    refresh_token?: string;
    /**
     * The fully-qualified Matrix user ID (MXID) that has been registered.
     *
     * Any user ID returned by this API must conform to the grammar given in the
     * [Matrix specification](https://spec.matrix.org/v1.5/appendices/#user-identifiers).
     */
    user_id: string;
}

/**
 * Error Authentication response Error RateLimitError
 * A Matrix-level Error
 * Used by servers to indicate that additional authentication information is required,
 * A Matrix-level Error
 * The rate limit was reached for this request
 */
export type RegisterError =
    | {
          /**
           * An error code.
           * @example "M_UNKNOWN"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "An unknown error occurred"
           */
          error?: string;
      }
    | {
          /** A list of the stages the client has completed successfully */
          completed?: string[];
          /** A list of the login flows supported by the server for this API. */
          flows: {
              /**
               * The login type of each of the stages required to complete this
               * authentication flow
               */
              stages: string[];
          }[];
          /**
           * Contains any information that the client will need to know in order to
           * use a given type of authentication. For each login type presented,
           * that type may be present as a key in this dictionary. For example, the
           * public part of an OAuth client ID could be given here.
           * @example {"example.type.baz":{"example_key":"foobar"}}
           */
          params?: Record<string, object>;
          /**
           * This is a session identifier that the client must pass back to the home
           * server, if one is provided, in subsequent attempts to authenticate in the
           * same API call.
           * @example "xxxxxxyz"
           */
          session?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

export interface RegisterParams {
    /**
     * The kind of account to register. Defaults to `user`.
     * @default "user"
     * @example "user"
     */
    kind?: "guest" | "user";
}

export interface RegisterPayload {
    /**
     * Additional authentication information for the
     * user-interactive authentication API. Note that this
     * information is *not* used to define how the registered user
     * should be authenticated, but is instead used to
     * authenticate the `register` call itself.
     */
    auth?: {
        /** The value of the session key given by the homeserver. */
        session?: string;
        /**
         * The authentication type that the client is attempting to complete.
         * May be omitted if `session` is given, and the client is reissuing a
         * request which it believes has been completed out-of-band (for example,
         * via the [fallback mechanism](#fallback)).
         */
        type?: string;
        [key: string]: any;
    };
    /**
     * ID of the client device. If this does not correspond to a
     * known client device, a new device will be created. The server
     * will auto-generate a device_id if this is not specified.
     * @example "GHTYAJCE"
     */
    device_id?: string;
    /**
     * If true, an `access_token` and `device_id` should not be
     * returned from this call, therefore preventing an automatic
     * login. Defaults to false.
     * @example false
     */
    inhibit_login?: boolean;
    /**
     * A display name to assign to the newly-created device. Ignored
     * if `device_id` corresponds to a known device.
     * @example "Jungle Phone"
     */
    initial_device_display_name?: string;
    /**
     * The desired password for the account.
     * @example "ilovebananas"
     */
    password?: string;
    /** If true, the client supports refresh tokens. */
    refresh_token?: boolean;
    /**
     * The basis for the localpart of the desired Matrix ID. If omitted,
     * the homeserver MUST generate a Matrix ID local part.
     * @example "cheeky_monkey"
     */
    username?: string;
}

export interface RegistrationTokenValidityData {
    /**
     * True if the token is still valid, false otherwise. This should
     * additionally be false if the token is not a recognised token by
     * the server.
     */
    valid: boolean;
}

/**
 * Error RateLimitError
 * A Matrix-level Error
 * The rate limit was reached for this request
 */
export type RegistrationTokenValidityError =
    | {
          /**
           * An error code.
           * @example "M_UNKNOWN"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "An unknown error occurred"
           */
          error?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

export interface RegistrationTokenValidityParams {
    /**
     * The token to check validity of.
     * @example "fBVFdqVE"
     */
    token: string;
}

export type ReportContentData = object;

/** @example {"reason":"this makes me sad","score":-100} */
export interface ReportContentPayload {
    /** The reason the content is being reported. May be blank. */
    reason?: string;
    /**
     * The score to rate this content as where -100 is most offensive
     * and 0 is inoffensive.
     */
    score?: number;
}

/** OpenIdCredentials */
export interface RequestOpenIdTokenData {
    /**
     * An access token the consumer may use to verify the identity of
     * the person who generated the token. This is given to the federation
     * API `GET /openid/userinfo` to verify the user's identity.
     */
    access_token: string;
    /**
     * The number of seconds before this token expires and a new one must
     * be generated.
     */
    expires_in: number;
    /**
     * The homeserver domain the consumer should use when attempting to
     * verify the user's identity.
     */
    matrix_server_name: string;
    /** The string `Bearer`. */
    token_type: string;
}

/**
 * RateLimitError
 * The rate limit was reached for this request
 */
export type RequestOpenIdTokenError = {
    /**
     * The M_LIMIT_EXCEEDED error code
     * @example "M_LIMIT_EXCEEDED"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "Too many requests"
     */
    error?: string;
    /**
     * The amount of time in milliseconds the client should wait
     * before trying the request again.
     * @example 2000
     */
    retry_after_ms?: number;
};

/** @example {} */
export type RequestOpenIdTokenPayload = object;

/** RequestTokenResponse */
export interface RequestTokenTo3PidEmailData {
    /**
     * The session ID. Session IDs are opaque strings that must consist entirely
     * of the characters `[0-9a-zA-Z.=_-]`. Their length must not exceed 255
     * characters and they must not be empty.
     * @example "123abc"
     */
    sid: string;
    /**
     * An optional field containing a URL where the client must submit the
     * validation token to, with identical parameters to the Identity Service
     * API's `POST /validate/email/submitToken` endpoint (without the requirement
     * for an access token). The homeserver must send this token to the user (if
     * applicable), who should then be prompted to provide it to the client.
     *
     * If this field is not present, the client can assume that verification
     * will happen without the client's involvement provided the homeserver
     * advertises this specification version in the `/versions` response
     * (ie: r0.5.0).
     * @format uri
     * @example "https://example.org/path/to/submitToken"
     */
    submit_url?: string;
}

/**
 * Error Error
 * A Matrix-level Error
 * A Matrix-level Error
 */
export type RequestTokenTo3PidEmailError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

/** RequestTokenResponse */
export interface RequestTokenTo3PidmsisdnData {
    /**
     * The session ID. Session IDs are opaque strings that must consist entirely
     * of the characters `[0-9a-zA-Z.=_-]`. Their length must not exceed 255
     * characters and they must not be empty.
     * @example "123abc"
     */
    sid: string;
    /**
     * An optional field containing a URL where the client must submit the
     * validation token to, with identical parameters to the Identity Service
     * API's `POST /validate/email/submitToken` endpoint (without the requirement
     * for an access token). The homeserver must send this token to the user (if
     * applicable), who should then be prompted to provide it to the client.
     *
     * If this field is not present, the client can assume that verification
     * will happen without the client's involvement provided the homeserver
     * advertises this specification version in the `/versions` response
     * (ie: r0.5.0).
     * @format uri
     * @example "https://example.org/path/to/submitToken"
     */
    submit_url?: string;
}

/**
 * Error Error
 * A Matrix-level Error
 * A Matrix-level Error
 */
export type RequestTokenTo3PidmsisdnError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

/** RequestTokenResponse */
export interface RequestTokenToRegisterEmailData {
    /**
     * The session ID. Session IDs are opaque strings that must consist entirely
     * of the characters `[0-9a-zA-Z.=_-]`. Their length must not exceed 255
     * characters and they must not be empty.
     * @example "123abc"
     */
    sid: string;
    /**
     * An optional field containing a URL where the client must submit the
     * validation token to, with identical parameters to the Identity Service
     * API's `POST /validate/email/submitToken` endpoint (without the requirement
     * for an access token). The homeserver must send this token to the user (if
     * applicable), who should then be prompted to provide it to the client.
     *
     * If this field is not present, the client can assume that verification
     * will happen without the client's involvement provided the homeserver
     * advertises this specification version in the `/versions` response
     * (ie: r0.5.0).
     * @format uri
     * @example "https://example.org/path/to/submitToken"
     */
    submit_url?: string;
}

/**
 * Error Error
 * A Matrix-level Error
 * A Matrix-level Error
 */
export type RequestTokenToRegisterEmailError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

/** RequestTokenResponse */
export interface RequestTokenToRegisterMsisdnData {
    /**
     * The session ID. Session IDs are opaque strings that must consist entirely
     * of the characters `[0-9a-zA-Z.=_-]`. Their length must not exceed 255
     * characters and they must not be empty.
     * @example "123abc"
     */
    sid: string;
    /**
     * An optional field containing a URL where the client must submit the
     * validation token to, with identical parameters to the Identity Service
     * API's `POST /validate/email/submitToken` endpoint (without the requirement
     * for an access token). The homeserver must send this token to the user (if
     * applicable), who should then be prompted to provide it to the client.
     *
     * If this field is not present, the client can assume that verification
     * will happen without the client's involvement provided the homeserver
     * advertises this specification version in the `/versions` response
     * (ie: r0.5.0).
     * @format uri
     * @example "https://example.org/path/to/submitToken"
     */
    submit_url?: string;
}

/**
 * Error Error
 * A Matrix-level Error
 * A Matrix-level Error
 */
export type RequestTokenToRegisterMsisdnError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

/** RequestTokenResponse */
export interface RequestTokenToResetPasswordEmailData {
    /**
     * The session ID. Session IDs are opaque strings that must consist entirely
     * of the characters `[0-9a-zA-Z.=_-]`. Their length must not exceed 255
     * characters and they must not be empty.
     * @example "123abc"
     */
    sid: string;
    /**
     * An optional field containing a URL where the client must submit the
     * validation token to, with identical parameters to the Identity Service
     * API's `POST /validate/email/submitToken` endpoint (without the requirement
     * for an access token). The homeserver must send this token to the user (if
     * applicable), who should then be prompted to provide it to the client.
     *
     * If this field is not present, the client can assume that verification
     * will happen without the client's involvement provided the homeserver
     * advertises this specification version in the `/versions` response
     * (ie: r0.5.0).
     * @format uri
     * @example "https://example.org/path/to/submitToken"
     */
    submit_url?: string;
}

/**
 * Error Error
 * A Matrix-level Error
 * A Matrix-level Error
 */
export type RequestTokenToResetPasswordEmailError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

/** RequestTokenResponse */
export interface RequestTokenToResetPasswordMsisdnData {
    /**
     * The session ID. Session IDs are opaque strings that must consist entirely
     * of the characters `[0-9a-zA-Z.=_-]`. Their length must not exceed 255
     * characters and they must not be empty.
     * @example "123abc"
     */
    sid: string;
    /**
     * An optional field containing a URL where the client must submit the
     * validation token to, with identical parameters to the Identity Service
     * API's `POST /validate/email/submitToken` endpoint (without the requirement
     * for an access token). The homeserver must send this token to the user (if
     * applicable), who should then be prompted to provide it to the client.
     *
     * If this field is not present, the client can assume that verification
     * will happen without the client's involvement provided the homeserver
     * advertises this specification version in the `/versions` response
     * (ie: r0.5.0).
     * @format uri
     * @example "https://example.org/path/to/submitToken"
     */
    submit_url?: string;
}

/**
 * Error Error
 * A Matrix-level Error
 * A Matrix-level Error
 */
export type RequestTokenToResetPasswordMsisdnError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

/** RoomInfo */
export interface RoomInitialSyncData {
    /** The private data that this user has attached to this room. */
    account_data?: {
        /** The fields in this object will vary depending on the type of event. When interacting with the REST API, this is the HTTP body. */
        content: object;
        /** The type of event. This SHOULD be namespaced similar to Java package naming conventions e.g. 'com.example.subdomain.event.type' */
        type: string;
    }[];
    /** The user's membership state in this room. */
    membership?: "invite" | "join" | "leave" | "ban";
    /**
     * PaginationChunk
     * The pagination chunk for this room.
     */
    messages?: {
        /**
         * If the user is a member of the room this will be a
         * list of the most recent messages for this room. If
         * the user has left the room this will be the
         * messages that preceded them leaving. This array
         * will consist of at most `limit` elements.
         */
        chunk: ({
            /**
             * The body of this event, as created by the client which sent it.
             * @example {"membership":"join"}
             */
            content: object;
            /**
             * The globally unique identifier for this event.
             * @example "$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45"
             */
            event_id: string;
            /**
             * Timestamp (in milliseconds since the unix epoch) on originating homeserver
             * when this event was sent.
             * @format int64
             * @example 1632489532305
             */
            origin_server_ts: number;
            /**
             * Contains the fully-qualified ID of the user who sent this event.
             * @example "@example:example.org"
             */
            sender: string;
            /**
             * Present if, and only if, this event is a *state* event. The key making
             * this piece of state unique in the room. Note that it is often an empty
             * string.
             *
             * State keys starting with an `@` are reserved for referencing user IDs, such
             * as room members. With the exception of a few events, state events set with a
             * given user's ID as the state key MUST only be set by that user.
             * @example "@user:example.org"
             */
            state_key?: string;
            /**
             * The type of the event.
             * @example "m.room.member"
             */
            type: string;
            /**
             * UnsignedData
             * Contains optional extra information about the event.
             */
            unsigned?: {
                /**
                 * The time in milliseconds that has elapsed since the event was sent. This field is generated by the local homeserver, and may be incorrect if the local time on at least one of the two servers is out of sync, which can cause the age to either be negative or greater than it actually is.
                 * @format int64
                 * @example 1567437
                 */
                age?: number;
                /**
                 * EventContent
                 * The previous `content` for this event. This field is generated
                 * by the local homeserver, and is only returned if the event is a state event,
                 * and the client has permission to see the previous content.
                 */
                prev_content?: object;
                /**
                 * ClientEventWithoutRoomID
                 * The event that redacted this event, if any.
                 * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
                 */
                redacted_because?: object;
                /**
                 * The client-supplied [transaction ID](https://spec.matrix.org/v1.5/client-server-api/#transaction-identifiers), for example, provided via
                 * `PUT /_matrix/client/v3/rooms/{roomId}/send/{eventType}/{txnId}`,
                 * if the client being given the event is the same one which sent it.
                 */
                transaction_id?: string;
            };
        } & {
            /**
             * The ID of the room associated with this event.
             * @example "!jEsUZKDJdhlrceRyVU:example.org"
             */
            room_id: string;
            unsigned?: {
                /**
                 * ClientEvent
                 * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","room_id":"!jEsUZKDJdhlrceRyVU:example.org","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
                 */
                redacted_because?: any;
            };
        })[];
        /**
         * A token which correlates to the end of `chunk`. Can be passed to
         * [`/rooms/<room_id>/messages`](#get_matrixclientv3roomsroomidmessages)
         * to retrieve later events.
         */
        end: string;
        /**
         * A token which correlates to the start of `chunk`. Can be passed to
         * [`/rooms/<room_id>/messages`](#get_matrixclientv3roomsroomidmessages)
         * to retrieve earlier events.
         *
         * If no earlier events are available, this property may be omitted from
         * the response.
         */
        start?: string;
    };
    /** The ID of this room. */
    room_id: string;
    /**
     * If the user is a member of the room this will be the
     * current state of the room as a list of events. If the
     * user has left the room this will be the state of the
     * room when they left it.
     */
    state?: ({
        /**
         * The body of this event, as created by the client which sent it.
         * @example {"membership":"join"}
         */
        content: object;
        /**
         * The globally unique identifier for this event.
         * @example "$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45"
         */
        event_id: string;
        /**
         * Timestamp (in milliseconds since the unix epoch) on originating homeserver
         * when this event was sent.
         * @format int64
         * @example 1632489532305
         */
        origin_server_ts: number;
        /**
         * Contains the fully-qualified ID of the user who sent this event.
         * @example "@example:example.org"
         */
        sender: string;
        /**
         * Present if, and only if, this event is a *state* event. The key making
         * this piece of state unique in the room. Note that it is often an empty
         * string.
         *
         * State keys starting with an `@` are reserved for referencing user IDs, such
         * as room members. With the exception of a few events, state events set with a
         * given user's ID as the state key MUST only be set by that user.
         * @example "@user:example.org"
         */
        state_key?: string;
        /**
         * The type of the event.
         * @example "m.room.member"
         */
        type: string;
        /**
         * UnsignedData
         * Contains optional extra information about the event.
         */
        unsigned?: {
            /**
             * The time in milliseconds that has elapsed since the event was sent. This field is generated by the local homeserver, and may be incorrect if the local time on at least one of the two servers is out of sync, which can cause the age to either be negative or greater than it actually is.
             * @format int64
             * @example 1567437
             */
            age?: number;
            /**
             * EventContent
             * The previous `content` for this event. This field is generated
             * by the local homeserver, and is only returned if the event is a state event,
             * and the client has permission to see the previous content.
             */
            prev_content?: object;
            /**
             * ClientEventWithoutRoomID
             * The event that redacted this event, if any.
             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
             */
            redacted_because?: object;
            /**
             * The client-supplied [transaction ID](https://spec.matrix.org/v1.5/client-server-api/#transaction-identifiers), for example, provided via
             * `PUT /_matrix/client/v3/rooms/{roomId}/send/{eventType}/{txnId}`,
             * if the client being given the event is the same one which sent it.
             */
            transaction_id?: string;
        };
    } & {
        /**
         * The ID of the room associated with this event.
         * @example "!jEsUZKDJdhlrceRyVU:example.org"
         */
        room_id: string;
        unsigned?: {
            /**
             * ClientEvent
             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","room_id":"!jEsUZKDJdhlrceRyVU:example.org","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
             */
            redacted_because?: any;
        };
    })[];
    /**
     * Whether this room is visible to the `/publicRooms` API
     * or not."
     */
    visibility?: "private" | "public";
}

/** Results */
export interface SearchData {
    /**
     * Result Categories
     * Describes which categories to search in and their criteria.
     */
    search_categories: {
        /**
         * Result Room Events
         * Mapping of category name to search criteria.
         */
        room_events?: {
            /** An approximate count of the total number of results found. */
            count?: number;
            /**
             * Groups
             * Any groups that were requested.
             *
             * The outer `string` key is the group key requested (eg: `room_id`
             * or `sender`). The inner `string` key is the grouped value (eg:
             * a room's ID or a user's ID).
             */
            groups?: Record<
                string,
                Record<
                    string,
                    {
                        /**
                         * Next Batch in Group
                         * Token that can be used to get the next batch
                         * of results in the group, by passing as the
                         * `next_batch` parameter to the next call. If
                         * this field is absent, there are no more
                         * results in this group.
                         */
                        next_batch?: string;
                        /**
                         * Group Order
                         * Key that can be used to order different
                         * groups.
                         */
                        order?: number;
                        /** Which results are in this group. */
                        results?: string[];
                    }
                >
            >;
            /**
             * Highlights
             * List of words which should be highlighted, useful for stemming which may change the query terms.
             */
            highlights?: string[];
            /**
             * Next Batch
             * Token that can be used to get the next batch of
             * results, by passing as the `next_batch` parameter to
             * the next call. If this field is absent, there are no
             * more results.
             */
            next_batch?: string;
            /**
             * Results
             * List of results in the requested order.
             */
            results?: {
                /**
                 * Event Context
                 * Context for result, if requested.
                 */
                context?: {
                    /**
                     * End Token
                     * Pagination token for the end of the chunk
                     */
                    end?: string;
                    /**
                     * Events After
                     * Events just after the result.
                     */
                    events_after?: ({
                        /**
                         * The body of this event, as created by the client which sent it.
                         * @example {"membership":"join"}
                         */
                        content: object;
                        /**
                         * The globally unique identifier for this event.
                         * @example "$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45"
                         */
                        event_id: string;
                        /**
                         * Timestamp (in milliseconds since the unix epoch) on originating homeserver
                         * when this event was sent.
                         * @format int64
                         * @example 1632489532305
                         */
                        origin_server_ts: number;
                        /**
                         * Contains the fully-qualified ID of the user who sent this event.
                         * @example "@example:example.org"
                         */
                        sender: string;
                        /**
                         * Present if, and only if, this event is a *state* event. The key making
                         * this piece of state unique in the room. Note that it is often an empty
                         * string.
                         *
                         * State keys starting with an `@` are reserved for referencing user IDs, such
                         * as room members. With the exception of a few events, state events set with a
                         * given user's ID as the state key MUST only be set by that user.
                         * @example "@user:example.org"
                         */
                        state_key?: string;
                        /**
                         * The type of the event.
                         * @example "m.room.member"
                         */
                        type: string;
                        /**
                         * UnsignedData
                         * Contains optional extra information about the event.
                         */
                        unsigned?: {
                            /**
                             * The time in milliseconds that has elapsed since the event was sent. This field is generated by the local homeserver, and may be incorrect if the local time on at least one of the two servers is out of sync, which can cause the age to either be negative or greater than it actually is.
                             * @format int64
                             * @example 1567437
                             */
                            age?: number;
                            /**
                             * EventContent
                             * The previous `content` for this event. This field is generated
                             * by the local homeserver, and is only returned if the event is a state event,
                             * and the client has permission to see the previous content.
                             */
                            prev_content?: object;
                            /**
                             * ClientEventWithoutRoomID
                             * The event that redacted this event, if any.
                             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
                             */
                            redacted_because?: object;
                            /**
                             * The client-supplied [transaction ID](https://spec.matrix.org/v1.5/client-server-api/#transaction-identifiers), for example, provided via
                             * `PUT /_matrix/client/v3/rooms/{roomId}/send/{eventType}/{txnId}`,
                             * if the client being given the event is the same one which sent it.
                             */
                            transaction_id?: string;
                        };
                    } & {
                        /**
                         * The ID of the room associated with this event.
                         * @example "!jEsUZKDJdhlrceRyVU:example.org"
                         */
                        room_id: string;
                        unsigned?: {
                            /**
                             * ClientEvent
                             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","room_id":"!jEsUZKDJdhlrceRyVU:example.org","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
                             */
                            redacted_because?: any;
                        };
                    })[];
                    /**
                     * Events Before
                     * Events just before the result.
                     */
                    events_before?: ({
                        /**
                         * The body of this event, as created by the client which sent it.
                         * @example {"membership":"join"}
                         */
                        content: object;
                        /**
                         * The globally unique identifier for this event.
                         * @example "$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45"
                         */
                        event_id: string;
                        /**
                         * Timestamp (in milliseconds since the unix epoch) on originating homeserver
                         * when this event was sent.
                         * @format int64
                         * @example 1632489532305
                         */
                        origin_server_ts: number;
                        /**
                         * Contains the fully-qualified ID of the user who sent this event.
                         * @example "@example:example.org"
                         */
                        sender: string;
                        /**
                         * Present if, and only if, this event is a *state* event. The key making
                         * this piece of state unique in the room. Note that it is often an empty
                         * string.
                         *
                         * State keys starting with an `@` are reserved for referencing user IDs, such
                         * as room members. With the exception of a few events, state events set with a
                         * given user's ID as the state key MUST only be set by that user.
                         * @example "@user:example.org"
                         */
                        state_key?: string;
                        /**
                         * The type of the event.
                         * @example "m.room.member"
                         */
                        type: string;
                        /**
                         * UnsignedData
                         * Contains optional extra information about the event.
                         */
                        unsigned?: {
                            /**
                             * The time in milliseconds that has elapsed since the event was sent. This field is generated by the local homeserver, and may be incorrect if the local time on at least one of the two servers is out of sync, which can cause the age to either be negative or greater than it actually is.
                             * @format int64
                             * @example 1567437
                             */
                            age?: number;
                            /**
                             * EventContent
                             * The previous `content` for this event. This field is generated
                             * by the local homeserver, and is only returned if the event is a state event,
                             * and the client has permission to see the previous content.
                             */
                            prev_content?: object;
                            /**
                             * ClientEventWithoutRoomID
                             * The event that redacted this event, if any.
                             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
                             */
                            redacted_because?: object;
                            /**
                             * The client-supplied [transaction ID](https://spec.matrix.org/v1.5/client-server-api/#transaction-identifiers), for example, provided via
                             * `PUT /_matrix/client/v3/rooms/{roomId}/send/{eventType}/{txnId}`,
                             * if the client being given the event is the same one which sent it.
                             */
                            transaction_id?: string;
                        };
                    } & {
                        /**
                         * The ID of the room associated with this event.
                         * @example "!jEsUZKDJdhlrceRyVU:example.org"
                         */
                        room_id: string;
                        unsigned?: {
                            /**
                             * ClientEvent
                             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","room_id":"!jEsUZKDJdhlrceRyVU:example.org","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
                             */
                            redacted_because?: any;
                        };
                    })[];
                    /**
                     * Profile Information
                     * The historic profile information of the
                     * users that sent the events returned.
                     *
                     * The `string` key is the user ID for which
                     * the profile belongs to.
                     */
                    profile_info?: Record<
                        string,
                        {
                            /**
                             * Avatar Url
                             * @format uri
                             */
                            avatar_url?: string;
                            /** Display name */
                            displayname?: string;
                        }
                    >;
                    /**
                     * Start Token
                     * Pagination token for the start of the chunk
                     */
                    start?: string;
                };
                /** A number that describes how closely this result matches the search. Higher is closer. */
                rank?: number;
                /**
                 * Event
                 * The event that matched.
                 */
                result?: {
                    /**
                     * The body of this event, as created by the client which sent it.
                     * @example {"membership":"join"}
                     */
                    content: object;
                    /**
                     * The globally unique identifier for this event.
                     * @example "$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45"
                     */
                    event_id: string;
                    /**
                     * Timestamp (in milliseconds since the unix epoch) on originating homeserver
                     * when this event was sent.
                     * @format int64
                     * @example 1632489532305
                     */
                    origin_server_ts: number;
                    /**
                     * Contains the fully-qualified ID of the user who sent this event.
                     * @example "@example:example.org"
                     */
                    sender: string;
                    /**
                     * Present if, and only if, this event is a *state* event. The key making
                     * this piece of state unique in the room. Note that it is often an empty
                     * string.
                     *
                     * State keys starting with an `@` are reserved for referencing user IDs, such
                     * as room members. With the exception of a few events, state events set with a
                     * given user's ID as the state key MUST only be set by that user.
                     * @example "@user:example.org"
                     */
                    state_key?: string;
                    /**
                     * The type of the event.
                     * @example "m.room.member"
                     */
                    type: string;
                    /**
                     * UnsignedData
                     * Contains optional extra information about the event.
                     */
                    unsigned?: {
                        /**
                         * The time in milliseconds that has elapsed since the event was sent. This field is generated by the local homeserver, and may be incorrect if the local time on at least one of the two servers is out of sync, which can cause the age to either be negative or greater than it actually is.
                         * @format int64
                         * @example 1567437
                         */
                        age?: number;
                        /**
                         * EventContent
                         * The previous `content` for this event. This field is generated
                         * by the local homeserver, and is only returned if the event is a state event,
                         * and the client has permission to see the previous content.
                         */
                        prev_content?: object;
                        /**
                         * ClientEventWithoutRoomID
                         * The event that redacted this event, if any.
                         * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
                         */
                        redacted_because?: object;
                        /**
                         * The client-supplied [transaction ID](https://spec.matrix.org/v1.5/client-server-api/#transaction-identifiers), for example, provided via
                         * `PUT /_matrix/client/v3/rooms/{roomId}/send/{eventType}/{txnId}`,
                         * if the client being given the event is the same one which sent it.
                         */
                        transaction_id?: string;
                    };
                } & {
                    /**
                     * The ID of the room associated with this event.
                     * @example "!jEsUZKDJdhlrceRyVU:example.org"
                     */
                    room_id: string;
                    unsigned?: {
                        /**
                         * ClientEvent
                         * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","room_id":"!jEsUZKDJdhlrceRyVU:example.org","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
                         */
                        redacted_because?: any;
                    };
                };
            }[];
            /**
             * Current state
             * The current state for every room in the results.
             * This is included if the request had the
             * `include_state` key set with a value of `true`.
             *
             * The `string` key is the room ID for which the `State
             * Event` array belongs to.
             */
            state?: Record<
                string,
                ({
                    /**
                     * The body of this event, as created by the client which sent it.
                     * @example {"membership":"join"}
                     */
                    content: object;
                    /**
                     * The globally unique identifier for this event.
                     * @example "$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45"
                     */
                    event_id: string;
                    /**
                     * Timestamp (in milliseconds since the unix epoch) on originating homeserver
                     * when this event was sent.
                     * @format int64
                     * @example 1632489532305
                     */
                    origin_server_ts: number;
                    /**
                     * Contains the fully-qualified ID of the user who sent this event.
                     * @example "@example:example.org"
                     */
                    sender: string;
                    /**
                     * Present if, and only if, this event is a *state* event. The key making
                     * this piece of state unique in the room. Note that it is often an empty
                     * string.
                     *
                     * State keys starting with an `@` are reserved for referencing user IDs, such
                     * as room members. With the exception of a few events, state events set with a
                     * given user's ID as the state key MUST only be set by that user.
                     * @example "@user:example.org"
                     */
                    state_key?: string;
                    /**
                     * The type of the event.
                     * @example "m.room.member"
                     */
                    type: string;
                    /**
                     * UnsignedData
                     * Contains optional extra information about the event.
                     */
                    unsigned?: {
                        /**
                         * The time in milliseconds that has elapsed since the event was sent. This field is generated by the local homeserver, and may be incorrect if the local time on at least one of the two servers is out of sync, which can cause the age to either be negative or greater than it actually is.
                         * @format int64
                         * @example 1567437
                         */
                        age?: number;
                        /**
                         * EventContent
                         * The previous `content` for this event. This field is generated
                         * by the local homeserver, and is only returned if the event is a state event,
                         * and the client has permission to see the previous content.
                         */
                        prev_content?: object;
                        /**
                         * ClientEventWithoutRoomID
                         * The event that redacted this event, if any.
                         * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
                         */
                        redacted_because?: object;
                        /**
                         * The client-supplied [transaction ID](https://spec.matrix.org/v1.5/client-server-api/#transaction-identifiers), for example, provided via
                         * `PUT /_matrix/client/v3/rooms/{roomId}/send/{eventType}/{txnId}`,
                         * if the client being given the event is the same one which sent it.
                         */
                        transaction_id?: string;
                    };
                } & {
                    /**
                     * The ID of the room associated with this event.
                     * @example "!jEsUZKDJdhlrceRyVU:example.org"
                     */
                    room_id: string;
                    unsigned?: {
                        /**
                         * ClientEvent
                         * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","room_id":"!jEsUZKDJdhlrceRyVU:example.org","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
                         */
                        redacted_because?: any;
                    };
                })[]
            >;
        };
    };
}

/**
 * RateLimitError
 * The rate limit was reached for this request
 */
export type SearchError = {
    /**
     * The M_LIMIT_EXCEEDED error code
     * @example "M_LIMIT_EXCEEDED"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "Too many requests"
     */
    error?: string;
    /**
     * The amount of time in milliseconds the client should wait
     * before trying the request again.
     * @example 2000
     */
    retry_after_ms?: number;
};

export interface SearchParams {
    /**
     * The point to return events from. If given, this should be a
     * `next_batch` result from a previous call to this endpoint.
     * @example "YWxsCgpOb25lLDM1ODcwOA"
     */
    next_batch?: string;
}

/** @example {"search_categories":{"room_events":{"groupings":{"group_by":[{"key":"room_id"}]},"keys":["content.body"],"order_by":"recent","search_term":"martians and men"}}} */
export interface SearchPayload {
    /**
     * Categories
     * Describes which categories to search in and their criteria.
     */
    search_categories: {
        /**
         * Room Events Criteria
         * Mapping of category name to search criteria.
         */
        room_events?: {
            /**
             * Include Event Context
             * Configures whether any context for the events
             * returned are included in the response.
             */
            event_context?: {
                /**
                 * After limit
                 * How many events after the result are
                 * returned. By default, this is `5`.
                 */
                after_limit?: number;
                /**
                 * Before limit
                 * How many events before the result are
                 * returned. By default, this is `5`.
                 */
                before_limit?: number;
                /**
                 * Return profile information
                 * Requests that the server returns the
                 * historic profile information for the users
                 * that sent the events that were returned.
                 * By default, this is `false`.
                 */
                include_profile?: boolean;
            };
            /**
             * Filter
             * This takes a [filter](https://spec.matrix.org/v1.5/client-server-api/#filtering).
             */
            filter?: {
                /** The maximum number of events to return. */
                limit?: number;
                /** A list of sender IDs to exclude. If this list is absent then no senders are excluded. A matching sender will be excluded even if it is listed in the `'senders'` filter. */
                not_senders?: string[];
                /** A list of event types to exclude. If this list is absent then no event types are excluded. A matching type will be excluded even if it is listed in the `'types'` filter. A '*' can be used as a wildcard to match any sequence of characters. */
                not_types?: string[];
                /** A list of senders IDs to include. If this list is absent then all senders are included. */
                senders?: string[];
                /** A list of event types to include. If this list is absent then all event types are included. A `'*'` can be used as a wildcard to match any sequence of characters. */
                types?: string[];
            } & {
                /** If `true`, includes only events with a `url` key in their content. If `false`, excludes those events. If omitted, `url` key is not considered for filtering. */
                contains_url?: boolean;
                /**
                 * If `true`, sends all membership events for all events, even if they have already
                 * been sent to the client. Does not
                 * apply unless `lazy_load_members` is `true`. See
                 * [Lazy-loading room members](https://spec.matrix.org/v1.5/client-server-api/#lazy-loading-room-members)
                 * for more information. Defaults to `false`.
                 */
                include_redundant_members?: boolean;
                /**
                 * If `true`, enables lazy-loading of membership events. See
                 * [Lazy-loading room members](https://spec.matrix.org/v1.5/client-server-api/#lazy-loading-room-members)
                 * for more information. Defaults to `false`.
                 */
                lazy_load_members?: boolean;
                /** A list of room IDs to exclude. If this list is absent then no rooms are excluded. A matching room will be excluded even if it is listed in the `'rooms'` filter. */
                not_rooms?: string[];
                /** A list of room IDs to include. If this list is absent then all rooms are included. */
                rooms?: string[];
                /**
                 * If `true`, enables per-[thread](https://spec.matrix.org/v1.5/client-server-api/#threading) notification
                 * counts. Only applies to the `/sync` endpoint. Defaults to `false`.
                 */
                unread_thread_notifications?: boolean;
            };
            /**
             * Groupings
             * Requests that the server partitions the result set
             * based on the provided list of keys.
             */
            groupings?: {
                /**
                 * Groups
                 * List of groups to request.
                 */
                group_by?: {
                    /**
                     * Group Key
                     * Key that defines the group.
                     */
                    key?: "room_id" | "sender";
                }[];
            };
            /**
             * Include current state
             * Requests the server return the current state for
             * each room returned.
             */
            include_state?: boolean;
            /** The keys to search. Defaults to all. */
            keys?: ("content.body" | "content.name" | "content.topic")[];
            /**
             * Ordering
             * The order in which to search for results.
             * By default, this is `"rank"`.
             */
            order_by?: "recent" | "rank";
            /** The string to search events for */
            search_term: string;
        };
    };
}

export interface SearchUserDirectoryData {
    /** Indicates if the result list has been truncated by the limit. */
    limited: boolean;
    /** Ordered by rank and then whether or not profile info is available. */
    results: {
        /**
         * The avatar url, as an MXC, if one exists.
         * @format uri
         * @example "mxc://bar.com/foo"
         */
        avatar_url?: string;
        /**
         * The display name of the user, if one exists.
         * @example "Foo"
         */
        display_name?: string;
        /**
         * The user's matrix user ID.
         * @example "@foo:bar.com"
         */
        user_id: string;
    }[];
}

/**
 * RateLimitError
 * The rate limit was reached for this request
 */
export type SearchUserDirectoryError = {
    /**
     * The M_LIMIT_EXCEEDED error code
     * @example "M_LIMIT_EXCEEDED"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "Too many requests"
     */
    error?: string;
    /**
     * The amount of time in milliseconds the client should wait
     * before trying the request again.
     * @example 2000
     */
    retry_after_ms?: number;
};

export interface SearchUserDirectoryPayload {
    /**
     * The maximum number of results to return. Defaults to 10.
     * @example 10
     */
    limit?: number;
    /**
     * The term to search for
     * @example "foo"
     */
    search_term: string;
}

export interface SendMessageData {
    /** A unique identifier for the event. */
    event_id: string;
}

/** @example {"body":"hello","msgtype":"m.text"} */
export type SendMessagePayload = object;

export type SendToDeviceData = object;

/** body */
export interface SendToDevicePayload {
    /**
     * The messages to send. A map from user ID, to a map from
     * device ID to message body. The device ID may also be `*`,
     * meaning all known devices for the user.
     * @example {"@alice:example.com":{"TLLBEANAAG":{"example_content_key":"value"}}}
     */
    messages: Record<string, Record<string, object>>;
}

export type SetAccountDataData = object;

/**
 * Error Error Error
 * A Matrix-level Error
 * A Matrix-level Error
 * A Matrix-level Error
 */
export type SetAccountDataError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

/** @example {"custom_account_data_key":"custom_config_value"} */
export type SetAccountDataPayload = object;

export type SetAccountDataPerRoomData = object;

/**
 * Error Error Error
 * A Matrix-level Error
 * A Matrix-level Error
 * A Matrix-level Error
 */
export type SetAccountDataPerRoomError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

/** @example {"custom_account_data_key":"custom_account_data_value"} */
export type SetAccountDataPerRoomPayload = object;

export type SetAvatarUrlData = object;

/**
 * RateLimitError
 * The rate limit was reached for this request
 */
export type SetAvatarUrlError = {
    /**
     * The M_LIMIT_EXCEEDED error code
     * @example "M_LIMIT_EXCEEDED"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "Too many requests"
     */
    error?: string;
    /**
     * The amount of time in milliseconds the client should wait
     * before trying the request again.
     * @example 2000
     */
    retry_after_ms?: number;
};

/** @example {"avatar_url":"mxc://matrix.org/wefh34uihSDRGhw34"} */
export interface SetAvatarUrlPayload {
    /**
     * The new avatar URL for this user.
     * @format uri
     */
    avatar_url?: string;
}

export type SetDisplayNameData = object;

/**
 * RateLimitError
 * The rate limit was reached for this request
 */
export type SetDisplayNameError = {
    /**
     * The M_LIMIT_EXCEEDED error code
     * @example "M_LIMIT_EXCEEDED"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "Too many requests"
     */
    error?: string;
    /**
     * The amount of time in milliseconds the client should wait
     * before trying the request again.
     * @example 2000
     */
    retry_after_ms?: number;
};

/** @example {"displayname":"Alice Margatroid"} */
export interface SetDisplayNamePayload {
    /** The new display name for this user. */
    displayname?: string;
}

export type SetPresenceData = object;

/**
 * RateLimitError
 * The rate limit was reached for this request
 */
export type SetPresenceError = {
    /**
     * The M_LIMIT_EXCEEDED error code
     * @example "M_LIMIT_EXCEEDED"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "Too many requests"
     */
    error?: string;
    /**
     * The amount of time in milliseconds the client should wait
     * before trying the request again.
     * @example 2000
     */
    retry_after_ms?: number;
};

/** @example {"presence":"online","status_msg":"I am here."} */
export interface SetPresencePayload {
    /** The new presence state. */
    presence: "online" | "offline" | "unavailable";
    /** The status message to attach to this state. */
    status_msg?: string;
}

export type SetPushRuleActionsData = object;

/**
 * Error
 * A Matrix-level Error
 */
export type SetPushRuleActionsError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

/** @example {"actions":["notify",{"set_tweak":"highlight"}]} */
export interface SetPushRuleActionsPayload {
    /** The action(s) to perform for this rule. */
    actions: (string | object)[];
}

export type SetPushRuleData = object;

export type SetPushRuleEnabledData = object;

/**
 * Error
 * A Matrix-level Error
 */
export type SetPushRuleEnabledError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

/** @example {"enabled":true} */
export interface SetPushRuleEnabledPayload {
    /** Whether the push rule is enabled or not. */
    enabled: boolean;
}

/**
 * Error Error RateLimitError
 * A Matrix-level Error
 * A Matrix-level Error
 * The rate limit was reached for this request
 */
export type SetPushRuleError =
    | {
          /**
           * An error code.
           * @example "M_UNKNOWN"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "An unknown error occurred"
           */
          error?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

export interface SetPushRuleParams {
    /**
     * Use 'before' with a `rule_id` as its value to make the new rule the
     * next-most important rule with respect to the given user defined rule.
     * It is not possible to add a rule relative to a predefined server rule.
     * @example "someRuleId"
     */
    before?: string;
    /**
     * This makes the new rule the next-less important rule relative to the
     * given user defined rule. It is not possible to add a rule relative
     * to a predefined server rule.
     * @example "anotherRuleId"
     */
    after?: string;
    /**
     * `global` to specify global rules.
     * @example "global"
     */
    scope: string;
    /**
     * The kind of rule
     * @example "content"
     */
    kind: "override" | "underride" | "sender" | "room" | "content";
    /**
     * The identifier for the rule. If the string starts with a dot ("."),
     * the request MUST be rejected as this is reserved for server-default
     * rules. Slashes ("/") and backslashes ("\\") are also not allowed.
     * @example "nocake"
     */
    ruleId: string;
}

/** @example {"actions":["notify"],"pattern":"cake*lie"} */
export interface SetPushRulePayload {
    /** The action(s) to perform when the conditions for this rule are met. */
    actions: (string | object)[];
    /**
     * The conditions that must hold true for an event in order for a
     * rule to be applied to an event. A rule with no conditions
     * always matches. Only applicable to `underride` and `override` rules.
     */
    conditions?: {
        /**
         * Required for `room_member_count` conditions. A decimal integer
         * optionally prefixed by one of, ==, <, >, >= or <=. A prefix of < matches
         * rooms where the member count is strictly less than the given number and
         * so forth. If no prefix is present, this parameter defaults to ==.
         */
        is?: string;
        /**
         * Required for `event_match` conditions. The dot-separated field of the
         * event to match.
         *
         * Required for `sender_notification_permission` conditions. The field in
         * the power level event the user needs a minimum power level for. Fields
         * must be specified under the `notifications` property in the power level
         * event's `content`.
         */
        key?: string;
        /**
         * The kind of condition to apply. See [conditions](https://spec.matrix.org/v1.5/client-server-api/#conditions) for
         * more information on the allowed kinds and how they work.
         */
        kind: string;
        /**
         * Required for `event_match` conditions. The glob-style pattern to
         * match against.
         */
        pattern?: string;
    }[];
    /** Only applicable to `content` rules. The glob-style pattern to match against. */
    pattern?: string;
}

export type SetReadMarkerData = object;

/**
 * RateLimitError
 * The rate limit was reached for this request
 */
export type SetReadMarkerError = {
    /**
     * The M_LIMIT_EXCEEDED error code
     * @example "M_LIMIT_EXCEEDED"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "Too many requests"
     */
    error?: string;
    /**
     * The amount of time in milliseconds the client should wait
     * before trying the request again.
     * @example 2000
     */
    retry_after_ms?: number;
};

export interface SetReadMarkerPayload {
    /**
     * The event ID the read marker should be located at. The
     * event MUST belong to the room.
     * @example "$somewhere:example.org"
     */
    "m.fully_read"?: string;
    /**
     * The event ID to set the read receipt location at. This is
     * equivalent to calling `/receipt/m.read/$elsewhere:example.org`
     * and is provided here to save that extra call.
     * @example "$elsewhere:example.org"
     */
    "m.read"?: string;
    /**
     * The event ID to set the *private* read receipt location at. This
     * equivalent to calling `/receipt/m.read.private/$elsewhere:example.org`
     * and is provided here to save that extra call.
     * @example "$elsewhere:example.org"
     */
    "m.read.private"?: string;
}

export type SetRoomAliasData = object;

/**
 * Error Error
 * A Matrix-level Error
 * A Matrix-level Error
 */
export type SetRoomAliasError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

/** @example {"room_id":"!abnjk1jdasj98:capuchins.com"} */
export interface SetRoomAliasPayload {
    /** The room ID to set. */
    room_id: string;
}

export interface SetRoomStateWithKeyData {
    /** A unique identifier for the event. */
    event_id: string;
}

/**
 * Error Error
 * A Matrix-level Error
 * A Matrix-level Error
 */
export type SetRoomStateWithKeyError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

/** @example {"avatar_url":"mxc://localhost/SEsfnsuifSDFSSEF","displayname":"Alice Margatroid","membership":"join"} */
export type SetRoomStateWithKeyPayload = object;

export type SetRoomTagData = object;

/** @example {"order":0.25} */
export interface SetRoomTagPayload {
    /**
     * A number in a range `[0,1]` describing a relative
     * position of the room under the given tag.
     * @format float
     */
    order?: number;
    [key: string]: any;
}

export type SetRoomVisibilityOnDirectoryData = object;

/**
 * Error
 * A Matrix-level Error
 */
export type SetRoomVisibilityOnDirectoryError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

/** @example {"visibility":"public"} */
export interface SetRoomVisibilityOnDirectoryPayload {
    /**
     * The new visibility setting for the room.
     * Defaults to 'public'.
     */
    visibility?: "private" | "public";
}

export type SetTypingData = object;

/**
 * RateLimitError
 * The rate limit was reached for this request
 */
export type SetTypingError = {
    /**
     * The M_LIMIT_EXCEEDED error code
     * @example "M_LIMIT_EXCEEDED"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "Too many requests"
     */
    error?: string;
    /**
     * The amount of time in milliseconds the client should wait
     * before trying the request again.
     * @example 2000
     */
    retry_after_ms?: number;
};

/** @example {"timeout":30000,"typing":true} */
export interface SetTypingPayload {
    /** The length of time in milliseconds to mark this user as typing. */
    timeout?: number;
    /**
     * Whether the user is typing or not. If `false`, the `timeout`
     * key can be omitted.
     */
    typing: boolean;
}

export interface SyncData {
    /**
     * Account Data
     * The global private data created by this user.
     */
    account_data?: {
        /** List of events. */
        events?: {
            /** The fields in this object will vary depending on the type of event. When interacting with the REST API, this is the HTTP body. */
            content: object;
            /** The type of event. This SHOULD be namespaced similar to Java package naming conventions e.g. 'com.example.subdomain.event.type' */
            type: string;
        }[];
    };
    /**
     * DeviceLists
     * Information on end-to-end device updates, as specified in
     * [End-to-end encryption](https://spec.matrix.org/v1.5/client-server-api/#e2e-extensions-to-sync).
     */
    device_lists?: object;
    /**
     * One-time keys count
     * Information on end-to-end encryption keys, as specified
     * in [End-to-end encryption](https://spec.matrix.org/v1.5/client-server-api/#e2e-extensions-to-sync).
     */
    device_one_time_keys_count?: Record<string, number>;
    /**
     * The batch token to supply in the `since` param of the next
     * `/sync` request.
     */
    next_batch: string;
    /**
     * Presence
     * The updates to the presence status of other users.
     */
    presence?: {
        /** List of events. */
        events?: {
            /** The fields in this object will vary depending on the type of event. When interacting with the REST API, this is the HTTP body. */
            content: object;
            /** The type of event. This SHOULD be namespaced similar to Java package naming conventions e.g. 'com.example.subdomain.event.type' */
            type: string;
        }[];
    };
    /**
     * Rooms
     * Updates to rooms.
     */
    rooms?: {
        /**
         * Invited Rooms
         * The rooms that the user has been invited to, mapped as room ID to
         * room information.
         */
        invite?: Record<
            string,
            {
                /**
                 * InviteState
                 * The [stripped state](#stripped-state) of a room that the user has been invited
                 * to.
                 */
                invite_state?: {
                    /** The [stripped state events](#stripped-state) that form the invite state. */
                    events?: {
                        /**
                         * EventContent
                         * The `content` for the event.
                         */
                        content: object;
                        /** The `sender` for the event. */
                        sender: string;
                        /** The `state_key` for the event. */
                        state_key: string;
                        /** The `type` for the event. */
                        type: string;
                    }[];
                };
            }
        >;
        /**
         * Joined Rooms
         * The rooms that the user has joined, mapped as room ID to
         * room information.
         */
        join?: Record<
            string,
            {
                /**
                 * Account Data
                 * The private data that this user has attached to
                 * this room.
                 */
                account_data?: {
                    /** List of events. */
                    events?: {
                        /** The fields in this object will vary depending on the type of event. When interacting with the REST API, this is the HTTP body. */
                        content: object;
                        /** The type of event. This SHOULD be namespaced similar to Java package naming conventions e.g. 'com.example.subdomain.event.type' */
                        type: string;
                    }[];
                };
                /**
                 * Ephemeral
                 * The new ephemeral events in the room (events that
                 * aren't recorded in the timeline or state of the
                 * room). In this version of the spec, these are
                 * [typing notification](#typing-notifications) and
                 * [read receipt](#receipts) events.
                 */
                ephemeral?: {
                    /** List of events. */
                    events?: {
                        /** The fields in this object will vary depending on the type of event. When interacting with the REST API, this is the HTTP body. */
                        content: object;
                        /** The type of event. This SHOULD be namespaced similar to Java package naming conventions e.g. 'com.example.subdomain.event.type' */
                        type: string;
                    }[];
                };
                /**
                 * State
                 * Updates to the state, between the time indicated by
                 * the `since` parameter, and the start of the
                 * `timeline` (or all state up to the start of the
                 * `timeline`, if `since` is not given, or
                 * `full_state` is true).
                 *
                 * N.B. state updates for `m.room.member` events will
                 * be incomplete if `lazy_load_members` is enabled in
                 * the `/sync` filter, and only return the member events
                 * required to display the senders of the timeline events
                 * in this response.
                 */
                state?: {
                    /** List of events. */
                    events?: {
                        /**
                         * The body of this event, as created by the client which sent it.
                         * @example {"membership":"join"}
                         */
                        content: object;
                        /**
                         * The globally unique identifier for this event.
                         * @example "$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45"
                         */
                        event_id: string;
                        /**
                         * Timestamp (in milliseconds since the unix epoch) on originating homeserver
                         * when this event was sent.
                         * @format int64
                         * @example 1632489532305
                         */
                        origin_server_ts: number;
                        /**
                         * Contains the fully-qualified ID of the user who sent this event.
                         * @example "@example:example.org"
                         */
                        sender: string;
                        /**
                         * Present if, and only if, this event is a *state* event. The key making
                         * this piece of state unique in the room. Note that it is often an empty
                         * string.
                         *
                         * State keys starting with an `@` are reserved for referencing user IDs, such
                         * as room members. With the exception of a few events, state events set with a
                         * given user's ID as the state key MUST only be set by that user.
                         * @example "@user:example.org"
                         */
                        state_key?: string;
                        /**
                         * The type of the event.
                         * @example "m.room.member"
                         */
                        type: string;
                        /**
                         * UnsignedData
                         * Contains optional extra information about the event.
                         */
                        unsigned?: {
                            /**
                             * The time in milliseconds that has elapsed since the event was sent. This field is generated by the local homeserver, and may be incorrect if the local time on at least one of the two servers is out of sync, which can cause the age to either be negative or greater than it actually is.
                             * @format int64
                             * @example 1567437
                             */
                            age?: number;
                            /**
                             * EventContent
                             * The previous `content` for this event. This field is generated
                             * by the local homeserver, and is only returned if the event is a state event,
                             * and the client has permission to see the previous content.
                             */
                            prev_content?: object;
                            /**
                             * ClientEventWithoutRoomID
                             * The event that redacted this event, if any.
                             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
                             */
                            redacted_because?: object;
                            /**
                             * The client-supplied [transaction ID](https://spec.matrix.org/v1.5/client-server-api/#transaction-identifiers), for example, provided via
                             * `PUT /_matrix/client/v3/rooms/{roomId}/send/{eventType}/{txnId}`,
                             * if the client being given the event is the same one which sent it.
                             */
                            transaction_id?: string;
                        };
                    }[];
                };
                /**
                 * RoomSummary
                 * Information about the room which clients may need to
                 * correctly render it to users.
                 */
                summary?: {
                    /**
                     * The users which can be used to generate a room name
                     * if the room does not have one. Required if the room's
                     * `m.room.name` or `m.room.canonical_alias` state events
                     * are unset or empty.
                     *
                     * This should be the first 5 members of the room, ordered
                     * by stream ordering, which are joined or invited. The
                     * list must never include the client's own user ID. When
                     * no joined or invited members are available, this should
                     * consist of the banned and left users. More than 5 members
                     * may be provided, however less than 5 should only be provided
                     * when there are less than 5 members to represent.
                     *
                     * When lazy-loading room members is enabled, the membership
                     * events for the heroes MUST be included in the `state`,
                     * unless they are redundant. When the list of users changes,
                     * the server notifies the client by sending a fresh list of
                     * heroes. If there are no changes since the last sync, this
                     * field may be omitted.
                     */
                    "m.heroes"?: string[];
                    /**
                     * The number of users with `membership` of `invite`.
                     * If this field has not changed since the last sync, it
                     * may be omitted. Required otherwise.
                     */
                    "m.invited_member_count"?: number;
                    /**
                     * The number of users with `membership` of `join`,
                     * including the client's own user ID. If this field has
                     * not changed since the last sync, it may be omitted.
                     * Required otherwise.
                     */
                    "m.joined_member_count"?: number;
                };
                /**
                 * Timeline
                 * The timeline of messages and state changes in the
                 * room.
                 */
                timeline?: {
                    /** List of events. */
                    events: {
                        /**
                         * The body of this event, as created by the client which sent it.
                         * @example {"membership":"join"}
                         */
                        content: object;
                        /**
                         * The globally unique identifier for this event.
                         * @example "$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45"
                         */
                        event_id: string;
                        /**
                         * Timestamp (in milliseconds since the unix epoch) on originating homeserver
                         * when this event was sent.
                         * @format int64
                         * @example 1632489532305
                         */
                        origin_server_ts: number;
                        /**
                         * Contains the fully-qualified ID of the user who sent this event.
                         * @example "@example:example.org"
                         */
                        sender: string;
                        /**
                         * Present if, and only if, this event is a *state* event. The key making
                         * this piece of state unique in the room. Note that it is often an empty
                         * string.
                         *
                         * State keys starting with an `@` are reserved for referencing user IDs, such
                         * as room members. With the exception of a few events, state events set with a
                         * given user's ID as the state key MUST only be set by that user.
                         * @example "@user:example.org"
                         */
                        state_key?: string;
                        /**
                         * The type of the event.
                         * @example "m.room.member"
                         */
                        type: string;
                        /**
                         * UnsignedData
                         * Contains optional extra information about the event.
                         */
                        unsigned?: {
                            /**
                             * The time in milliseconds that has elapsed since the event was sent. This field is generated by the local homeserver, and may be incorrect if the local time on at least one of the two servers is out of sync, which can cause the age to either be negative or greater than it actually is.
                             * @format int64
                             * @example 1567437
                             */
                            age?: number;
                            /**
                             * EventContent
                             * The previous `content` for this event. This field is generated
                             * by the local homeserver, and is only returned if the event is a state event,
                             * and the client has permission to see the previous content.
                             */
                            prev_content?: object;
                            /**
                             * ClientEventWithoutRoomID
                             * The event that redacted this event, if any.
                             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
                             */
                            redacted_because?: object;
                            /**
                             * The client-supplied [transaction ID](https://spec.matrix.org/v1.5/client-server-api/#transaction-identifiers), for example, provided via
                             * `PUT /_matrix/client/v3/rooms/{roomId}/send/{eventType}/{txnId}`,
                             * if the client being given the event is the same one which sent it.
                             */
                            transaction_id?: string;
                        };
                    }[];
                    /** True if the number of events returned was limited by the `limit` on the filter. */
                    limited?: boolean;
                    /**
                     * A token that can be supplied to the `from` parameter of the [`/rooms/<room_id>/messages`](#get_matrixclientv3roomsroomidmessages) endpoint in order to retrieve earlier events.
                     * If no earlier events are available, this property may be omitted from the response.
                     */
                    prev_batch?: string;
                };
                /**
                 * Unread Notification Counts
                 * Counts of unread notifications for this room. See the
                 * [Receiving notifications](https://spec.matrix.org/v1.5/client-server-api/#receiving-notifications) section
                 * for more information on how these are calculated.
                 *
                 * If `unread_thread_notifications` was specified as `true` on the `RoomEventFilter`,
                 * these counts will only be for the main timeline rather than all events in the room.
                 * See the [threading module](#threading) for more information.
                 */
                unread_notifications?: {
                    /**
                     * Highlighted notification count
                     * The number of unread notifications for this room with the highlight flag set.
                     */
                    highlight_count?: number;
                    /**
                     * Total notification count
                     * The total number of unread notifications for this room.
                     */
                    notification_count?: number;
                };
                /**
                 * Unread Thread Notification Counts
                 * If `unread_thread_notifications` was specified as `true` on the `RoomEventFilter`,
                 * the notification counts for each [thread](#threading) in this room. The object is
                 * keyed by thread root ID, with values matching `unread_notifications`.
                 *
                 * If a thread does not have any notifications it can be omitted from this object. If
                 * no threads have notification counts, this whole object can be omitted.
                 */
                unread_thread_notifications?: Record<
                    string,
                    {
                        /**
                         * ThreadedHighlightNotificationCount
                         * The number of unread notifications for this *thread* with the highlight flag set.
                         */
                        highlight_count?: number;
                        /**
                         * ThreadedTotalNotificationCount
                         * The total number of unread notifications for this *thread*.
                         */
                        notification_count?: number;
                    }
                >;
            }
        >;
        /**
         * Knocked rooms
         * The rooms that the user has knocked upon, mapped as room ID to room information.
         */
        knock?: Record<
            string,
            {
                /**
                 * KnockState
                 * The [stripped state](#stripped-state) of a room that the user has knocked upon.
                 */
                knock_state?: {
                    /** The [stripped state events](#stripped-state) that form the knock state. */
                    events?: {
                        /**
                         * EventContent
                         * The `content` for the event.
                         */
                        content: object;
                        /** The `sender` for the event. */
                        sender: string;
                        /** The `state_key` for the event. */
                        state_key: string;
                        /** The `type` for the event. */
                        type: string;
                    }[];
                };
            }
        >;
        /**
         * Left rooms
         * The rooms that the user has left or been banned from, mapped as room ID to
         * room information.
         */
        leave?: Record<
            string,
            {
                /**
                 * Account Data
                 * The private data that this user has attached to
                 * this room.
                 */
                account_data?: {
                    /** List of events. */
                    events?: {
                        /** The fields in this object will vary depending on the type of event. When interacting with the REST API, this is the HTTP body. */
                        content: object;
                        /** The type of event. This SHOULD be namespaced similar to Java package naming conventions e.g. 'com.example.subdomain.event.type' */
                        type: string;
                    }[];
                };
                /**
                 * State
                 * The state updates for the room up to the start of the timeline.
                 */
                state?: {
                    /** List of events. */
                    events?: {
                        /**
                         * The body of this event, as created by the client which sent it.
                         * @example {"membership":"join"}
                         */
                        content: object;
                        /**
                         * The globally unique identifier for this event.
                         * @example "$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45"
                         */
                        event_id: string;
                        /**
                         * Timestamp (in milliseconds since the unix epoch) on originating homeserver
                         * when this event was sent.
                         * @format int64
                         * @example 1632489532305
                         */
                        origin_server_ts: number;
                        /**
                         * Contains the fully-qualified ID of the user who sent this event.
                         * @example "@example:example.org"
                         */
                        sender: string;
                        /**
                         * Present if, and only if, this event is a *state* event. The key making
                         * this piece of state unique in the room. Note that it is often an empty
                         * string.
                         *
                         * State keys starting with an `@` are reserved for referencing user IDs, such
                         * as room members. With the exception of a few events, state events set with a
                         * given user's ID as the state key MUST only be set by that user.
                         * @example "@user:example.org"
                         */
                        state_key?: string;
                        /**
                         * The type of the event.
                         * @example "m.room.member"
                         */
                        type: string;
                        /**
                         * UnsignedData
                         * Contains optional extra information about the event.
                         */
                        unsigned?: {
                            /**
                             * The time in milliseconds that has elapsed since the event was sent. This field is generated by the local homeserver, and may be incorrect if the local time on at least one of the two servers is out of sync, which can cause the age to either be negative or greater than it actually is.
                             * @format int64
                             * @example 1567437
                             */
                            age?: number;
                            /**
                             * EventContent
                             * The previous `content` for this event. This field is generated
                             * by the local homeserver, and is only returned if the event is a state event,
                             * and the client has permission to see the previous content.
                             */
                            prev_content?: object;
                            /**
                             * ClientEventWithoutRoomID
                             * The event that redacted this event, if any.
                             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
                             */
                            redacted_because?: object;
                            /**
                             * The client-supplied [transaction ID](https://spec.matrix.org/v1.5/client-server-api/#transaction-identifiers), for example, provided via
                             * `PUT /_matrix/client/v3/rooms/{roomId}/send/{eventType}/{txnId}`,
                             * if the client being given the event is the same one which sent it.
                             */
                            transaction_id?: string;
                        };
                    }[];
                };
                /**
                 * Timeline
                 * The timeline of messages and state changes in the
                 * room up to the point when the user left.
                 */
                timeline?: {
                    /** List of events. */
                    events: {
                        /**
                         * The body of this event, as created by the client which sent it.
                         * @example {"membership":"join"}
                         */
                        content: object;
                        /**
                         * The globally unique identifier for this event.
                         * @example "$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45"
                         */
                        event_id: string;
                        /**
                         * Timestamp (in milliseconds since the unix epoch) on originating homeserver
                         * when this event was sent.
                         * @format int64
                         * @example 1632489532305
                         */
                        origin_server_ts: number;
                        /**
                         * Contains the fully-qualified ID of the user who sent this event.
                         * @example "@example:example.org"
                         */
                        sender: string;
                        /**
                         * Present if, and only if, this event is a *state* event. The key making
                         * this piece of state unique in the room. Note that it is often an empty
                         * string.
                         *
                         * State keys starting with an `@` are reserved for referencing user IDs, such
                         * as room members. With the exception of a few events, state events set with a
                         * given user's ID as the state key MUST only be set by that user.
                         * @example "@user:example.org"
                         */
                        state_key?: string;
                        /**
                         * The type of the event.
                         * @example "m.room.member"
                         */
                        type: string;
                        /**
                         * UnsignedData
                         * Contains optional extra information about the event.
                         */
                        unsigned?: {
                            /**
                             * The time in milliseconds that has elapsed since the event was sent. This field is generated by the local homeserver, and may be incorrect if the local time on at least one of the two servers is out of sync, which can cause the age to either be negative or greater than it actually is.
                             * @format int64
                             * @example 1567437
                             */
                            age?: number;
                            /**
                             * EventContent
                             * The previous `content` for this event. This field is generated
                             * by the local homeserver, and is only returned if the event is a state event,
                             * and the client has permission to see the previous content.
                             */
                            prev_content?: object;
                            /**
                             * ClientEventWithoutRoomID
                             * The event that redacted this event, if any.
                             * @example {"content":{"reason":"spam"},"event_id":"$Nhl3rsgHMjk-DjMJANawr9HHAhLg4GcoTYrSiYYGqEE","origin_server_ts":1632491098485,"redacts":"$26RqwJMLw-yds1GAH_QxjHRC1Da9oasK0e5VLnck_45","sender":"@moderator:example.org","type":"m.room.redaction","unsigned":{"age":1257}}
                             */
                            redacted_because?: object;
                            /**
                             * The client-supplied [transaction ID](https://spec.matrix.org/v1.5/client-server-api/#transaction-identifiers), for example, provided via
                             * `PUT /_matrix/client/v3/rooms/{roomId}/send/{eventType}/{txnId}`,
                             * if the client being given the event is the same one which sent it.
                             */
                            transaction_id?: string;
                        };
                    }[];
                    /** True if the number of events returned was limited by the `limit` on the filter. */
                    limited?: boolean;
                    /**
                     * A token that can be supplied to the `from` parameter of the [`/rooms/<room_id>/messages`](#get_matrixclientv3roomsroomidmessages) endpoint in order to retrieve earlier events.
                     * If no earlier events are available, this property may be omitted from the response.
                     */
                    prev_batch?: string;
                };
            }
        >;
    };
    /**
     * ToDevice
     * Information on the send-to-device messages for the client
     * device, as defined in [Send-to-Device messaging](https://spec.matrix.org/v1.5/client-server-api/#extensions-to-sync).
     */
    to_device?: object;
}

export interface SyncParams {
    /**
     * The ID of a filter created using the filter API or a filter JSON
     * object encoded as a string. The server will detect whether it is
     * an ID or a JSON object by whether the first character is a `"{"`
     * open brace. Passing the JSON inline is best suited to one off
     * requests. Creating a filter using the filter API is recommended for
     * clients that reuse the same filter multiple times, for example in
     * long poll requests.
     *
     * See [Filtering](https://spec.matrix.org/v1.5/client-server-api/#filtering) for more information.
     * @example "66696p746572"
     */
    filter?: string;
    /**
     * A point in time to continue a sync from. This should be the
     * `next_batch` token returned by an earlier call to this endpoint.
     * @example "s72594_4483_1934"
     */
    since?: string;
    /**
     * Controls whether to include the full state for all rooms the user
     * is a member of.
     *
     * If this is set to `true`, then all state events will be returned,
     * even if `since` is non-empty. The timeline will still be limited
     * by the `since` parameter. In this case, the `timeout` parameter
     * will be ignored and the query will return immediately, possibly with
     * an empty timeline.
     *
     * If `false`, and `since` is non-empty, only state which has
     * changed since the point indicated by `since` will be returned.
     *
     * By default, this is `false`.
     * @example "false"
     */
    full_state?: boolean;
    /**
     * Controls whether the client is automatically marked as online by
     * polling this API. If this parameter is omitted then the client is
     * automatically marked as online when it uses this API. Otherwise if
     * the parameter is set to "offline" then the client is not marked as
     * being online when it uses this API. When set to "unavailable", the
     * client is marked as being idle.
     * @example "offline"
     */
    set_presence?: "offline" | "online" | "unavailable";
    /**
     * The maximum time to wait, in milliseconds, before returning this
     * request. If no events (or other data) become available before this
     * time elapses, the server will return a response with empty fields.
     *
     * By default, this is `0`, so the server will return immediately
     * even if the response is empty.
     * @example 30000
     */
    timeout?: number;
}

export type UnbanData = object;

/**
 * Error
 * A Matrix-level Error
 */
export type UnbanError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

/** @example {"reason":"They've been banned long enough","user_id":"@cheeky_monkey:matrix.org"} */
export interface UnbanPayload {
    /**
     * Optional reason to be included as the `reason` on the subsequent
     * membership event.
     */
    reason?: string;
    /** The fully qualified user ID of the user being unbanned. */
    user_id: string;
}

export interface Unbind3PidFromAccountData {
    /**
     * An indicator as to whether or not the identity server was able to unbind
     * the 3PID. `success` indicates that the identity server has unbound the
     * identifier whereas `no-support` indicates that the identity server
     * refuses to support the request or the homeserver was not able to determine
     * an identity server to unbind from.
     * @example "success"
     */
    id_server_unbind_result: "no-support" | "success";
}

export type UpdateAppserviceRoomDirectoryVisibilityData = object;

export interface UpdateAppserviceRoomDirectoryVisibilityPayload {
    /**
     * Whether the room should be visible (public) in the directory
     * or not (private).
     * @example "public"
     */
    visibility: "public" | "private";
}

export type UpdateDeviceData = object;

/** @example {"display_name":"My other phone"} */
export interface UpdateDevicePayload {
    /**
     * The new display name for this device. If not given, the
     * display name is unchanged.
     */
    display_name?: string;
}

export interface UpgradeRoomData {
    /** The ID of the new room. */
    replacement_room: string;
}

/**
 * Error Error
 * A Matrix-level Error
 * A Matrix-level Error
 */
export type UpgradeRoomError = {
    /**
     * An error code.
     * @example "M_UNKNOWN"
     */
    errcode: string;
    /**
     * A human-readable error message.
     * @example "An unknown error occurred"
     */
    error?: string;
};

/** @example {"new_version":"2"} */
export interface UpgradeRoomPayload {
    /** The new version for the room. */
    new_version: string;
}

export interface UploadContentData {
    /**
     * The [MXC URI](https://spec.matrix.org/v1.5/client-server-api/#matrix-content-mxc-uris) to the uploaded content.
     * @format uri
     */
    content_uri: string;
}

/**
 * Error Error RateLimitError
 * A Matrix-level Error
 * A Matrix-level Error
 * The rate limit was reached for this request
 */
export type UploadContentError =
    | {
          /**
           * An error code.
           * @example "M_UNKNOWN"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "An unknown error occurred"
           */
          error?: string;
      }
    | {
          /**
           * The M_LIMIT_EXCEEDED error code
           * @example "M_LIMIT_EXCEEDED"
           */
          errcode: string;
          /**
           * A human-readable error message.
           * @example "Too many requests"
           */
          error?: string;
          /**
           * The amount of time in milliseconds the client should wait
           * before trying the request again.
           * @example 2000
           */
          retry_after_ms?: number;
      };

export interface UploadContentParams {
    /**
     * The name of the file being uploaded
     * @example "War and Peace.pdf"
     */
    filename?: string;
}

/**
 * @format byte
 * @example "<bytes>"
 */
export type UploadContentPayload = string;

/** @example {} */
export type UploadCrossSigningKeysData = object;

export type UploadCrossSigningKeysError = object;

/** @example {"master_key":{"keys":{"ed25519:base64+master+public+key":"base64+master+public+key"},"usage":["master"],"user_id":"@alice:example.com"},"self_signing_key":{"keys":{"ed25519:base64+self+signing+public+key":"base64+self+signing+master+public+key"},"signatures":{"@alice:example.com":{"ed25519:base64+master+public+key":"signature+of+self+signing+key"}},"usage":["self_signing"],"user_id":"@alice:example.com"},"user_signing_key":{"keys":{"ed25519:base64+user+signing+public+key":"base64+user+signing+master+public+key"},"signatures":{"@alice:example.com":{"ed25519:base64+master+public+key":"signature+of+user+signing+key"}},"usage":["user_signing"],"user_id":"@alice:example.com"}} */
export interface UploadCrossSigningKeysPayload {
    /**
     * Additional authentication information for the
     * user-interactive authentication API.
     */
    auth?: {
        /** The value of the session key given by the homeserver. */
        session?: string;
        /**
         * The authentication type that the client is attempting to complete.
         * May be omitted if `session` is given, and the client is reissuing a
         * request which it believes has been completed out-of-band (for example,
         * via the [fallback mechanism](#fallback)).
         */
        type?: string;
        [key: string]: any;
    };
    /** Optional. The user\'s master key. */
    master_key?: {
        /**
         * The public key.  The object must have exactly one property, whose name is
         * in the form `<algorithm>:<unpadded_base64_public_key>`, and whose value
         * is the unpadded base64 public key.
         * @example {"ed25519:alice+base64+public+key":"alice+base64+public+key"}
         */
        keys: Record<string, string>;
        /**
         * Signatures
         * Signatures of the key, calculated using the process described at [Signing JSON](https://spec.matrix.org/v1.5/appendices/#signing-json).
         * Optional for the master key. Other keys must be signed by the
         * user\'s master key.
         * @example {"@alice:example.com":{"ed25519:alice+base64+master+key":"signature+of+key"}}
         */
        signatures?: object;
        /** What the key is used for. */
        usage: ("master" | "self_signing" | "user_signing")[];
        /**
         * The ID of the user the key belongs to.
         * @example "@alice:example.com"
         */
        user_id: string;
    };
    /**
     * Optional. The user\'s self-signing key. Must be signed by
     * the accompanying master key, or by the user\'s most recently
     * uploaded master key if no master key is included in the
     * request.
     */
    self_signing_key?: {
        /**
         * The public key.  The object must have exactly one property, whose name is
         * in the form `<algorithm>:<unpadded_base64_public_key>`, and whose value
         * is the unpadded base64 public key.
         * @example {"ed25519:alice+base64+public+key":"alice+base64+public+key"}
         */
        keys: Record<string, string>;
        /**
         * Signatures
         * Signatures of the key, calculated using the process described at [Signing JSON](https://spec.matrix.org/v1.5/appendices/#signing-json).
         * Optional for the master key. Other keys must be signed by the
         * user\'s master key.
         * @example {"@alice:example.com":{"ed25519:alice+base64+master+key":"signature+of+key"}}
         */
        signatures?: object;
        /** What the key is used for. */
        usage: ("master" | "self_signing" | "user_signing")[];
        /**
         * The ID of the user the key belongs to.
         * @example "@alice:example.com"
         */
        user_id: string;
    };
    /**
     * Optional. The user\'s user-signing key. Must be signed by
     * the accompanying master key, or by the user\'s most recently
     * uploaded master key if no master key is included in the
     * request.
     */
    user_signing_key?: {
        /**
         * The public key.  The object must have exactly one property, whose name is
         * in the form `<algorithm>:<unpadded_base64_public_key>`, and whose value
         * is the unpadded base64 public key.
         * @example {"ed25519:alice+base64+public+key":"alice+base64+public+key"}
         */
        keys: Record<string, string>;
        /**
         * Signatures
         * Signatures of the key, calculated using the process described at [Signing JSON](https://spec.matrix.org/v1.5/appendices/#signing-json).
         * Optional for the master key. Other keys must be signed by the
         * user\'s master key.
         * @example {"@alice:example.com":{"ed25519:alice+base64+master+key":"signature+of+key"}}
         */
        signatures?: object;
        /** What the key is used for. */
        usage: ("master" | "self_signing" | "user_signing")[];
        /**
         * The ID of the user the key belongs to.
         * @example "@alice:example.com"
         */
        user_id: string;
    };
}

export interface UploadCrossSigningSignaturesData {
    /**
     * A map from user ID to key ID to an error for any signatures
     * that failed.  If a signature was invalid, the `errcode` will
     * be set to `M_INVALID_SIGNATURE`.
     * @example {"@alice:example.com":{"HIJKLMN":{"errcode":"M_INVALID_SIGNATURE","error":"Invalid signature"}}}
     */
    failures?: Record<string, Record<string, object>>;
}

/**
 * Signatures
 * @example {"@alice:example.com":{"HIJKLMN":{"algorithms":["m.olm.v1.curve25519-aes-sha256","m.megolm.v1.aes-sha"],"device_id":"HIJKLMN","keys":{"curve25519:HIJKLMN":"base64+curve25519+key","ed25519:HIJKLMN":"base64+ed25519+key"},"signatures":{"@alice:example.com":{"ed25519:base64+self+signing+public+key":"base64+signature+of+HIJKLMN"}},"user_id":"@alice:example.com"},"base64+master+public+key":{"keys":{"ed25519:base64+master+public+key":"base64+master+public+key"},"signatures":{"@alice:example.com":{"ed25519:HIJKLMN":"base64+signature+of+master+key"}},"usage":["master"],"user_id":"@alice:example.com"}},"@bob:example.com":{"bobs+base64+master+public+key":{"keys":{"ed25519:bobs+base64+master+public+key":"bobs+base64+master+public+key"},"signatures":{"@alice:example.com":{"ed25519:base64+user+signing+public+key":"base64+signature+of+bobs+master+key"}},"usage":["master"],"user_id":"@bob:example.com"}}}
 */
export type UploadCrossSigningSignaturesPayload = Record<string, Record<string, object>>;

export interface UploadKeysData {
    /**
     * For each key algorithm, the number of unclaimed one-time keys
     * of that type currently held on the server for this device.
     * If an algorithm is not listed, the count for that algorithm
     * is to be assumed zero.
     * @example {"curve25519":10,"signed_curve25519":20}
     */
    one_time_key_counts: Record<string, number>;
}

export interface UploadKeysPayload {
    /**
     * Identity keys for the device. May be absent if no new
     * identity keys are required.
     */
    device_keys?: {
        /**
         * The encryption algorithms supported by this device.
         * @example ["m.olm.v1.curve25519-aes-sha2","m.megolm.v1.aes-sha2"]
         */
        algorithms: string[];
        /**
         * The ID of the device these keys belong to. Must match the device ID used
         * when logging in.
         * @example "JLAFKJWSCS"
         */
        device_id: string;
        /**
         * Public identity keys. The names of the properties should be in the
         * format `<algorithm>:<device_id>`. The keys themselves should be
         * encoded as specified by the key algorithm.
         * @example {"curve25519:JLAFKJWSCS":"3C5BFWi2Y8MaVvjM8M22DBmh24PmgR0nPvJOIArzgyI","ed25519:JLAFKJWSCS":"lEuiRJBit0IG6nUf5pUzWTUEsRVVe/HJkoKuEww9ULI"}
         */
        keys: Record<string, string>;
        /**
         * Signatures
         * Signatures for the device key object. A map from user ID, to a map from
         * `<algorithm>:<device_id>` to the signature.
         *
         * The signature is calculated using the process described at [Signing JSON](https://spec.matrix.org/v1.5/appendices/#signing-json).
         * @example {"@alice:example.com":{"ed25519:JLAFKJWSCS":"dSO80A01XiigH3uBiDVx/EjzaoycHcjq9lfQX0uWsqxl2giMIiSPR8a4d291W1ihKJL/a+myXS367WT6NAIcBA"}}
         */
        signatures: Record<string, Record<string, string>>;
        /**
         * The ID of the user the device belongs to. Must match the user ID used
         * when logging in.
         * @example "@alice:example.com"
         */
        user_id: string;
    };
    /**
     * OneTimeKeys
     * The public key which should be used if the device's one-time keys
     * are exhausted. The fallback key is not deleted once used, but should
     * be replaced when additional one-time keys are being uploaded. The
     * server will notify the client of the fallback key being used through
     * `/sync`.
     *
     * There can only be at most one key per algorithm uploaded, and the server
     * will only persist one key per algorithm.
     *
     * When uploading a signed key, an additional `fallback: true` key should
     * be included to denote that the key is a fallback key.
     *
     * May be absent if a new fallback key is not required.
     * @example {"curve25519:AAAAAG":"/qyvZvwjiTxGdGU0RCguDCLeR+nmsb3FfNG3/Ve4vU8","signed_curve25519:AAAAGj":{"fallback":true,"key":"zKbLg+NrIjpnagy+pIY6uPL4ZwEG2v+8F9lmgsnlZzs","signatures":{"@alice:example.com":{"ed25519:JLAFKJWSCS":"FLWxXqGbwrb8SM3Y795eB6OA8bwBcoMZFXBqnTn58AYWZSqiD45tlBVcDa2L7RwdKXebW/VzDlnfVJ+9jok1Bw"}}}}
     */
    fallback_keys?: object;
    /**
     * OneTimeKeys
     * One-time public keys for "pre-key" messages.  The names of
     * the properties should be in the format
     * `<algorithm>:<key_id>`. The format of the key is determined
     * by the [key algorithm](https://spec.matrix.org/v1.5/client-server-api/#key-algorithms).
     *
     * May be absent if no new one-time keys are required.
     * @example {"curve25519:AAAAAQ":"/qyvZvwjiTxGdGU0RCguDCLeR+nmsb3FfNG3/Ve4vU8","signed_curve25519:AAAAHQ":{"key":"j3fR3HemM16M7CWhoI4Sk5ZsdmdfQHsKL1xuSft6MSw","signatures":{"@alice:example.com":{"ed25519:JLAFKJWSCS":"IQeCEPb9HFk217cU9kw9EOiusC6kMIkoIRnbnfOh5Oc63S1ghgyjShBGpu34blQomoalCyXWyhaaT3MrLZYQAA"}}},"signed_curve25519:AAAAHg":{"key":"zKbLg+NrIjpnagy+pIY6uPL4ZwEG2v+8F9lmgsnlZzs","signatures":{"@alice:example.com":{"ed25519:JLAFKJWSCS":"FLWxXqGbwrb8SM3Y795eB6OA8bwBcoMZFXBqnTn58AYWZSqiD45tlBVcDa2L7RwdKXebW/VzDlnfVJ+9jok1Bw"}}}}
     */
    one_time_keys?: object;
}

export namespace WellKnown {
    /**
     * @description Gets discovery information about the domain. The file may include additional keys, which MUST follow the Java package naming convention, e.g. `com.example.myapp.property`. This ensures property names are suitably namespaced for each application and reduces the risk of clashes. Note that this endpoint is not necessarily handled by the homeserver, but by another webserver, to be used for discovering the homeserver URL.
     * @tags Server administration
     * @name GetWellknown
     * @summary Gets Matrix server discovery information about the domain.
     * @request GET:/.well-known/matrix/client
     */
    export namespace GetWellknown {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetWellknownData;
    }
}

export namespace Matrix {
    /**
     * @description Queries the server to determine if a given registration token is still valid at the time of request. This is a point-in-time check where the token might still expire by the time it is used. Servers should be sure to rate limit this endpoint to avoid brute force attacks.
     * @tags Account management
     * @name RegistrationTokenValidity
     * @summary Query if a given registration token is still valid.
     * @request GET:/_matrix/client/v1/register/m.login.registration_token/validity
     */
    export namespace RegistrationTokenValidity {
        export type RequestParams = {};
        export type RequestQuery = {
            /**
             * The token to check validity of.
             * @example "fBVFdqVE"
             */
            token: string;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = RegistrationTokenValidityData;
    }
    /**
     * @description Paginates over the space tree in a depth-first manner to locate child rooms of a given space. Where a child room is unknown to the local server, federation is used to fill in the details. The servers listed in the `via` array should be contacted to attempt to fill in missing rooms. Only [`m.space.child`](#mspacechild) state events of the room are considered. Invalid child rooms and parent events are not covered by this endpoint.
     * @tags Spaces
     * @name GetSpaceHierarchy
     * @summary Retrieve a portion of a space tree.
     * @request GET:/_matrix/client/v1/rooms/{roomId}/hierarchy
     * @secure
     */
    export namespace GetSpaceHierarchy {
        export type RequestParams = {
            /**
             * The room ID of the space to get a hierarchy for.
             * @example "!space:example.org"
             */
            roomId: string;
        };
        export type RequestQuery = {
            /**
             * Optional (default `false`) flag to indicate whether or not the server should only consider
             * suggested rooms. Suggested rooms are annotated in their [`m.space.child`](#mspacechild) event
             * contents.
             * @example true
             */
            suggested_only?: boolean;
            /**
             * Optional limit for the maximum number of rooms to include per response. Must be an integer
             * greater than zero.
             *
             * Servers should apply a default value, and impose a maximum value to avoid resource exhaustion.
             * @example 20
             */
            limit?: number;
            /**
             * Optional limit for how far to go into the space. Must be a non-negative integer.
             *
             * When reached, no further child rooms will be returned.
             *
             * Servers should apply a default value, and impose a maximum value to avoid resource exhaustion.
             * @example 5
             */
            max_depth?: number;
            /**
             * A pagination token from a previous result. If specified, `max_depth` and `suggested_only` cannot
             * be changed from the first request.
             * @example "next_batch_token"
             */
            from?: string;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetSpaceHierarchyData;
    }
    /**
     * @description Retrieve all of the child events for a given parent event. Note that when paginating the `from` token should be "after" the `to` token in terms of topological ordering, because it is only possible to paginate "backwards" through events, starting at `from`. For example, passing a `from` token from page 2 of the results, and a `to` token from page 1, would return the empty set. The caller can use a `from` token from page 1 and a `to` token from page 2 to paginate over the same range, however.
     * @tags Event relationships
     * @name GetRelatingEvents
     * @summary Get the child events for a given parent event.
     * @request GET:/_matrix/client/v1/rooms/{roomId}/relations/{eventId}
     * @secure
     */
    export namespace GetRelatingEvents {
        export type RequestParams = {
            /**
             * The ID of the room containing the parent event.
             * @example "!636q39766251:matrix.org"
             */
            roomId: string;
            /**
             * The ID of the parent event whose child events are to be returned.
             * @example "$asfDuShaf7Gafaw"
             */
            eventId: string;
        };
        export type RequestQuery = {
            /**
             * The pagination token to start returning results from. If not supplied, results
             * start at the most recent topological event known to the server.
             *
             * Can be a `next_batch` or `prev_batch` token from a previous call, or a returned
             * `start` token from [`/messages`](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3roomsroomidmessages),
             * or a `next_batch` token from [`/sync`](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3sync).
             * @example "page2_token"
             */
            from?: string;
            /**
             * The pagination token to stop returning results at. If not supplied, results
             * continue up to `limit` or until there are no more events.
             *
             * Like `from`, this can be a previous token from a prior call to this endpoint
             * or from `/messages` or `/sync`.
             * @example "page3_token"
             */
            to?: string;
            /**
             * The maximum number of results to return in a single `chunk`. The server can
             * and should apply a maximum value to this parameter to avoid large responses.
             *
             * Similarly, the server should apply a default value when not supplied.
             * @example 20
             */
            limit?: number;
            /**
             * Optional (default `b`) direction to return events from. If this is set to `f`, events
             * will be returned in chronological order starting at `from`. If it
             * is set to `b`, events will be returned in *reverse* chronological
             * order, again starting at `from`.
             */
            dir?: "b" | "f";
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetRelatingEventsData;
    }
    /**
     * @description Retrieve all of the child events for a given parent event which relate to the parent using the given `relType`. Note that when paginating the `from` token should be "after" the `to` token in terms of topological ordering, because it is only possible to paginate "backwards" through events, starting at `from`. For example, passing a `from` token from page 2 of the results, and a `to` token from page 1, would return the empty set. The caller can use a `from` token from page 1 and a `to` token from page 2 to paginate over the same range, however.
     * @tags Event relationships
     * @name GetRelatingEventsWithRelType
     * @summary Get the child events for a given parent event, with a given `relType`.
     * @request GET:/_matrix/client/v1/rooms/{roomId}/relations/{eventId}/{relType}
     * @secure
     */
    export namespace GetRelatingEventsWithRelType {
        export type RequestParams = {
            /**
             * The ID of the room containing the parent event.
             * @example "!636q39766251:matrix.org"
             */
            roomId: string;
            /**
             * The ID of the parent event whose child events are to be returned.
             * @example "$asfDuShaf7Gafaw"
             */
            eventId: string;
            /**
             * The [relationship type](https://spec.matrix.org/v1.5/client-server-api/#relationship-types) to search for.
             * @example "org.example.my_relation"
             */
            relType: string;
        };
        export type RequestQuery = {
            /**
             * The pagination token to start returning results from. If not supplied, results
             * start at the most recent topological event known to the server.
             *
             * Can be a `next_batch` or `prev_batch` token from a previous call, or a returned
             * `start` token from [`/messages`](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3roomsroomidmessages),
             * or a `next_batch` token from [`/sync`](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3sync).
             * @example "page2_token"
             */
            from?: string;
            /**
             * The pagination token to stop returning results at. If not supplied, results
             * continue up to `limit` or until there are no more events.
             *
             * Like `from`, this can be a previous token from a prior call to this endpoint
             * or from `/messages` or `/sync`.
             * @example "page3_token"
             */
            to?: string;
            /**
             * The maximum number of results to return in a single `chunk`. The server can
             * and should apply a maximum value to this parameter to avoid large responses.
             *
             * Similarly, the server should apply a default value when not supplied.
             * @example 20
             */
            limit?: number;
            /**
             * Optional (default `b`) direction to return events from. If this is set to `f`, events
             * will be returned in chronological order starting at `from`. If it
             * is set to `b`, events will be returned in *reverse* chronological
             * order, again starting at `from`.
             */
            dir?: "b" | "f";
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetRelatingEventsWithRelTypeData;
    }
    /**
     * @description Retrieve all of the child events for a given parent event which relate to the parent using the given `relType` and have the given `eventType`. Note that when paginating the `from` token should be "after" the `to` token in terms of topological ordering, because it is only possible to paginate "backwards" through events, starting at `from`. For example, passing a `from` token from page 2 of the results, and a `to` token from page 1, would return the empty set. The caller can use a `from` token from page 1 and a `to` token from page 2 to paginate over the same range, however.
     * @tags Event relationships
     * @name GetRelatingEventsWithRelTypeAndEventType
     * @summary Get the child events for a given parent event, with a given `relType` and `eventType`.
     * @request GET:/_matrix/client/v1/rooms/{roomId}/relations/{eventId}/{relType}/{eventType}
     * @secure
     */
    export namespace GetRelatingEventsWithRelTypeAndEventType {
        export type RequestParams = {
            /**
             * The ID of the room containing the parent event.
             * @example "!636q39766251:matrix.org"
             */
            roomId: string;
            /**
             * The ID of the parent event whose child events are to be returned.
             * @example "$asfDuShaf7Gafaw"
             */
            eventId: string;
            /**
             * The [relationship type](https://spec.matrix.org/v1.5/client-server-api/#relationship-types) to search for.
             * @example "org.example.my_relation"
             */
            relType: string;
            /**
             * The event type of child events to search for.
             *
             * Note that in encrypted rooms this will typically always be `m.room.encrypted`
             * regardless of the event type contained within the encrypted payload.
             * @example "m.room.message"
             */
            eventType: string;
        };
        export type RequestQuery = {
            /**
             * The pagination token to start returning results from. If not supplied, results
             * start at the most recent topological event known to the server.
             *
             * Can be a `next_batch` or `prev_batch` token from a previous call, or a returned
             * `start` token from [`/messages`](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3roomsroomidmessages),
             * or a `next_batch` token from [`/sync`](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3sync).
             * @example "page2_token"
             */
            from?: string;
            /**
             * The pagination token to stop returning results at. If not supplied, results
             * continue up to `limit` or until there are no more events.
             *
             * Like `from`, this can be a previous token from a prior call to this endpoint
             * or from `/messages` or `/sync`.
             * @example "page3_token"
             */
            to?: string;
            /**
             * The maximum number of results to return in a single `chunk`. The server can
             * and should apply a maximum value to this parameter to avoid large responses.
             *
             * Similarly, the server should apply a default value when not supplied.
             * @example 20
             */
            limit?: number;
            /**
             * Optional (default `b`) direction to return events from. If this is set to `f`, events
             * will be returned in chronological order starting at `from`. If it
             * is set to `b`, events will be returned in *reverse* chronological
             * order, again starting at `from`.
             */
            dir?: "b" | "f";
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetRelatingEventsWithRelTypeAndEventTypeData;
    }
    /**
     * @description Paginates over the thread roots in a room, ordered by the `latest_event` of each thread root in its bundle.
     * @tags Threads
     * @name GetThreadRoots
     * @summary Retrieve a list of threads in a room, with optional filters.
     * @request GET:/_matrix/client/v1/rooms/{roomId}/threads
     * @secure
     */
    export namespace GetThreadRoots {
        export type RequestParams = {
            /**
             * The room ID where the thread roots are located.
             * @example "!room:example.org"
             */
            roomId: string;
        };
        export type RequestQuery = {
            /**
             * Optional (default `all`) flag to denote which thread roots are of interest to the caller.
             * When `all`, all thread roots found in the room are returned. When `participated`, only
             * thread roots for threads the user has [participated in](https://spec.matrix.org/v1.5/client-server-api/#server-side-aggregation-of-mthread-relationships)
             * will be returned.
             * @example "all"
             */
            include?: "all" | "participated";
            /**
             * Optional limit for the maximum number of thread roots to include per response. Must be an integer
             * greater than zero.
             *
             * Servers should apply a default value, and impose a maximum value to avoid resource exhaustion.
             * @example 20
             */
            limit?: number;
            /**
             * A pagination token from a previous result. When not provided, the server starts paginating from
             * the most recent event visible to the user (as per history visibility rules; topologically).
             * @example "next_batch_token"
             */
            from?: string;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetThreadRootsData;
    }
    /**
     * @description Gets a list of the third party identifiers that the homeserver has associated with the user's account. This is *not* the same as the list of third party identifiers bound to the user's Matrix ID in identity servers. Identifiers in this list may be used by the homeserver as, for example, identifiers that it will accept to reset the user's account password.
     * @tags Account management
     * @name GetAccount3PiDs
     * @summary Gets a list of a user's third party identifiers.
     * @request GET:/_matrix/client/v3/account/3pid
     * @secure
     */
    export namespace GetAccount3PiDs {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetAccount3PiDsData;
    }
    /**
     * @description Adds contact information to the user's account. This endpoint is deprecated in favour of the more specific `/3pid/add` and `/3pid/bind` endpoints. **Note:** Previously this endpoint supported a `bind` parameter. This parameter has been removed, making this endpoint behave as though it was `false`. This results in this endpoint being an equivalent to `/3pid/bind` rather than dual-purpose.
     * @tags Account management
     * @name Post3PiDs
     * @summary Adds contact information to the user's account.
     * @request POST:/_matrix/client/v3/account/3pid
     * @deprecated
     * @secure
     */
    export namespace Post3PiDs {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = Post3PiDsPayload;
        export type RequestHeaders = {};
        export type ResponseBody = Post3PiDsData;
    }
    /**
     * @description This API endpoint uses the [User-Interactive Authentication API](https://spec.matrix.org/v1.5/client-server-api/#user-interactive-authentication-api). Adds contact information to the user's account. Homeservers should use 3PIDs added through this endpoint for password resets instead of relying on the identity server. Homeservers should prevent the caller from adding a 3PID to their account if it has already been added to another user's account on the homeserver.
     * @tags Account management
     * @name Add3Pid
     * @summary Adds contact information to the user's account.
     * @request POST:/_matrix/client/v3/account/3pid/add
     * @secure
     */
    export namespace Add3Pid {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = Add3PidPayload;
        export type RequestHeaders = {};
        export type ResponseBody = Add3PidData;
    }
    /**
     * @description Binds a 3PID to the user's account through the specified identity server. Homeservers should not prevent this request from succeeding if another user has bound the 3PID. Homeservers should simply proxy any errors received by the identity server to the caller. Homeservers should track successful binds so they can be unbound later.
     * @tags Account management
     * @name Bind3Pid
     * @summary Binds a 3PID to the user's account through an Identity Service.
     * @request POST:/_matrix/client/v3/account/3pid/bind
     * @secure
     */
    export namespace Bind3Pid {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = Bind3PidPayload;
        export type RequestHeaders = {};
        export type ResponseBody = Bind3PidData;
    }
    /**
     * @description Removes a third party identifier from the user's account. This might not cause an unbind of the identifier from the identity server. Unlike other endpoints, this endpoint does not take an `id_access_token` parameter because the homeserver is expected to sign the request to the identity server instead.
     * @tags Account management
     * @name Delete3PidFromAccount
     * @summary Deletes a third party identifier from the user's account
     * @request POST:/_matrix/client/v3/account/3pid/delete
     * @secure
     */
    export namespace Delete3PidFromAccount {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = {
            /**
             * The third party address being removed.
             * @example "example@example.org"
             */
            address: string;
            /**
             * The identity server to unbind from. If not provided, the homeserver
             * MUST use the `id_server` the identifier was added through. If the
             * homeserver does not know the original `id_server`, it MUST return
             * a `id_server_unbind_result` of `no-support`.
             * @example "example.org"
             */
            id_server?: string;
            /**
             * The medium of the third party identifier being removed.
             * @example "email"
             */
            medium: "email" | "msisdn";
        };
        export type RequestHeaders = {};
        export type ResponseBody = Delete3PidFromAccountData;
    }
    /**
     * @description The homeserver must check that the given email address is **not** already associated with an account on this homeserver. This API should be used to request validation tokens when adding an email address to an account. This API's parameters and response are identical to that of the [`/register/email/requestToken`](https://spec.matrix.org/v1.5/client-server-api/#post_matrixclientv3registeremailrequesttoken) endpoint. The homeserver should validate the email itself, either by sending a validation email itself or by using a service it has control over.
     * @tags Account management
     * @name RequestTokenTo3PidEmail
     * @summary Begins the validation process for an email address for association with the user's account.
     * @request POST:/_matrix/client/v3/account/3pid/email/requestToken
     */
    export namespace RequestTokenTo3PidEmail {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = {
            /**
             * A unique string generated by the client, and used to identify the
             * validation attempt. It must be a string consisting of the characters
             * `[0-9a-zA-Z.=_-]`. Its length must not exceed 255 characters and it
             * must not be empty.
             * @example "monkeys_are_GREAT"
             */
            client_secret: string;
            /**
             * The email address to validate.
             * @example "alice@example.org"
             */
            email: string;
            /**
             * Optional. When the validation is completed, the identity server will
             * redirect the user to this URL. This option is ignored when submitting
             * 3PID validation information through a POST request.
             * @example "https://example.org/congratulations.html"
             */
            next_link?: string;
            /**
             * The server will only send an email if the `send_attempt`
             * is a number greater than the most recent one which it has seen,
             * scoped to that `email` + `client_secret` pair. This is to
             * avoid repeatedly sending the same email in the case of request
             * retries between the POSTing user and the identity server.
             * The client should increment this value if they desire a new
             * email (e.g. a reminder) to be sent. If they do not, the server
             * should respond with success but not resend the email.
             * @example 1
             */
            send_attempt: number;
        } & {
            /**
             * An access token previously registered with the identity server. Servers
             * can treat this as optional to distinguish between r0.5-compatible clients
             * and this specification version.
             *
             * Required if an `id_server` is supplied.
             */
            id_access_token?: string;
            /**
             * The hostname of the identity server to communicate with. May optionally
             * include a port. This parameter is ignored when the homeserver handles
             * 3PID verification.
             *
             * This parameter is deprecated with a plan to be removed in a future specification
             * version for `/account/password` and `/register` requests.
             * @example "id.example.com"
             */
            id_server?: string;
        };
        export type RequestHeaders = {};
        export type ResponseBody = RequestTokenTo3PidEmailData;
    }
    /**
     * @description The homeserver must check that the given phone number is **not** already associated with an account on this homeserver. This API should be used to request validation tokens when adding a phone number to an account. This API's parameters and response are identical to that of the [`/register/msisdn/requestToken`](https://spec.matrix.org/v1.5/client-server-api/#post_matrixclientv3registermsisdnrequesttoken) endpoint. The homeserver should validate the phone number itself, either by sending a validation message itself or by using a service it has control over.
     * @tags Account management
     * @name RequestTokenTo3Pidmsisdn
     * @summary Begins the validation process for a phone number for association with the user's account.
     * @request POST:/_matrix/client/v3/account/3pid/msisdn/requestToken
     */
    export namespace RequestTokenTo3Pidmsisdn {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = {
            /**
             * A unique string generated by the client, and used to identify the
             * validation attempt. It must be a string consisting of the characters
             * `[0-9a-zA-Z.=_-]`. Its length must not exceed 255 characters and it
             * must not be empty.
             * @example "monkeys_are_GREAT"
             */
            client_secret: string;
            /**
             * The two-letter uppercase ISO-3166-1 alpha-2 country code that the
             * number in `phone_number` should be parsed as if it were dialled from.
             * @example "GB"
             */
            country: string;
            /**
             * Optional. When the validation is completed, the identity server will
             * redirect the user to this URL. This option is ignored when submitting
             * 3PID validation information through a POST request.
             * @example "https://example.org/congratulations.html"
             */
            next_link?: string;
            /**
             * The phone number to validate.
             * @example "07700900001"
             */
            phone_number: string;
            /**
             * The server will only send an SMS if the `send_attempt` is a
             * number greater than the most recent one which it has seen,
             * scoped to that `country` + `phone_number` + `client_secret`
             * triple. This is to avoid repeatedly sending the same SMS in
             * the case of request retries between the POSTing user and the
             * identity server. The client should increment this value if
             * they desire a new SMS (e.g. a reminder) to be sent.
             * @example 1
             */
            send_attempt: number;
        } & {
            /**
             * An access token previously registered with the identity server. Servers
             * can treat this as optional to distinguish between r0.5-compatible clients
             * and this specification version.
             *
             * Required if an `id_server` is supplied.
             */
            id_access_token?: string;
            /**
             * The hostname of the identity server to communicate with. May optionally
             * include a port. This parameter is ignored when the homeserver handles
             * 3PID verification.
             *
             * This parameter is deprecated with a plan to be removed in a future specification
             * version for `/account/password` and `/register` requests.
             * @example "id.example.com"
             */
            id_server?: string;
        };
        export type RequestHeaders = {};
        export type ResponseBody = RequestTokenTo3PidmsisdnData;
    }
    /**
     * @description Removes a user's third party identifier from the provided identity server without removing it from the homeserver. Unlike other endpoints, this endpoint does not take an `id_access_token` parameter because the homeserver is expected to sign the request to the identity server instead.
     * @tags Account management
     * @name Unbind3PidFromAccount
     * @summary Removes a user's third party identifier from an identity server.
     * @request POST:/_matrix/client/v3/account/3pid/unbind
     * @secure
     */
    export namespace Unbind3PidFromAccount {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = {
            /**
             * The third party address being removed.
             * @example "example@example.org"
             */
            address: string;
            /**
             * The identity server to unbind from. If not provided, the homeserver
             * MUST use the `id_server` the identifier was added through. If the
             * homeserver does not know the original `id_server`, it MUST return
             * a `id_server_unbind_result` of `no-support`.
             * @example "example.org"
             */
            id_server?: string;
            /**
             * The medium of the third party identifier being removed.
             * @example "email"
             */
            medium: "email" | "msisdn";
        };
        export type RequestHeaders = {};
        export type ResponseBody = Unbind3PidFromAccountData;
    }
    /**
     * @description Deactivate the user's account, removing all ability for the user to login again. This API endpoint uses the [User-Interactive Authentication API](https://spec.matrix.org/v1.5/client-server-api/#user-interactive-authentication-api). An access token should be submitted to this endpoint if the client has an active session. The homeserver may change the flows available depending on whether a valid access token is provided. Unlike other endpoints, this endpoint does not take an `id_access_token` parameter because the homeserver is expected to sign the request to the identity server instead.
     * @tags Account management
     * @name DeactivateAccount
     * @summary Deactivate a user's account.
     * @request POST:/_matrix/client/v3/account/deactivate
     * @secure
     */
    export namespace DeactivateAccount {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = DeactivateAccountPayload;
        export type RequestHeaders = {};
        export type ResponseBody = DeactivateAccountData;
    }
    /**
     * @description Changes the password for an account on this homeserver. This API endpoint uses the [User-Interactive Authentication API](https://spec.matrix.org/v1.5/client-server-api/#user-interactive-authentication-api) to ensure the user changing the password is actually the owner of the account. An access token should be submitted to this endpoint if the client has an active session. The homeserver may change the flows available depending on whether a valid access token is provided. The homeserver SHOULD NOT revoke the access token provided in the request. Whether other access tokens for the user are revoked depends on the request parameters.
     * @tags Account management
     * @name ChangePassword
     * @summary Changes a user's password.
     * @request POST:/_matrix/client/v3/account/password
     * @secure
     */
    export namespace ChangePassword {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = ChangePasswordPayload;
        export type RequestHeaders = {};
        export type ResponseBody = ChangePasswordData;
    }
    /**
     * @description The homeserver must check that the given email address **is associated** with an account on this homeserver. This API should be used to request validation tokens when authenticating for the `/account/password` endpoint. This API's parameters and response are identical to that of the [`/register/email/requestToken`](https://spec.matrix.org/v1.5/client-server-api/#post_matrixclientv3registeremailrequesttoken) endpoint, except that `M_THREEPID_NOT_FOUND` may be returned if no account matching the given email address could be found. The server may instead send an email to the given address prompting the user to create an account. `M_THREEPID_IN_USE` may not be returned. The homeserver should validate the email itself, either by sending a validation email itself or by using a service it has control over.
     * @tags Account management
     * @name RequestTokenToResetPasswordEmail
     * @summary Requests a validation token be sent to the given email address for the purpose of resetting a user's password
     * @request POST:/_matrix/client/v3/account/password/email/requestToken
     */
    export namespace RequestTokenToResetPasswordEmail {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = {
            /**
             * A unique string generated by the client, and used to identify the
             * validation attempt. It must be a string consisting of the characters
             * `[0-9a-zA-Z.=_-]`. Its length must not exceed 255 characters and it
             * must not be empty.
             * @example "monkeys_are_GREAT"
             */
            client_secret: string;
            /**
             * The email address to validate.
             * @example "alice@example.org"
             */
            email: string;
            /**
             * Optional. When the validation is completed, the identity server will
             * redirect the user to this URL. This option is ignored when submitting
             * 3PID validation information through a POST request.
             * @example "https://example.org/congratulations.html"
             */
            next_link?: string;
            /**
             * The server will only send an email if the `send_attempt`
             * is a number greater than the most recent one which it has seen,
             * scoped to that `email` + `client_secret` pair. This is to
             * avoid repeatedly sending the same email in the case of request
             * retries between the POSTing user and the identity server.
             * The client should increment this value if they desire a new
             * email (e.g. a reminder) to be sent. If they do not, the server
             * should respond with success but not resend the email.
             * @example 1
             */
            send_attempt: number;
        } & {
            /**
             * An access token previously registered with the identity server. Servers
             * can treat this as optional to distinguish between r0.5-compatible clients
             * and this specification version.
             *
             * Required if an `id_server` is supplied.
             */
            id_access_token?: string;
            /**
             * The hostname of the identity server to communicate with. May optionally
             * include a port. This parameter is ignored when the homeserver handles
             * 3PID verification.
             *
             * This parameter is deprecated with a plan to be removed in a future specification
             * version for `/account/password` and `/register` requests.
             * @example "id.example.com"
             */
            id_server?: string;
        };
        export type RequestHeaders = {};
        export type ResponseBody = RequestTokenToResetPasswordEmailData;
    }
    /**
     * @description The homeserver must check that the given phone number **is associated** with an account on this homeserver. This API should be used to request validation tokens when authenticating for the `/account/password` endpoint. This API's parameters and response are identical to that of the [`/register/msisdn/requestToken`](https://spec.matrix.org/v1.5/client-server-api/#post_matrixclientv3registermsisdnrequesttoken) endpoint, except that `M_THREEPID_NOT_FOUND` may be returned if no account matching the given phone number could be found. The server may instead send the SMS to the given phone number prompting the user to create an account. `M_THREEPID_IN_USE` may not be returned. The homeserver should validate the phone number itself, either by sending a validation message itself or by using a service it has control over.
     * @tags Account management
     * @name RequestTokenToResetPasswordMsisdn
     * @summary Requests a validation token be sent to the given phone number for the purpose of resetting a user's password.
     * @request POST:/_matrix/client/v3/account/password/msisdn/requestToken
     */
    export namespace RequestTokenToResetPasswordMsisdn {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = {
            /**
             * A unique string generated by the client, and used to identify the
             * validation attempt. It must be a string consisting of the characters
             * `[0-9a-zA-Z.=_-]`. Its length must not exceed 255 characters and it
             * must not be empty.
             * @example "monkeys_are_GREAT"
             */
            client_secret: string;
            /**
             * The two-letter uppercase ISO-3166-1 alpha-2 country code that the
             * number in `phone_number` should be parsed as if it were dialled from.
             * @example "GB"
             */
            country: string;
            /**
             * Optional. When the validation is completed, the identity server will
             * redirect the user to this URL. This option is ignored when submitting
             * 3PID validation information through a POST request.
             * @example "https://example.org/congratulations.html"
             */
            next_link?: string;
            /**
             * The phone number to validate.
             * @example "07700900001"
             */
            phone_number: string;
            /**
             * The server will only send an SMS if the `send_attempt` is a
             * number greater than the most recent one which it has seen,
             * scoped to that `country` + `phone_number` + `client_secret`
             * triple. This is to avoid repeatedly sending the same SMS in
             * the case of request retries between the POSTing user and the
             * identity server. The client should increment this value if
             * they desire a new SMS (e.g. a reminder) to be sent.
             * @example 1
             */
            send_attempt: number;
        } & {
            /**
             * An access token previously registered with the identity server. Servers
             * can treat this as optional to distinguish between r0.5-compatible clients
             * and this specification version.
             *
             * Required if an `id_server` is supplied.
             */
            id_access_token?: string;
            /**
             * The hostname of the identity server to communicate with. May optionally
             * include a port. This parameter is ignored when the homeserver handles
             * 3PID verification.
             *
             * This parameter is deprecated with a plan to be removed in a future specification
             * version for `/account/password` and `/register` requests.
             * @example "id.example.com"
             */
            id_server?: string;
        };
        export type RequestHeaders = {};
        export type ResponseBody = RequestTokenToResetPasswordMsisdnData;
    }
    /**
     * @description Gets information about the owner of a given access token. Note that, as with the rest of the Client-Server API, Application Services may masquerade as users within their namespace by giving a `user_id` query parameter. In this situation, the server should verify that the given `user_id` is registered by the appservice, and return it in the response body.
     * @tags Session management
     * @name GetTokenOwner
     * @summary Gets information about the owner of an access token.
     * @request GET:/_matrix/client/v3/account/whoami
     * @secure
     */
    export namespace GetTokenOwner {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetTokenOwnerData;
    }
    /**
     * @description Gets information about a particular user. This API may be restricted to only be called by the user being looked up, or by a server admin. Server-local administrator privileges are not specified in this document.
     * @tags Server administration
     * @name GetWhoIs
     * @summary Gets information about a particular user.
     * @request GET:/_matrix/client/v3/admin/whois/{userId}
     * @secure
     */
    export namespace GetWhoIs {
        export type RequestParams = {
            /**
             * The user to look up.
             * @example "@peter:rabbit.rocks"
             */
            userId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetWhoIsData;
    }
    /**
     * @description Gets information about the server's supported feature set and other relevant capabilities.
     * @tags Capabilities
     * @name GetCapabilities
     * @summary Gets information about the server's capabilities.
     * @request GET:/_matrix/client/v3/capabilities
     * @secure
     */
    export namespace GetCapabilities {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetCapabilitiesData;
    }
    /**
     * @description Create a new room with various configuration options. The server MUST apply the normal state resolution rules when creating the new room, including checking power levels for each event. It MUST apply the events implied by the request in the following order: 1. The `m.room.create` event itself. Must be the first event in the room. 2. An `m.room.member` event for the creator to join the room. This is needed so the remaining events can be sent. 3. A default `m.room.power_levels` event, giving the room creator (and not other members) permission to send state events. Overridden by the `power_level_content_override` parameter. 4. An `m.room.canonical_alias` event if `room_alias_name` is given. 5. Events set by the `preset`. Currently these are the `m.room.join_rules`, `m.room.history_visibility`, and `m.room.guest_access` state events. 6. Events listed in `initial_state`, in the order that they are listed. 7. Events implied by `name` and `topic` (`m.room.name` and `m.room.topic` state events). 8. Invite events implied by `invite` and `invite_3pid` (`m.room.member` with `membership: invite` and `m.room.third_party_invite`). The available presets do the following with respect to room state: | Preset                 | `join_rules` | `history_visibility` | `guest_access` | Other | |------------------------|--------------|----------------------|----------------|-------| | `private_chat`         | `invite`     | `shared`             | `can_join`     |       | | `trusted_private_chat` | `invite`     | `shared`             | `can_join`     | All invitees are given the same power level as the room creator. | | `public_chat`          | `public`     | `shared`             | `forbidden`    |       | The server will create a `m.room.create` event in the room with the requesting user as the creator, alongside other keys provided in the `creation_content`.
     * @tags Room creation
     * @name CreateRoom
     * @summary Create a new room
     * @request POST:/_matrix/client/v3/createRoom
     * @secure
     */
    export namespace CreateRoom {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = CreateRoomPayload;
        export type RequestHeaders = {};
        export type ResponseBody = CreateRoomData;
    }
    /**
     * @description This API endpoint uses the [User-Interactive Authentication API](https://spec.matrix.org/v1.5/client-server-api/#user-interactive-authentication-api). Deletes the given devices, and invalidates any access token associated with them.
     * @tags Device management
     * @name DeleteDevices
     * @summary Bulk deletion of devices
     * @request POST:/_matrix/client/v3/delete_devices
     * @secure
     */
    export namespace DeleteDevices {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = DeleteDevicesPayload;
        export type RequestHeaders = {};
        export type ResponseBody = DeleteDevicesData;
    }
    /**
     * @description Gets information about all devices for the current user.
     * @tags Device management
     * @name GetDevices
     * @summary List registered devices for the current user
     * @request GET:/_matrix/client/v3/devices
     * @secure
     */
    export namespace GetDevices {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetDevicesData;
    }
    /**
     * @description This API endpoint uses the [User-Interactive Authentication API](https://spec.matrix.org/v1.5/client-server-api/#user-interactive-authentication-api). Deletes the given device, and invalidates any access token associated with it.
     * @tags Device management
     * @name DeleteDevice
     * @summary Delete a device
     * @request DELETE:/_matrix/client/v3/devices/{deviceId}
     * @secure
     */
    export namespace DeleteDevice {
        export type RequestParams = {
            /**
             * The device to delete.
             * @example "QBUAZIFURK"
             */
            deviceId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = DeleteDevicePayload;
        export type RequestHeaders = {};
        export type ResponseBody = DeleteDeviceData;
    }
    /**
     * @description Gets information on a single device, by device id.
     * @tags Device management
     * @name GetDevice
     * @summary Get a single device
     * @request GET:/_matrix/client/v3/devices/{deviceId}
     * @secure
     */
    export namespace GetDevice {
        export type RequestParams = {
            /**
             * The device to retrieve.
             * @example "QBUAZIFURK"
             */
            deviceId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetDeviceData;
    }
    /**
     * @description Updates the metadata on the given device.
     * @tags Device management
     * @name UpdateDevice
     * @summary Update a device
     * @request PUT:/_matrix/client/v3/devices/{deviceId}
     * @secure
     */
    export namespace UpdateDevice {
        export type RequestParams = {
            /**
             * The device to update.
             * @example "QBUAZIFURK"
             */
            deviceId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = UpdateDevicePayload;
        export type RequestHeaders = {};
        export type ResponseBody = UpdateDeviceData;
    }
    /**
     * @description Updates the visibility of a given room on the application service's room directory. This API is similar to the room directory visibility API used by clients to update the homeserver's more general room directory. This API requires the use of an application service access token (`as_token`) instead of a typical client's access_token. This API cannot be invoked by users who are not identified as application services.
     * @tags Application service room directory management
     * @name UpdateAppserviceRoomDirectoryVisibility
     * @summary Updates a room's visibility in the application service's room directory.
     * @request PUT:/_matrix/client/v3/directory/list/appservice/{networkId}/{roomId}
     * @secure
     */
    export namespace UpdateAppserviceRoomDirectoryVisibility {
        export type RequestParams = {
            /**
             * The protocol (network) ID to update the room list for. This would
             * have been provided by the application service as being listed as
             * a supported protocol.
             * @example "irc"
             */
            networkId: string;
            /**
             * The room ID to add to the directory.
             * @example "!somewhere:example.org"
             */
            roomId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = UpdateAppserviceRoomDirectoryVisibilityPayload;
        export type RequestHeaders = {};
        export type ResponseBody = UpdateAppserviceRoomDirectoryVisibilityData;
    }
    /**
     * @description Gets the visibility of a given room on the server's public room directory.
     * @tags Room discovery
     * @name GetRoomVisibilityOnDirectory
     * @summary Gets the visibility of a room in the directory
     * @request GET:/_matrix/client/v3/directory/list/room/{roomId}
     */
    export namespace GetRoomVisibilityOnDirectory {
        export type RequestParams = {
            /**
             * The room ID.
             * @example "!curbf:matrix.org"
             */
            roomId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetRoomVisibilityOnDirectoryData;
    }
    /**
     * @description Sets the visibility of a given room in the server's public room directory. Servers may choose to implement additional access control checks here, for instance that room visibility can only be changed by the room creator or a server administrator.
     * @tags Room discovery
     * @name SetRoomVisibilityOnDirectory
     * @summary Sets the visibility of a room in the room directory
     * @request PUT:/_matrix/client/v3/directory/list/room/{roomId}
     * @secure
     */
    export namespace SetRoomVisibilityOnDirectory {
        export type RequestParams = {
            /**
             * The room ID.
             * @example "!curbf:matrix.org"
             */
            roomId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = SetRoomVisibilityOnDirectoryPayload;
        export type RequestHeaders = {};
        export type ResponseBody = SetRoomVisibilityOnDirectoryData;
    }
    /**
     * @description Remove a mapping of room alias to room ID. Servers may choose to implement additional access control checks here, for instance that room aliases can only be deleted by their creator or a server administrator. **Note:** Servers may choose to update the `alt_aliases` for the `m.room.canonical_alias` state event in the room when an alias is removed. Servers which choose to update the canonical alias event are recommended to, in addition to their other relevant permission checks, delete the alias and return a successful response even if the user does not have permission to update the `m.room.canonical_alias` event.
     * @tags Room directory
     * @name DeleteRoomAlias
     * @summary Remove a mapping of room alias to room ID.
     * @request DELETE:/_matrix/client/v3/directory/room/{roomAlias}
     * @secure
     */
    export namespace DeleteRoomAlias {
        export type RequestParams = {
            /**
             * The room alias to remove. Its format is defined
             * [in the appendices](https://spec.matrix.org/v1.5/appendices/#room-aliases).
             * @example "#monkeys:matrix.org"
             */
            roomAlias: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = DeleteRoomAliasData;
    }
    /**
     * @description Requests that the server resolve a room alias to a room ID. The server will use the federation API to resolve the alias if the domain part of the alias does not correspond to the server's own domain.
     * @tags Room directory
     * @name GetRoomIdByAlias
     * @summary Get the room ID corresponding to this room alias.
     * @request GET:/_matrix/client/v3/directory/room/{roomAlias}
     */
    export namespace GetRoomIdByAlias {
        export type RequestParams = {
            /**
             * The room alias. Its format is defined
             * [in the appendices](https://spec.matrix.org/v1.5/appendices/#room-aliases).
             * @example "#monkeys:matrix.org"
             */
            roomAlias: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetRoomIdByAliasData;
    }
    /**
     * No description
     * @tags Room directory
     * @name SetRoomAlias
     * @summary Create a new mapping from room alias to room ID.
     * @request PUT:/_matrix/client/v3/directory/room/{roomAlias}
     * @secure
     */
    export namespace SetRoomAlias {
        export type RequestParams = {
            /**
             * The room alias to set. Its format is defined
             * [in the appendices](https://spec.matrix.org/v1.5/appendices/#room-aliases).
             * @example "#monkeys:matrix.org"
             */
            roomAlias: string;
        };
        export type RequestQuery = {};
        export type RequestBody = SetRoomAliasPayload;
        export type RequestHeaders = {};
        export type ResponseBody = SetRoomAliasData;
    }
    /**
     * @description This will listen for new events and return them to the caller. This will block until an event is received, or until the `timeout` is reached. This endpoint was deprecated in r0 of this specification. Clients should instead call the [`/sync`](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3sync) endpoint with a `since` parameter. See the [migration guide](https://matrix.org/docs/guides/migrating-from-client-server-api-v-1#deprecated-endpoints).
     * @tags Room participation
     * @name GetEvents
     * @summary Listen on the event stream.
     * @request GET:/_matrix/client/v3/events
     * @deprecated
     * @secure
     */
    export namespace GetEvents {
        export type RequestParams = {};
        export type RequestQuery = {
            /**
             * The token to stream from. This token is either from a previous
             * request to this API or from the initial sync API.
             * @example "s3456_9_0"
             */
            from?: string;
            /**
             * The maximum time in milliseconds to wait for an event.
             * @example "35000"
             */
            timeout?: number;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetEventsData;
    }
    /**
     * @description This will listen for new events related to a particular room and return them to the caller. This will block until an event is received, or until the `timeout` is reached. This API is the same as the normal `/events` endpoint, but can be called by users who have not joined the room. Note that the normal `/events` endpoint has been deprecated. This API will also be deprecated at some point, but its replacement is not yet known.
     * @tags Room participation
     * @name PeekEvents
     * @summary Listen on the event stream of a particular room.
     * @request GET:/_matrix/client/v3/events
     * @secure
     */
    export namespace PeekEvents {
        export type RequestParams = {};
        export type RequestQuery = {
            /**
             * The token to stream from. This token is either from a previous
             * request to this API or from the initial sync API.
             * @example "s3456_9_0"
             */
            from?: string;
            /**
             * The maximum time in milliseconds to wait for an event.
             * @example "35000"
             */
            timeout?: number;
            /**
             * The room ID for which events should be returned.
             * @example ["!somewhere:over.the.rainbow"]
             */
            room_id?: string;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = PeekEventsData;
    }
    /**
     * @description Get a single event based on `event_id`. You must have permission to retrieve this event e.g. by being a member in the room for this event. This endpoint was deprecated in r0 of this specification. Clients should instead call the [/rooms/{roomId}/event/{eventId}](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3roomsroomideventeventid) API or the [/rooms/{roomId}/context/{eventId](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3roomsroomidcontexteventid) API.
     * @tags Room participation
     * @name GetOneEvent
     * @summary Get a single event by event ID.
     * @request GET:/_matrix/client/v3/events/{eventId}
     * @deprecated
     * @secure
     */
    export namespace GetOneEvent {
        export type RequestParams = {
            /**
             * The event ID to get.
             * @example "$asfDuShaf7Gafaw:matrix.org"
             */
            eventId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetOneEventData;
    }
    /**
     * @description This returns the full state for this user, with an optional limit on the number of messages per room to return. This endpoint was deprecated in r0 of this specification. Clients should instead call the [`/sync`](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3sync) endpoint with no `since` parameter. See the [migration guide](https://matrix.org/docs/guides/migrating-from-client-server-api-v-1#deprecated-endpoints).
     * @tags Room participation
     * @name InitialSync
     * @summary Get the user's current state.
     * @request GET:/_matrix/client/v3/initialSync
     * @deprecated
     * @secure
     */
    export namespace InitialSync {
        export type RequestParams = {};
        export type RequestQuery = {
            /**
             * The maximum number of messages to return for each room.
             * @example "2"
             */
            limit?: number;
            /**
             * Whether to include rooms that the user has left. If `false` then
             * only rooms that the user has been invited to or has joined are
             * included. If set to `true` then rooms that the user has left are
             * included as well. By default this is `false`.
             * @example "true"
             */
            archived?: boolean;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = InitialSyncData;
    }
    /**
     * @description *Note that this API takes either a room ID or alias, unlike* `/rooms/{roomId}/join`. This API starts a user participating in a particular room, if that user is allowed to participate in that room. After this call, the client is allowed to see all current state events in the room, and all subsequent events associated with the room until the user leaves the room. After a user has joined a room, the room will appear as an entry in the response of the [`/initialSync`](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3initialsync) and [`/sync`](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3sync) APIs.
     * @tags Room membership
     * @name JoinRoom
     * @summary Start the requesting user participating in a particular room.
     * @request POST:/_matrix/client/v3/join/{roomIdOrAlias}
     * @secure
     */
    export namespace JoinRoom {
        export type RequestParams = {
            /**
             * The room identifier or alias to join.
             * @example "#monkeys:matrix.org"
             */
            roomIdOrAlias: string;
        };
        export type RequestQuery = {
            /**
             * The servers to attempt to join the room through. One of the servers
             * must be participating in the room.
             * @example ["matrix.org","elsewhere.ca"]
             */
            server_name?: string[];
        };
        export type RequestBody = JoinRoomPayload;
        export type RequestHeaders = {};
        export type ResponseBody = JoinRoomData;
    }
    /**
     * @description This API returns a list of the user's current rooms.
     * @tags Room membership
     * @name GetJoinedRooms
     * @summary Lists the user's current rooms.
     * @request GET:/_matrix/client/v3/joined_rooms
     * @secure
     */
    export namespace GetJoinedRooms {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetJoinedRoomsData;
    }
    /**
     * @description Gets a list of users who have updated their device identity keys since a previous sync token. The server should include in the results any users who: * currently share a room with the calling user (ie, both users have membership state `join`); *and* * added new device identity keys or removed an existing device with identity keys, between `from` and `to`.
     * @tags End-to-end encryption
     * @name GetKeysChanges
     * @summary Query users with recent device key updates.
     * @request GET:/_matrix/client/v3/keys/changes
     * @secure
     */
    export namespace GetKeysChanges {
        export type RequestParams = {};
        export type RequestQuery = {
            /**
             * The desired start point of the list. Should be the `next_batch` field
             * from a response to an earlier call to [`/sync`](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3sync). Users who have not
             * uploaded new device identity keys since this point, nor deleted
             * existing devices with identity keys since then, will be excluded
             * from the results.
             * @example "s72594_4483_1934"
             */
            from: string;
            /**
             * The desired end point of the list. Should be the `next_batch`
             * field from a recent call to [`/sync`](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3sync) - typically the most recent
             * such call. This may be used by the server as a hint to check its
             * caches are up to date.
             * @example "s75689_5632_2435"
             */
            to: string;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetKeysChangesData;
    }
    /**
     * @description Claims one-time keys for use in pre-key messages.
     * @tags End-to-end encryption
     * @name ClaimKeys
     * @summary Claim one-time encryption keys.
     * @request POST:/_matrix/client/v3/keys/claim
     * @secure
     */
    export namespace ClaimKeys {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = ClaimKeysPayload;
        export type RequestHeaders = {};
        export type ResponseBody = ClaimKeysData;
    }
    /**
     * @description Publishes cross-signing keys for the user. This API endpoint uses the [User-Interactive Authentication API](https://spec.matrix.org/v1.5/client-server-api/#user-interactive-authentication-api).
     * @tags End-to-end encryption
     * @name UploadCrossSigningKeys
     * @summary Upload cross-signing keys.
     * @request POST:/_matrix/client/v3/keys/device_signing/upload
     * @secure
     */
    export namespace UploadCrossSigningKeys {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = UploadCrossSigningKeysPayload;
        export type RequestHeaders = {};
        export type ResponseBody = UploadCrossSigningKeysData;
    }
    /**
     * @description Returns the current devices and identity keys for the given users.
     * @tags End-to-end encryption
     * @name QueryKeys
     * @summary Download device identity keys.
     * @request POST:/_matrix/client/v3/keys/query
     * @secure
     */
    export namespace QueryKeys {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = QueryKeysPayload;
        export type RequestHeaders = {};
        export type ResponseBody = QueryKeysData;
    }
    /**
     * @description Publishes cross-signing signatures for the user.  The request body is a map from user ID to key ID to signed JSON object.
     * @tags End-to-end encryption
     * @name UploadCrossSigningSignatures
     * @summary Upload cross-signing signatures.
     * @request POST:/_matrix/client/v3/keys/signatures/upload
     * @secure
     */
    export namespace UploadCrossSigningSignatures {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = UploadCrossSigningSignaturesPayload;
        export type RequestHeaders = {};
        export type ResponseBody = UploadCrossSigningSignaturesData;
    }
    /**
     * @description Publishes end-to-end encryption keys for the device.
     * @tags End-to-end encryption
     * @name UploadKeys
     * @summary Upload end-to-end encryption keys.
     * @request POST:/_matrix/client/v3/keys/upload
     * @secure
     */
    export namespace UploadKeys {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = UploadKeysPayload;
        export type RequestHeaders = {};
        export type ResponseBody = UploadKeysData;
    }
    /**
     * @description *Note that this API takes either a room ID or alias, unlike other membership APIs.* This API "knocks" on the room to ask for permission to join, if the user is allowed to knock on the room. Acceptance of the knock happens out of band from this API, meaning that the client will have to watch for updates regarding the acceptance/rejection of the knock. If the room history settings allow, the user will still be able to see history of the room while being in the "knock" state. The user will have to accept the invitation to join the room (acceptance of knock) to see messages reliably. See the `/join` endpoints for more information about history visibility to the user. The knock will appear as an entry in the response of the [`/sync`](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3sync) API.
     * @tags Room membership
     * @name KnockRoom
     * @summary Knock on a room, requesting permission to join.
     * @request POST:/_matrix/client/v3/knock/{roomIdOrAlias}
     * @secure
     */
    export namespace KnockRoom {
        export type RequestParams = {
            /**
             * The room identifier or alias to knock upon.
             * @example "#monkeys:matrix.org"
             */
            roomIdOrAlias: string;
        };
        export type RequestQuery = {
            /**
             * The servers to attempt to knock on the room through. One of the servers
             * must be participating in the room.
             * @example ["matrix.org","elsewhere.ca"]
             */
            server_name?: string[];
        };
        export type RequestBody = KnockRoomPayload;
        export type RequestHeaders = {};
        export type ResponseBody = KnockRoomData;
    }
    /**
     * @description Gets the homeserver's supported login types to authenticate users. Clients should pick one of these and supply it as the `type` when logging in.
     * @tags Session management
     * @name GetLoginFlows
     * @summary Get the supported login types to authenticate users
     * @request GET:/_matrix/client/v3/login
     */
    export namespace GetLoginFlows {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetLoginFlowsData;
    }
    /**
     * @description Authenticates the user, and issues an access token they can use to authorize themself in subsequent requests. If the client does not supply a `device_id`, the server must auto-generate one. The returned access token must be associated with the `device_id` supplied by the client or generated by the server. The server may invalidate any access token previously associated with that device. See [Relationship between access tokens and devices](https://spec.matrix.org/v1.5/client-server-api/#relationship-between-access-tokens-and-devices).
     * @tags Session management
     * @name Login
     * @summary Authenticates the user.
     * @request POST:/_matrix/client/v3/login
     */
    export namespace Login {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = LoginPayload;
        export type RequestHeaders = {};
        export type ResponseBody = LoginData;
    }
    /**
     * @description A web-based Matrix client should instruct the user's browser to navigate to this endpoint in order to log in via SSO. The server MUST respond with an HTTP redirect to the SSO interface, or present a page which lets the user select an IdP to continue with in the event multiple are supported by the server.
     * @tags Session management
     * @name RedirectToSso
     * @summary Redirect the user's browser to the SSO interface.
     * @request GET:/_matrix/client/v3/login/sso/redirect
     */
    export namespace RedirectToSso {
        export type RequestParams = {};
        export type RequestQuery = {
            /**
             * URI to which the user will be redirected after the homeserver has
             * authenticated the user with SSO.
             */
            redirectUrl: string;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = any;
    }
    /**
     * @description This endpoint is the same as `/login/sso/redirect`, though with an IdP ID from the original `identity_providers` array to inform the server of which IdP the client/user would like to continue with. The server MUST respond with an HTTP redirect to the SSO interface for that IdP.
     * @tags Session management
     * @name RedirectToIdP
     * @summary Redirect the user's browser to the SSO interface for an IdP.
     * @request GET:/_matrix/client/v3/login/sso/redirect/{idpId}
     */
    export namespace RedirectToIdP {
        export type RequestParams = {
            /**
             * The `id` of the IdP from the `m.login.sso` `identity_providers`
             * array denoting the user's selection.
             */
            idpId: string;
        };
        export type RequestQuery = {
            /**
             * URI to which the user will be redirected after the homeserver has
             * authenticated the user with SSO.
             */
            redirectUrl: string;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = any;
    }
    /**
     * @description Invalidates an existing access token, so that it can no longer be used for authorization. The device associated with the access token is also deleted. [Device keys](https://spec.matrix.org/v1.5/client-server-api/#device-keys) for the device are deleted alongside the device.
     * @tags Session management
     * @name Logout
     * @summary Invalidates a user access token
     * @request POST:/_matrix/client/v3/logout
     * @secure
     */
    export namespace Logout {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = LogoutData;
    }
    /**
     * @description Invalidates all access tokens for a user, so that they can no longer be used for authorization. This includes the access token that made this request. All devices for the user are also deleted. [Device keys](https://spec.matrix.org/v1.5/client-server-api/#device-keys) for the device are deleted alongside the device. This endpoint does not use the [User-Interactive Authentication API](https://spec.matrix.org/v1.5/client-server-api/#user-interactive-authentication-api) because User-Interactive Authentication is designed to protect against attacks where the someone gets hold of a single access token then takes over the account. This endpoint invalidates all access tokens for the user, including the token used in the request, and therefore the attacker is unable to take over the account in this way.
     * @tags Session management
     * @name LogoutAll
     * @summary Invalidates all access tokens for a user
     * @request POST:/_matrix/client/v3/logout/all
     * @secure
     */
    export namespace LogoutAll {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = LogoutAllData;
    }
    /**
     * @description This API is used to paginate through the list of events that the user has been, or would have been notified about.
     * @tags Push notifications
     * @name GetNotifications
     * @summary Gets a list of events that the user has been notified about
     * @request GET:/_matrix/client/v3/notifications
     * @secure
     */
    export namespace GetNotifications {
        export type RequestParams = {};
        export type RequestQuery = {
            /**
             * Pagination token to continue from. This should be the `next_token`
             * returned from an earlier call to this endpoint.
             * @example "xxxxx"
             */
            from?: string;
            /**
             * Limit on the number of events to return in this request.
             * @example 20
             */
            limit?: number;
            /**
             * Allows basic filtering of events returned. Supply `highlight`
             * to return only events where the notification had the highlight
             * tweak set.
             * @example "highlight"
             */
            only?: string;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetNotificationsData;
    }
    /**
     * @description Get the given user's presence state.
     * @tags Presence
     * @name GetPresence
     * @summary Get this user's presence state.
     * @request GET:/_matrix/client/v3/presence/{userId}/status
     * @secure
     */
    export namespace GetPresence {
        export type RequestParams = {
            /**
             * The user whose presence state to get.
             * @example "@alice:example.com"
             */
            userId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetPresenceData;
    }
    /**
     * @description This API sets the given user's presence state. When setting the status, the activity time is updated to reflect that activity; the client does not need to specify the `last_active_ago` field. You cannot set the presence state of another user.
     * @tags Presence
     * @name SetPresence
     * @summary Update this user's presence state.
     * @request PUT:/_matrix/client/v3/presence/{userId}/status
     * @secure
     */
    export namespace SetPresence {
        export type RequestParams = {
            /**
             * The user whose presence state to update.
             * @example "@alice:example.com"
             */
            userId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = SetPresencePayload;
        export type RequestHeaders = {};
        export type ResponseBody = SetPresenceData;
    }
    /**
     * @description Get the combined profile information for this user. This API may be used to fetch the user's own profile information or other users; either locally or on remote homeservers. This API may return keys which are not limited to `displayname` or `avatar_url`.
     * @tags User data
     * @name GetUserProfile
     * @summary Get this user's profile information.
     * @request GET:/_matrix/client/v3/profile/{userId}
     */
    export namespace GetUserProfile {
        export type RequestParams = {
            /**
             * The user whose profile information to get.
             * @example "@alice:example.com"
             */
            userId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetUserProfileData;
    }
    /**
     * @description Get the user's avatar URL. This API may be used to fetch the user's own avatar URL or to query the URL of other users; either locally or on remote homeservers.
     * @tags User data
     * @name GetAvatarUrl
     * @summary Get the user's avatar URL.
     * @request GET:/_matrix/client/v3/profile/{userId}/avatar_url
     */
    export namespace GetAvatarUrl {
        export type RequestParams = {
            /**
             * The user whose avatar URL to get.
             * @example "@alice:example.com"
             */
            userId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetAvatarUrlData;
    }
    /**
     * @description This API sets the given user's avatar URL. You must have permission to set this user's avatar URL, e.g. you need to have their `access_token`.
     * @tags User data
     * @name SetAvatarUrl
     * @summary Set the user's avatar URL.
     * @request PUT:/_matrix/client/v3/profile/{userId}/avatar_url
     * @secure
     */
    export namespace SetAvatarUrl {
        export type RequestParams = {
            /**
             * The user whose avatar URL to set.
             * @example "@alice:example.com"
             */
            userId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = SetAvatarUrlPayload;
        export type RequestHeaders = {};
        export type ResponseBody = SetAvatarUrlData;
    }
    /**
     * @description Get the user's display name. This API may be used to fetch the user's own displayname or to query the name of other users; either locally or on remote homeservers.
     * @tags User data
     * @name GetDisplayName
     * @summary Get the user's display name.
     * @request GET:/_matrix/client/v3/profile/{userId}/displayname
     */
    export namespace GetDisplayName {
        export type RequestParams = {
            /**
             * The user whose display name to get.
             * @example "@alice:example.com"
             */
            userId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetDisplayNameData;
    }
    /**
     * @description This API sets the given user's display name. You must have permission to set this user's display name, e.g. you need to have their `access_token`.
     * @tags User data
     * @name SetDisplayName
     * @summary Set the user's display name.
     * @request PUT:/_matrix/client/v3/profile/{userId}/displayname
     * @secure
     */
    export namespace SetDisplayName {
        export type RequestParams = {
            /**
             * The user whose display name to set.
             * @example "@alice:example.com"
             */
            userId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = SetDisplayNamePayload;
        export type RequestHeaders = {};
        export type ResponseBody = SetDisplayNameData;
    }
    /**
     * @description Lists the public rooms on the server. This API returns paginated responses. The rooms are ordered by the number of joined members, with the largest rooms first.
     * @tags Room discovery
     * @name GetPublicRooms
     * @summary Lists the public rooms on the server.
     * @request GET:/_matrix/client/v3/publicRooms
     */
    export namespace GetPublicRooms {
        export type RequestParams = {};
        export type RequestQuery = {
            /** Limit the number of results returned. */
            limit?: number;
            /**
             * A pagination token from a previous request, allowing clients to
             * get the next (or previous) batch of rooms.
             * The direction of pagination is specified solely by which token
             * is supplied, rather than via an explicit flag.
             */
            since?: string;
            /**
             * The server to fetch the public room lists from. Defaults to the
             * local server.
             */
            server?: string;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetPublicRoomsData;
    }
    /**
     * @description Lists the public rooms on the server, with optional filter. This API returns paginated responses. The rooms are ordered by the number of joined members, with the largest rooms first.
     * @tags Room discovery
     * @name QueryPublicRooms
     * @summary Lists the public rooms on the server with optional filter.
     * @request POST:/_matrix/client/v3/publicRooms
     * @secure
     */
    export namespace QueryPublicRooms {
        export type RequestParams = {};
        export type RequestQuery = {
            /**
             * The server to fetch the public room lists from. Defaults to the
             * local server.
             */
            server?: string;
        };
        export type RequestBody = QueryPublicRoomsPayload;
        export type RequestHeaders = {};
        export type ResponseBody = QueryPublicRoomsData;
    }
    /**
     * @description Gets all currently active pushers for the authenticated user.
     * @tags Push notifications
     * @name GetPushers
     * @summary Gets the current pushers for the authenticated user
     * @request GET:/_matrix/client/v3/pushers
     * @secure
     */
    export namespace GetPushers {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetPushersData;
    }
    /**
     * @description This endpoint allows the creation, modification and deletion of [pushers](https://spec.matrix.org/v1.5/client-server-api/#push-notifications) for this user ID. The behaviour of this endpoint varies depending on the values in the JSON body.
     * @tags Push notifications
     * @name PostPusher
     * @summary Modify a pusher for this user on the homeserver.
     * @request POST:/_matrix/client/v3/pushers/set
     * @secure
     */
    export namespace PostPusher {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = PostPusherPayload;
        export type RequestHeaders = {};
        export type ResponseBody = PostPusherData;
    }
    /**
     * @description Retrieve all push rulesets for this user. Clients can "drill-down" on the rulesets by suffixing a `scope` to this path e.g. `/pushrules/global/`. This will return a subset of this data under the specified key e.g. the `global` key.
     * @tags Push notifications
     * @name GetPushRules
     * @summary Retrieve all push rulesets.
     * @request GET:/_matrix/client/v3/pushrules/
     * @secure
     */
    export namespace GetPushRules {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetPushRulesData;
    }
    /**
     * @description This endpoint removes the push rule defined in the path.
     * @tags Push notifications
     * @name DeletePushRule
     * @summary Delete a push rule.
     * @request DELETE:/_matrix/client/v3/pushrules/{scope}/{kind}/{ruleId}
     * @secure
     */
    export namespace DeletePushRule {
        export type RequestParams = {
            /**
             * `global` to specify global rules.
             * @example "global"
             */
            scope: string;
            /**
             * The kind of rule
             * @example "content"
             */
            kind: "override" | "underride" | "sender" | "room" | "content";
            /**
             * The identifier for the rule.
             * @example "nocake"
             */
            ruleId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = DeletePushRuleData;
    }
    /**
     * @description Retrieve a single specified push rule.
     * @tags Push notifications
     * @name GetPushRule
     * @summary Retrieve a push rule.
     * @request GET:/_matrix/client/v3/pushrules/{scope}/{kind}/{ruleId}
     * @secure
     */
    export namespace GetPushRule {
        export type RequestParams = {
            /**
             * `global` to specify global rules.
             * @example "global"
             */
            scope: string;
            /**
             * The kind of rule
             * @example "content"
             */
            kind: "override" | "underride" | "sender" | "room" | "content";
            /**
             * The identifier for the rule.
             * @example "nocake"
             */
            ruleId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetPushRuleData;
    }
    /**
     * @description This endpoint allows the creation and modification of user defined push rules. If a rule with the same `rule_id` already exists among rules of the same kind, it is updated with the new parameters, otherwise a new rule is created. If both `after` and `before` are provided, the new or updated rule must be the next most important rule with respect to the rule identified by `before`. If neither `after` nor `before` are provided and the rule is created, it should be added as the most important user defined rule among rules of the same kind. When creating push rules, they MUST be enabled by default.
     * @tags Push notifications
     * @name SetPushRule
     * @summary Add or change a push rule.
     * @request PUT:/_matrix/client/v3/pushrules/{scope}/{kind}/{ruleId}
     * @secure
     */
    export namespace SetPushRule {
        export type RequestParams = {
            /**
             * `global` to specify global rules.
             * @example "global"
             */
            scope: string;
            /**
             * The kind of rule
             * @example "content"
             */
            kind: "override" | "underride" | "sender" | "room" | "content";
            /**
             * The identifier for the rule. If the string starts with a dot ("."),
             * the request MUST be rejected as this is reserved for server-default
             * rules. Slashes ("/") and backslashes ("\\") are also not allowed.
             * @example "nocake"
             */
            ruleId: string;
        };
        export type RequestQuery = {
            /**
             * Use 'before' with a `rule_id` as its value to make the new rule the
             * next-most important rule with respect to the given user defined rule.
             * It is not possible to add a rule relative to a predefined server rule.
             * @example "someRuleId"
             */
            before?: string;
            /**
             * This makes the new rule the next-less important rule relative to the
             * given user defined rule. It is not possible to add a rule relative
             * to a predefined server rule.
             * @example "anotherRuleId"
             */
            after?: string;
        };
        export type RequestBody = SetPushRulePayload;
        export type RequestHeaders = {};
        export type ResponseBody = SetPushRuleData;
    }
    /**
     * @description This endpoint get the actions for the specified push rule.
     * @tags Push notifications
     * @name GetPushRuleActions
     * @summary The actions for a push rule
     * @request GET:/_matrix/client/v3/pushrules/{scope}/{kind}/{ruleId}/actions
     * @secure
     */
    export namespace GetPushRuleActions {
        export type RequestParams = {
            /**
             * Either `global` or `device/<profile_tag>` to specify global
             * rules or device rules for the given `profile_tag`.
             * @example "global"
             */
            scope: string;
            /**
             * The kind of rule
             * @example "content"
             */
            kind: "override" | "underride" | "sender" | "room" | "content";
            /**
             * The identifier for the rule.
             * @example "nocake"
             */
            ruleId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetPushRuleActionsData;
    }
    /**
     * @description This endpoint allows clients to change the actions of a push rule. This can be used to change the actions of builtin rules.
     * @tags Push notifications
     * @name SetPushRuleActions
     * @summary Set the actions for a push rule.
     * @request PUT:/_matrix/client/v3/pushrules/{scope}/{kind}/{ruleId}/actions
     * @secure
     */
    export namespace SetPushRuleActions {
        export type RequestParams = {
            /**
             * `global` to specify global rules.
             * @example "global"
             */
            scope: string;
            /**
             * The kind of rule
             * @example "room"
             */
            kind: "override" | "underride" | "sender" | "room" | "content";
            /**
             * The identifier for the rule.
             * @example "#spam:example.com"
             */
            ruleId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = SetPushRuleActionsPayload;
        export type RequestHeaders = {};
        export type ResponseBody = SetPushRuleActionsData;
    }
    /**
     * @description This endpoint gets whether the specified push rule is enabled.
     * @tags Push notifications
     * @name IsPushRuleEnabled
     * @summary Get whether a push rule is enabled
     * @request GET:/_matrix/client/v3/pushrules/{scope}/{kind}/{ruleId}/enabled
     * @secure
     */
    export namespace IsPushRuleEnabled {
        export type RequestParams = {
            /**
             * Either `global` or `device/<profile_tag>` to specify global
             * rules or device rules for the given `profile_tag`.
             * @example "global"
             */
            scope: string;
            /**
             * The kind of rule
             * @example "cake"
             */
            kind: "override" | "underride" | "sender" | "room" | "content";
            /**
             * The identifier for the rule.
             * @example "nocake"
             */
            ruleId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = IsPushRuleEnabledData;
    }
    /**
     * @description This endpoint allows clients to enable or disable the specified push rule.
     * @tags Push notifications
     * @name SetPushRuleEnabled
     * @summary Enable or disable a push rule.
     * @request PUT:/_matrix/client/v3/pushrules/{scope}/{kind}/{ruleId}/enabled
     * @secure
     */
    export namespace SetPushRuleEnabled {
        export type RequestParams = {
            /**
             * `global` to specify global rules.
             * @example "global"
             */
            scope: string;
            /**
             * The kind of rule
             * @example "content"
             */
            kind: "override" | "underride" | "sender" | "room" | "content";
            /**
             * The identifier for the rule.
             * @example "nocake"
             */
            ruleId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = SetPushRuleEnabledPayload;
        export type RequestHeaders = {};
        export type ResponseBody = SetPushRuleEnabledData;
    }
    /**
     * @description Refresh an access token. Clients should use the returned access token when making subsequent API calls, and store the returned refresh token (if given) in order to refresh the new access token when necessary. After an access token has been refreshed, a server can choose to invalidate the old access token immediately, or can choose not to, for example if the access token would expire soon anyways. Clients should not make any assumptions about the old access token still being valid, and should use the newly provided access token instead. The old refresh token remains valid until the new access token or refresh token is used, at which point the old refresh token is revoked. Note that this endpoint does not require authentication via an access token. Authentication is provided via the refresh token. Application Service identity assertion is disabled for this endpoint.
     * @name Refresh
     * @summary Refresh an access token
     * @request POST:/_matrix/client/v3/refresh
     */
    export namespace Refresh {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = RefreshPayload;
        export type RequestHeaders = {};
        export type ResponseBody = RefreshData;
    }
    /**
     * @description This API endpoint uses the [User-Interactive Authentication API](https://spec.matrix.org/v1.5/client-server-api/#user-interactive-authentication-api), except in the cases where a guest account is being registered. Register for an account on this homeserver. There are two kinds of user account: - `user` accounts. These accounts may use the full API described in this specification. - `guest` accounts. These accounts may have limited permissions and may not be supported by all servers. If registration is successful, this endpoint will issue an access token the client can use to authorize itself in subsequent requests. If the client does not supply a `device_id`, the server must auto-generate one. The server SHOULD register an account with a User ID based on the `username` provided, if any. Note that the grammar of Matrix User ID localparts is restricted, so the server MUST either map the provided `username` onto a `user_id` in a logical manner, or reject `username`\s which do not comply to the grammar, with `M_INVALID_USERNAME`. Matrix clients MUST NOT assume that localpart of the registered `user_id` matches the provided `username`. The returned access token must be associated with the `device_id` supplied by the client or generated by the server. The server may invalidate any access token previously associated with that device. See [Relationship between access tokens and devices](https://spec.matrix.org/v1.5/client-server-api/#relationship-between-access-tokens-and-devices). When registering a guest account, all parameters in the request body with the exception of `initial_device_display_name` MUST BE ignored by the server. The server MUST pick a `device_id` for the account regardless of input. Any user ID returned by this API must conform to the grammar given in the [Matrix specification](https://spec.matrix.org/v1.5/appendices/#user-identifiers).
     * @tags Account management
     * @name Register
     * @summary Register for an account on this homeserver.
     * @request POST:/_matrix/client/v3/register
     */
    export namespace Register {
        export type RequestParams = {};
        export type RequestQuery = {
            /**
             * The kind of account to register. Defaults to `user`.
             * @default "user"
             * @example "user"
             */
            kind?: "guest" | "user";
        };
        export type RequestBody = RegisterPayload;
        export type RequestHeaders = {};
        export type ResponseBody = RegisterData;
    }
    /**
     * @description Checks to see if a username is available, and valid, for the server. The server should check to ensure that, at the time of the request, the username requested is available for use. This includes verifying that an application service has not claimed the username and that the username fits the server's desired requirements (for example, a server could dictate that it does not permit usernames with underscores). Matrix clients may wish to use this API prior to attempting registration, however the clients must also be aware that using this API does not normally reserve the username. This can mean that the username becomes unavailable between checking its availability and attempting to register it.
     * @tags Account management
     * @name CheckUsernameAvailability
     * @summary Checks to see if a username is available on the server.
     * @request GET:/_matrix/client/v3/register/available
     */
    export namespace CheckUsernameAvailability {
        export type RequestParams = {};
        export type RequestQuery = {
            /**
             * The username to check the availability of.
             * @default "my_cool_localpart"
             * @example "my_cool_localpart"
             */
            username: string;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = CheckUsernameAvailabilityData;
    }
    /**
     * @description The homeserver must check that the given email address is **not** already associated with an account on this homeserver. The homeserver should validate the email itself, either by sending a validation email itself or by using a service it has control over.
     * @tags Account management
     * @name RequestTokenToRegisterEmail
     * @summary Begins the validation process for an email to be used during registration.
     * @request POST:/_matrix/client/v3/register/email/requestToken
     */
    export namespace RequestTokenToRegisterEmail {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = {
            /**
             * A unique string generated by the client, and used to identify the
             * validation attempt. It must be a string consisting of the characters
             * `[0-9a-zA-Z.=_-]`. Its length must not exceed 255 characters and it
             * must not be empty.
             * @example "monkeys_are_GREAT"
             */
            client_secret: string;
            /**
             * The email address to validate.
             * @example "alice@example.org"
             */
            email: string;
            /**
             * Optional. When the validation is completed, the identity server will
             * redirect the user to this URL. This option is ignored when submitting
             * 3PID validation information through a POST request.
             * @example "https://example.org/congratulations.html"
             */
            next_link?: string;
            /**
             * The server will only send an email if the `send_attempt`
             * is a number greater than the most recent one which it has seen,
             * scoped to that `email` + `client_secret` pair. This is to
             * avoid repeatedly sending the same email in the case of request
             * retries between the POSTing user and the identity server.
             * The client should increment this value if they desire a new
             * email (e.g. a reminder) to be sent. If they do not, the server
             * should respond with success but not resend the email.
             * @example 1
             */
            send_attempt: number;
        } & {
            /**
             * An access token previously registered with the identity server. Servers
             * can treat this as optional to distinguish between r0.5-compatible clients
             * and this specification version.
             *
             * Required if an `id_server` is supplied.
             */
            id_access_token?: string;
            /**
             * The hostname of the identity server to communicate with. May optionally
             * include a port. This parameter is ignored when the homeserver handles
             * 3PID verification.
             *
             * This parameter is deprecated with a plan to be removed in a future specification
             * version for `/account/password` and `/register` requests.
             * @example "id.example.com"
             */
            id_server?: string;
        };
        export type RequestHeaders = {};
        export type ResponseBody = RequestTokenToRegisterEmailData;
    }
    /**
     * @description The homeserver must check that the given phone number is **not** already associated with an account on this homeserver. The homeserver should validate the phone number itself, either by sending a validation message itself or by using a service it has control over.
     * @tags Account management
     * @name RequestTokenToRegisterMsisdn
     * @summary Requests a validation token be sent to the given phone number for the purpose of registering an account
     * @request POST:/_matrix/client/v3/register/msisdn/requestToken
     */
    export namespace RequestTokenToRegisterMsisdn {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = {
            /**
             * A unique string generated by the client, and used to identify the
             * validation attempt. It must be a string consisting of the characters
             * `[0-9a-zA-Z.=_-]`. Its length must not exceed 255 characters and it
             * must not be empty.
             * @example "monkeys_are_GREAT"
             */
            client_secret: string;
            /**
             * The two-letter uppercase ISO-3166-1 alpha-2 country code that the
             * number in `phone_number` should be parsed as if it were dialled from.
             * @example "GB"
             */
            country: string;
            /**
             * Optional. When the validation is completed, the identity server will
             * redirect the user to this URL. This option is ignored when submitting
             * 3PID validation information through a POST request.
             * @example "https://example.org/congratulations.html"
             */
            next_link?: string;
            /**
             * The phone number to validate.
             * @example "07700900001"
             */
            phone_number: string;
            /**
             * The server will only send an SMS if the `send_attempt` is a
             * number greater than the most recent one which it has seen,
             * scoped to that `country` + `phone_number` + `client_secret`
             * triple. This is to avoid repeatedly sending the same SMS in
             * the case of request retries between the POSTing user and the
             * identity server. The client should increment this value if
             * they desire a new SMS (e.g. a reminder) to be sent.
             * @example 1
             */
            send_attempt: number;
        } & {
            /**
             * An access token previously registered with the identity server. Servers
             * can treat this as optional to distinguish between r0.5-compatible clients
             * and this specification version.
             *
             * Required if an `id_server` is supplied.
             */
            id_access_token?: string;
            /**
             * The hostname of the identity server to communicate with. May optionally
             * include a port. This parameter is ignored when the homeserver handles
             * 3PID verification.
             *
             * This parameter is deprecated with a plan to be removed in a future specification
             * version for `/account/password` and `/register` requests.
             * @example "id.example.com"
             */
            id_server?: string;
        };
        export type RequestHeaders = {};
        export type ResponseBody = RequestTokenToRegisterMsisdnData;
    }
    /**
     * @description Delete the keys from the backup.
     * @tags End-to-end encryption
     * @name DeleteRoomKeys
     * @summary Delete the keys from the backup.
     * @request DELETE:/_matrix/client/v3/room_keys/keys
     * @secure
     */
    export namespace DeleteRoomKeys {
        export type RequestParams = {};
        export type RequestQuery = {
            /**
             * The backup from which to delete the key
             * @example "1"
             */
            version: string;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = DeleteRoomKeysData;
    }
    /**
     * @description Retrieve the keys from the backup.
     * @tags End-to-end encryption
     * @name GetRoomKeys
     * @summary Retrieve the keys from the backup.
     * @request GET:/_matrix/client/v3/room_keys/keys
     * @secure
     */
    export namespace GetRoomKeys {
        export type RequestParams = {};
        export type RequestQuery = {
            /**
             * The backup from which to retrieve the keys.
             * @example "1"
             */
            version: string;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetRoomKeysData;
    }
    /**
     * @description Store several keys in the backup.
     * @tags End-to-end encryption
     * @name PutRoomKeys
     * @summary Store several keys in the backup.
     * @request PUT:/_matrix/client/v3/room_keys/keys
     * @secure
     */
    export namespace PutRoomKeys {
        export type RequestParams = {};
        export type RequestQuery = {
            /**
             * The backup in which to store the keys. Must be the current backup.
             * @example "1"
             */
            version: string;
        };
        export type RequestBody = PutRoomKeysPayload;
        export type RequestHeaders = {};
        export type ResponseBody = PutRoomKeysData;
    }
    /**
     * @description Delete the keys from the backup for a given room.
     * @tags End-to-end encryption
     * @name DeleteRoomKeysByRoomId
     * @summary Delete the keys from the backup for a given room.
     * @request DELETE:/_matrix/client/v3/room_keys/keys/{roomId}
     * @secure
     */
    export namespace DeleteRoomKeysByRoomId {
        export type RequestParams = {
            /**
             * The ID of the room that the specified key is for.
             * @example "!roomid:example.org"
             */
            roomId: string;
        };
        export type RequestQuery = {
            /**
             * The backup from which to delete the key.
             * @example "1"
             */
            version: string;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = DeleteRoomKeysByRoomIdData;
    }
    /**
     * @description Retrieve the keys from the backup for a given room.
     * @tags End-to-end encryption
     * @name GetRoomKeysByRoomId
     * @summary Retrieve the keys from the backup for a given room.
     * @request GET:/_matrix/client/v3/room_keys/keys/{roomId}
     * @secure
     */
    export namespace GetRoomKeysByRoomId {
        export type RequestParams = {
            /**
             * The ID of the room that the requested key is for.
             * @example "!roomid:example.org"
             */
            roomId: string;
        };
        export type RequestQuery = {
            /**
             * The backup from which to retrieve the key.
             * @example "1"
             */
            version: string;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetRoomKeysByRoomIdData;
    }
    /**
     * @description Store several keys in the backup for a given room.
     * @tags End-to-end encryption
     * @name PutRoomKeysByRoomId
     * @summary Store several keys in the backup for a given room.
     * @request PUT:/_matrix/client/v3/room_keys/keys/{roomId}
     * @secure
     */
    export namespace PutRoomKeysByRoomId {
        export type RequestParams = {
            /**
             * The ID of the room that the keys are for.
             * @example "!roomid:example.org"
             */
            roomId: string;
        };
        export type RequestQuery = {
            /**
             * The backup in which to store the keys. Must be the current backup.
             * @example "1"
             */
            version: string;
        };
        export type RequestBody = PutRoomKeysByRoomIdPayload;
        export type RequestHeaders = {};
        export type ResponseBody = PutRoomKeysByRoomIdData;
    }
    /**
     * @description Delete a key from the backup.
     * @tags End-to-end encryption
     * @name DeleteRoomKeyBySessionId
     * @summary Delete a key from the backup.
     * @request DELETE:/_matrix/client/v3/room_keys/keys/{roomId}/{sessionId}
     * @secure
     */
    export namespace DeleteRoomKeyBySessionId {
        export type RequestParams = {
            /**
             * The ID of the room that the specified key is for.
             * @example "!roomid:example.org"
             */
            roomId: string;
            /**
             * The ID of the megolm session whose key is to be deleted.
             * @example "sessionid"
             */
            sessionId: string;
        };
        export type RequestQuery = {
            /**
             * The backup from which to delete the key
             * @example "1"
             */
            version: string;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = DeleteRoomKeyBySessionIdData;
    }
    /**
     * @description Retrieve a key from the backup.
     * @tags End-to-end encryption
     * @name GetRoomKeyBySessionId
     * @summary Retrieve a key from the backup.
     * @request GET:/_matrix/client/v3/room_keys/keys/{roomId}/{sessionId}
     * @secure
     */
    export namespace GetRoomKeyBySessionId {
        export type RequestParams = {
            /**
             * The ID of the room that the requested key is for.
             * @example "!roomid:example.org"
             */
            roomId: string;
            /**
             * The ID of the megolm session whose key is requested.
             * @example "sessionid"
             */
            sessionId: string;
        };
        export type RequestQuery = {
            /**
             * The backup from which to retrieve the key.
             * @example "1"
             */
            version: string;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetRoomKeyBySessionIdData;
    }
    /**
     * @description Store a key in the backup.
     * @tags End-to-end encryption
     * @name PutRoomKeyBySessionId
     * @summary Store a key in the backup.
     * @request PUT:/_matrix/client/v3/room_keys/keys/{roomId}/{sessionId}
     * @secure
     */
    export namespace PutRoomKeyBySessionId {
        export type RequestParams = {
            /**
             * The ID of the room that the key is for.
             * @example "!roomid:example.org"
             */
            roomId: string;
            /**
             * The ID of the megolm session that the key is for.
             * @example "sessionid"
             */
            sessionId: string;
        };
        export type RequestQuery = {
            /**
             * The backup in which to store the key. Must be the current backup.
             * @example "1"
             */
            version: string;
        };
        export type RequestBody = PutRoomKeyBySessionIdPayload;
        export type RequestHeaders = {};
        export type ResponseBody = PutRoomKeyBySessionIdData;
    }
    /**
     * @description Get information about the latest backup version.
     * @tags End-to-end encryption
     * @name GetRoomKeysVersionCurrent
     * @summary Get information about the latest backup version.
     * @request GET:/_matrix/client/v3/room_keys/version
     * @secure
     */
    export namespace GetRoomKeysVersionCurrent {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetRoomKeysVersionCurrentData;
    }
    /**
     * @description Creates a new backup.
     * @tags End-to-end encryption
     * @name PostRoomKeysVersion
     * @summary Create a new backup.
     * @request POST:/_matrix/client/v3/room_keys/version
     * @secure
     */
    export namespace PostRoomKeysVersion {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = PostRoomKeysVersionPayload;
        export type RequestHeaders = {};
        export type ResponseBody = PostRoomKeysVersionData;
    }
    /**
     * @description Delete an existing key backup. Both the information about the backup, as well as all key data related to the backup will be deleted.
     * @tags End-to-end encryption
     * @name DeleteRoomKeysVersion
     * @summary Delete an existing key backup.
     * @request DELETE:/_matrix/client/v3/room_keys/version/{version}
     * @secure
     */
    export namespace DeleteRoomKeysVersion {
        export type RequestParams = {
            /**
             * The backup version to delete, as returned in the `version`
             * parameter in the response of
             * [`POST /_matrix/client/v3/room_keys/version`](https://spec.matrix.org/v1.5/client-server-api/#post_matrixclientv3room_keysversion)
             * or [`GET /_matrix/client/v3/room_keys/version/{version}`](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3room_keysversionversion).
             * @example "1"
             */
            version: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = DeleteRoomKeysVersionData;
    }
    /**
     * @description Get information about an existing backup.
     * @tags End-to-end encryption
     * @name GetRoomKeysVersion
     * @summary Get information about an existing backup.
     * @request GET:/_matrix/client/v3/room_keys/version/{version}
     * @secure
     */
    export namespace GetRoomKeysVersion {
        export type RequestParams = {
            /**
             * The backup version to get, as returned in the `version` parameter
             * of the response in
             * [`POST /_matrix/client/v3/room_keys/version`](https://spec.matrix.org/v1.5/client-server-api/#post_matrixclientv3room_keysversion)
             * or this endpoint.
             * @example "1"
             */
            version: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetRoomKeysVersionData;
    }
    /**
     * @description Update information about an existing backup.  Only `auth_data` can be modified.
     * @tags End-to-end encryption
     * @name PutRoomKeysVersion
     * @summary Update information about an existing backup.
     * @request PUT:/_matrix/client/v3/room_keys/version/{version}
     * @secure
     */
    export namespace PutRoomKeysVersion {
        export type RequestParams = {
            /**
             * The backup version to update, as returned in the `version`
             * parameter in the response of
             * [`POST /_matrix/client/v3/room_keys/version`](https://spec.matrix.org/v1.5/client-server-api/#post_matrixclientv3room_keysversion)
             * or [`GET /_matrix/client/v3/room_keys/version/{version}`](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3room_keysversionversion).
             * @example "1"
             */
            version: string;
        };
        export type RequestQuery = {};
        export type RequestBody = PutRoomKeysVersionPayload;
        export type RequestHeaders = {};
        export type ResponseBody = PutRoomKeysVersionData;
    }
    /**
     * @description Get a list of aliases maintained by the local server for the given room. This endpoint can be called by users who are in the room (external users receive an `M_FORBIDDEN` error response). If the room's `m.room.history_visibility` maps to `world_readable`, any user can call this endpoint. Servers may choose to implement additional access control checks here, such as allowing server administrators to view aliases regardless of membership. **Note:** Clients are recommended not to display this list of aliases prominently as they are not curated, unlike those listed in the `m.room.canonical_alias` state event.
     * @tags Room directory
     * @name GetLocalAliases
     * @summary Get a list of local aliases on a given room.
     * @request GET:/_matrix/client/v3/rooms/{roomId}/aliases
     * @secure
     */
    export namespace GetLocalAliases {
        export type RequestParams = {
            /**
             * The room ID to find local aliases of.
             * @example "!abc123:example.org"
             */
            roomId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetLocalAliasesData;
    }
    /**
     * @description Ban a user in the room. If the user is currently in the room, also kick them. When a user is banned from a room, they may not join it or be invited to it until they are unbanned. The caller must have the required power level in order to perform this operation.
     * @tags Room membership
     * @name Ban
     * @summary Ban a user in the room.
     * @request POST:/_matrix/client/v3/rooms/{roomId}/ban
     * @secure
     */
    export namespace Ban {
        export type RequestParams = {
            /**
             * The room identifier (not alias) from which the user should be banned.
             * @example "!e42d8c:matrix.org"
             */
            roomId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = BanPayload;
        export type RequestHeaders = {};
        export type ResponseBody = BanData;
    }
    /**
     * @description This API returns a number of events that happened just before and after the specified event. This allows clients to get the context surrounding an event. *Note*: This endpoint supports lazy-loading of room member events. See [Lazy-loading room members](https://spec.matrix.org/v1.5/client-server-api/#lazy-loading-room-members) for more information.
     * @tags Room participation
     * @name GetEventContext
     * @summary Get events and state around the specified event.
     * @request GET:/_matrix/client/v3/rooms/{roomId}/context/{eventId}
     * @secure
     */
    export namespace GetEventContext {
        export type RequestParams = {
            /**
             * The room to get events from.
             * @example "!636q39766251:example.com"
             */
            roomId: string;
            /**
             * The event to get context around.
             * @example "$f3h4d129462ha:example.com"
             */
            eventId: string;
        };
        export type RequestQuery = {
            /**
             * The maximum number of events to return. Default: 10.
             * @example 3
             */
            limit?: number;
            /**
             * A JSON `RoomEventFilter` to filter the returned events with. The
             * filter is only applied to `events_before`, `events_after`, and
             * `state`. It is not applied to the `event` itself. The filter may
             * be applied before or/and after the `limit` parameter - whichever the
             * homeserver prefers.
             *
             * See [Filtering](https://spec.matrix.org/v1.5/client-server-api/#filtering) for more information.
             * @example "66696p746572"
             */
            filter?: string;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetEventContextData;
    }
    /**
     * @description Get a single event based on `roomId/eventId`. You must have permission to retrieve this event e.g. by being a member in the room for this event.
     * @tags Room participation
     * @name GetOneRoomEvent
     * @summary Get a single event by event ID.
     * @request GET:/_matrix/client/v3/rooms/{roomId}/event/{eventId}
     * @secure
     */
    export namespace GetOneRoomEvent {
        export type RequestParams = {
            /**
             * The ID of the room the event is in.
             * @example "!636q39766251:matrix.org"
             */
            roomId: string;
            /**
             * The event ID to get.
             * @example "$asfDuShaf7Gafaw:matrix.org"
             */
            eventId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetOneRoomEventData;
    }
    /**
     * @description This API stops a user remembering about a particular room. In general, history is a first class citizen in Matrix. After this API is called, however, a user will no longer be able to retrieve history for this room. If all users on a homeserver forget a room, the room is eligible for deletion from that homeserver. If the user is currently joined to the room, they must leave the room before calling this API.
     * @tags Room membership
     * @name ForgetRoom
     * @summary Stop the requesting user remembering about a particular room.
     * @request POST:/_matrix/client/v3/rooms/{roomId}/forget
     * @secure
     */
    export namespace ForgetRoom {
        export type RequestParams = {
            /**
             * The room identifier to forget.
             * @example "!au1ba7o:matrix.org"
             */
            roomId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = ForgetRoomData;
    }
    /**
     * @description Get a copy of the current state and the most recent messages in a room. This endpoint was deprecated in r0 of this specification. There is no direct replacement; the relevant information is returned by the [`/sync`](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3sync) API. See the [migration guide](https://matrix.org/docs/guides/migrating-from-client-server-api-v-1#deprecated-endpoints).
     * @tags Room participation
     * @name RoomInitialSync
     * @summary Snapshot the current state of a room and its most recent messages.
     * @request GET:/_matrix/client/v3/rooms/{roomId}/initialSync
     * @deprecated
     * @secure
     */
    export namespace RoomInitialSync {
        export type RequestParams = {
            /**
             * The room to get the data.
             * @example "!636q39766251:example.com"
             */
            roomId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = RoomInitialSyncData;
    }
    /**
     * @description *Note that there are two forms of this API, which are documented separately. This version of the API does not require that the inviter know the Matrix identifier of the invitee, and instead relies on third party identifiers. The homeserver uses an identity server to perform the mapping from third party identifier to a Matrix identifier. The other is documented in the* [joining rooms section](https://spec.matrix.org/v1.5/client-server-api/#post_matrixclientv3roomsroomidinvite). This API invites a user to participate in a particular room. They do not start participating in the room until they actually join the room. Only users currently in a particular room can invite other users to join that room. If the identity server did know the Matrix user identifier for the third party identifier, the homeserver will append a `m.room.member` event to the room. If the identity server does not know a Matrix user identifier for the passed third party identifier, the homeserver will issue an invitation which can be accepted upon providing proof of ownership of the third party identifier. This is achieved by the identity server generating a token, which it gives to the inviting homeserver. The homeserver will add an `m.room.third_party_invite` event into the graph for the room, containing that token. When the invitee binds the invited third party identifier to a Matrix user ID, the identity server will give the user a list of pending invitations, each containing: - The room ID to which they were invited - The token given to the homeserver - A signature of the token, signed with the identity server's private key - The matrix user ID who invited them to the room If a token is requested from the identity server, the homeserver will append a `m.room.third_party_invite` event to the room.
     * @tags Room membership
     * @name InviteBy3Pid
     * @summary Invite a user to participate in a particular room.
     * @request POST:/_matrix/client/v3/rooms/{roomId}/invite
     * @secure
     */
    export namespace InviteBy3Pid {
        export type RequestParams = {
            /**
             * The room identifier (not alias) to which to invite the user.
             * @example "!d41d8cd:matrix.org"
             */
            roomId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = InviteBy3PidPayload;
        export type RequestHeaders = {};
        export type ResponseBody = InviteBy3PidData;
    }
    /**
     * @description *Note that there are two forms of this API, which are documented separately. This version of the API requires that the inviter knows the Matrix identifier of the invitee. The other is documented in the [third party invites](https://spec.matrix.org/v1.5/client-server-api/#third-party-invites) section.* This API invites a user to participate in a particular room. They do not start participating in the room until they actually join the room. Only users currently in a particular room can invite other users to join that room. If the user was invited to the room, the homeserver will append a `m.room.member` event to the room.
     * @tags Room membership
     * @name InviteUser
     * @summary Invite a user to participate in a particular room.
     * @request POST:/_matrix/client/v3/rooms/{roomId}/invite
     * @secure
     */
    export namespace InviteUser {
        export type RequestParams = {
            /**
             * The room identifier (not alias) to which to invite the user.
             * @example "!d41d8cd:matrix.org"
             */
            roomId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = InviteUserPayload;
        export type RequestHeaders = {};
        export type ResponseBody = InviteUserData;
    }
    /**
     * @description *Note that this API requires a room ID, not alias.* `/join/{roomIdOrAlias}` *exists if you have a room alias.* This API starts a user participating in a particular room, if that user is allowed to participate in that room. After this call, the client is allowed to see all current state events in the room, and all subsequent events associated with the room until the user leaves the room. After a user has joined a room, the room will appear as an entry in the response of the [`/initialSync`](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3initialsync) and [`/sync`](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3sync) APIs.
     * @tags Room membership
     * @name JoinRoomById
     * @summary Start the requesting user participating in a particular room.
     * @request POST:/_matrix/client/v3/rooms/{roomId}/join
     * @secure
     */
    export namespace JoinRoomById {
        export type RequestParams = {
            /**
             * The room identifier (not alias) to join.
             * @example "!d41d8cd:matrix.org"
             */
            roomId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = JoinRoomByIdPayload;
        export type RequestHeaders = {};
        export type ResponseBody = JoinRoomByIdData;
    }
    /**
     * @description This API returns a map of MXIDs to member info objects for members of the room. The current user must be in the room for it to work, unless it is an Application Service in which case any of the AS's users must be in the room. This API is primarily for Application Services and should be faster to respond than `/members` as it can be implemented more efficiently on the server.
     * @tags Room participation
     * @name GetJoinedMembersByRoom
     * @summary Gets the list of currently joined users and their profile data.
     * @request GET:/_matrix/client/v3/rooms/{roomId}/joined_members
     * @secure
     */
    export namespace GetJoinedMembersByRoom {
        export type RequestParams = {
            /**
             * The room to get the members of.
             * @example "!636q39766251:example.com"
             */
            roomId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetJoinedMembersByRoomData;
    }
    /**
     * @description Kick a user from the room. The caller must have the required power level in order to perform this operation. Kicking a user adjusts the target member's membership state to be `leave` with an optional `reason`. Like with other membership changes, a user can directly adjust the target member's state by making a request to `/rooms/<room id>/state/m.room.member/<user id>`.
     * @tags Room membership
     * @name Kick
     * @summary Kick a user from the room.
     * @request POST:/_matrix/client/v3/rooms/{roomId}/kick
     * @secure
     */
    export namespace Kick {
        export type RequestParams = {
            /**
             * The room identifier (not alias) from which the user should be kicked.
             * @example "!e42d8c:matrix.org"
             */
            roomId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = KickPayload;
        export type RequestHeaders = {};
        export type ResponseBody = KickData;
    }
    /**
     * @description This API stops a user participating in a particular room. If the user was already in the room, they will no longer be able to see new events in the room. If the room requires an invite to join, they will need to be re-invited before they can re-join. If the user was invited to the room, but had not joined, this call serves to reject the invite. The user will still be allowed to retrieve history from the room which they were previously allowed to see.
     * @tags Room membership
     * @name LeaveRoom
     * @summary Stop the requesting user participating in a particular room.
     * @request POST:/_matrix/client/v3/rooms/{roomId}/leave
     * @secure
     */
    export namespace LeaveRoom {
        export type RequestParams = {
            /**
             * The room identifier to leave.
             * @example "!nkl290a:matrix.org"
             */
            roomId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = LeaveRoomPayload;
        export type RequestHeaders = {};
        export type ResponseBody = LeaveRoomData;
    }
    /**
     * @description Get the list of members for this room.
     * @tags Room participation
     * @name GetMembersByRoom
     * @summary Get the m.room.member events for the room.
     * @request GET:/_matrix/client/v3/rooms/{roomId}/members
     * @secure
     */
    export namespace GetMembersByRoom {
        export type RequestParams = {
            /**
             * The room to get the member events for.
             * @example "!636q39766251:example.com"
             */
            roomId: string;
        };
        export type RequestQuery = {
            /**
             * The point in time (pagination token) to return members for in the room.
             * This token can be obtained from a `prev_batch` token returned for
             * each room by the sync API. Defaults to the current state of the room,
             * as determined by the server.
             * @example "YWxsCgpOb25lLDM1ODcwOA"
             */
            at?: string;
            /**
             * The kind of membership to filter for. Defaults to no filtering if
             * unspecified. When specified alongside `not_membership`, the two
             * parameters create an 'or' condition: either the membership *is*
             * the same as `membership` **or** *is not* the same as `not_membership`.
             * @example "join"
             */
            membership?: "join" | "invite" | "knock" | "leave" | "ban";
            /**
             * The kind of membership to exclude from the results. Defaults to no
             * filtering if unspecified.
             * @example "leave"
             */
            not_membership?: "join" | "invite" | "knock" | "leave" | "ban";
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetMembersByRoomData;
    }
    /**
     * @description This API returns a list of message and state events for a room. It uses pagination query parameters to paginate history in the room. *Note*: This endpoint supports lazy-loading of room member events. See [Lazy-loading room members](https://spec.matrix.org/v1.5/client-server-api/#lazy-loading-room-members) for more information.
     * @tags Room participation
     * @name GetRoomEvents
     * @summary Get a list of events for this room
     * @request GET:/_matrix/client/v3/rooms/{roomId}/messages
     * @secure
     */
    export namespace GetRoomEvents {
        export type RequestParams = {
            /**
             * The room to get events from.
             * @example "!636q39766251:example.com"
             */
            roomId: string;
        };
        export type RequestQuery = {
            /**
             * The token to start returning events from. This token can be obtained
             * from a `prev_batch` or `next_batch` token returned by the `/sync` endpoint,
             * or from an `end` token returned by a previous request to this endpoint.
             *
             * This endpoint can also accept a value returned as a `start` token
             * by a previous request to this endpoint, though servers are not
             * required to support this. Clients should not rely on the behaviour.
             *
             * If it is not provided, the homeserver shall return a list of messages
             * from the first or last (per the value of the `dir` parameter) visible
             * event in the room history for the requesting user.
             * @example "s345_678_333"
             */
            from?: string;
            /**
             * The token to stop returning events at. This token can be obtained from
             * a `prev_batch` or `next_batch` token returned by the `/sync` endpoint,
             * or from an `end` token returned by a previous request to this endpoint.
             */
            to?: string;
            /**
             * The direction to return events from. If this is set to `f`, events
             * will be returned in chronological order starting at `from`. If it
             * is set to `b`, events will be returned in *reverse* chronological
             * order, again starting at `from`.
             * @example "b"
             */
            dir: "b" | "f";
            /**
             * The maximum number of events to return. Default: 10.
             * @example "3"
             */
            limit?: number;
            /**
             * A JSON RoomEventFilter to filter returned events with.
             * @example "{"contains_url":true}"
             */
            filter?: string;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetRoomEventsData;
    }
    /**
     * @description Sets the position of the read marker for a given room, and optionally the read receipt's location.
     * @tags Read Markers
     * @name SetReadMarker
     * @summary Set the position of the read marker for a room.
     * @request POST:/_matrix/client/v3/rooms/{roomId}/read_markers
     * @secure
     */
    export namespace SetReadMarker {
        export type RequestParams = {
            /**
             * The room ID to set the read marker in for the user.
             * @example "!somewhere:example.org"
             */
            roomId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = SetReadMarkerPayload;
        export type RequestHeaders = {};
        export type ResponseBody = SetReadMarkerData;
    }
    /**
     * @description This API updates the marker for the given receipt type to the event ID specified.
     * @tags Room participation
     * @name PostReceipt
     * @summary Send a receipt for the given event ID.
     * @request POST:/_matrix/client/v3/rooms/{roomId}/receipt/{receiptType}/{eventId}
     * @secure
     */
    export namespace PostReceipt {
        export type RequestParams = {
            /**
             * The room in which to send the event.
             * @example "!wefuh21ffskfuh345:example.com"
             */
            roomId: string;
            /**
             * The type of receipt to send. This can also be `m.fully_read` as an
             * alternative to [`/read_makers`](https://spec.matrix.org/v1.5/client-server-api/#post_matrixclientv3roomsroomidread_markers).
             *
             * Note that `m.fully_read` does not appear under `m.receipt`: this endpoint
             * effectively calls `/read_markers` internally when presented with a receipt
             * type of `m.fully_read`.
             * @example "m.read"
             */
            receiptType: "m.read" | "m.read.private" | "m.fully_read";
            /**
             * The event ID to acknowledge up to.
             * @example "$1924376522eioj:example.com"
             */
            eventId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = PostReceiptPayload;
        export type RequestHeaders = {};
        export type ResponseBody = PostReceiptData;
    }
    /**
     * @description Strips all information out of an event which isn't critical to the integrity of the server-side representation of the room. This cannot be undone. Any user with a power level greater than or equal to the `m.room.redaction` event power level may send redaction events in the room. If the user's power level greater is also greater than or equal to the `redact` power level of the room, the user may redact events sent by other users. Server administrators may redact events sent by users on their server.
     * @tags Room participation
     * @name RedactEvent
     * @summary Strips all non-integrity-critical information out of an event.
     * @request PUT:/_matrix/client/v3/rooms/{roomId}/redact/{eventId}/{txnId}
     * @secure
     */
    export namespace RedactEvent {
        export type RequestParams = {
            /**
             * The room from which to redact the event.
             * @example "!637q39766251:example.com"
             */
            roomId: string;
            /**
             * The ID of the event to redact
             * @example "bai2b1i9:matrix.org"
             */
            eventId: string;
            /**
             * The [transaction ID](https://spec.matrix.org/v1.5/client-server-api/#transaction-identifiers) for this event. Clients should generate a
             * unique ID; it will be used by the server to ensure idempotency of requests.
             * @example "37"
             */
            txnId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = RedactEventPayload;
        export type RequestHeaders = {};
        export type ResponseBody = RedactEventData;
    }
    /**
     * @description Reports an event as inappropriate to the server, which may then notify the appropriate people.
     * @tags Reporting content
     * @name ReportContent
     * @summary Reports an event as inappropriate.
     * @request POST:/_matrix/client/v3/rooms/{roomId}/report/{eventId}
     * @secure
     */
    export namespace ReportContent {
        export type RequestParams = {
            /**
             * The room in which the event being reported is located.
             * @example "!637q39766251:example.com"
             */
            roomId: string;
            /**
             * The event to report.
             * @example "$something:example.org"
             */
            eventId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = ReportContentPayload;
        export type RequestHeaders = {};
        export type ResponseBody = ReportContentData;
    }
    /**
     * @description This endpoint is used to send a message event to a room. Message events allow access to historical events and pagination, making them suited for "once-off" activity in a room. The body of the request should be the content object of the event; the fields in this object will vary depending on the type of event. See [Room Events](https://spec.matrix.org/v1.5/client-server-api/#room-events) for the m. event specification.
     * @tags Room participation
     * @name SendMessage
     * @summary Send a message event to the given room.
     * @request PUT:/_matrix/client/v3/rooms/{roomId}/send/{eventType}/{txnId}
     * @secure
     */
    export namespace SendMessage {
        export type RequestParams = {
            /**
             * The room to send the event to.
             * @example "!636q39766251:example.com"
             */
            roomId: string;
            /**
             * The type of event to send.
             * @example "m.room.message"
             */
            eventType: string;
            /**
             * The [transaction ID](https://spec.matrix.org/v1.5/client-server-api/#transaction-identifiers) for this event. Clients should generate an
             * ID unique across requests with the same access token; it will be
             * used by the server to ensure idempotency of requests.
             * @example "35"
             */
            txnId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = SendMessagePayload;
        export type RequestHeaders = {};
        export type ResponseBody = SendMessageData;
    }
    /**
     * @description Get the state events for the current state of a room.
     * @tags Room participation
     * @name GetRoomState
     * @summary Get all state events in the current state of a room.
     * @request GET:/_matrix/client/v3/rooms/{roomId}/state
     * @secure
     */
    export namespace GetRoomState {
        export type RequestParams = {
            /**
             * The room to look up the state for.
             * @example "!636q39766251:example.com"
             */
            roomId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetRoomStateData;
    }
    /**
     * @description Looks up the contents of a state event in a room. If the user is joined to the room then the state is taken from the current state of the room. If the user has left the room then the state is taken from the state of the room when they left.
     * @tags Room participation
     * @name GetRoomStateWithKey
     * @summary Get the state identified by the type and key.
     * @request GET:/_matrix/client/v3/rooms/{roomId}/state/{eventType}/{stateKey}
     * @secure
     */
    export namespace GetRoomStateWithKey {
        export type RequestParams = {
            /**
             * The room to look up the state in.
             * @example "!636q39766251:example.com"
             */
            roomId: string;
            /**
             * The type of state to look up.
             * @example "m.room.name"
             */
            eventType: string;
            /**
             * The key of the state to look up. Defaults to an empty string. When
             * an empty string, the trailing slash on this endpoint is optional.
             * @example ""
             */
            stateKey: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetRoomStateWithKeyData;
    }
    /**
     * @description State events can be sent using this endpoint.  These events will be overwritten if `<room id>`, `<event type>` and `<state key>` all match. Requests to this endpoint **cannot use transaction IDs** like other `PUT` paths because they cannot be differentiated from the `state_key`. Furthermore, `POST` is unsupported on state paths. The body of the request should be the content object of the event; the fields in this object will vary depending on the type of event. See [Room Events](https://spec.matrix.org/v1.5/client-server-api/#room-events) for the `m.` event specification. If the event type being sent is `m.room.canonical_alias` servers SHOULD ensure that any new aliases being listed in the event are valid per their grammar/syntax and that they point to the room ID where the state event is to be sent. Servers do not validate aliases which are being removed or are already present in the state event.
     * @tags Room participation
     * @name SetRoomStateWithKey
     * @summary Send a state event to the given room.
     * @request PUT:/_matrix/client/v3/rooms/{roomId}/state/{eventType}/{stateKey}
     * @secure
     */
    export namespace SetRoomStateWithKey {
        export type RequestParams = {
            /**
             * The room to set the state in
             * @example "!636q39766251:example.com"
             */
            roomId: string;
            /**
             * The type of event to send.
             * @example "m.room.member"
             */
            eventType: string;
            /**
             * The state_key for the state to send. Defaults to the empty string. When
             * an empty string, the trailing slash on this endpoint is optional.
             * @example "@alice:example.com"
             */
            stateKey: string;
        };
        export type RequestQuery = {};
        export type RequestBody = SetRoomStateWithKeyPayload;
        export type RequestHeaders = {};
        export type ResponseBody = SetRoomStateWithKeyData;
    }
    /**
     * @description This tells the server that the user is typing for the next N milliseconds where N is the value specified in the `timeout` key. Alternatively, if `typing` is `false`, it tells the server that the user has stopped typing.
     * @tags Room participation
     * @name SetTyping
     * @summary Informs the server that the user has started or stopped typing.
     * @request PUT:/_matrix/client/v3/rooms/{roomId}/typing/{userId}
     * @secure
     */
    export namespace SetTyping {
        export type RequestParams = {
            /**
             * The user who has started to type.
             * @example "@alice:example.com"
             */
            userId: string;
            /**
             * The room in which the user is typing.
             * @example "!wefh3sfukhs:example.com"
             */
            roomId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = SetTypingPayload;
        export type RequestHeaders = {};
        export type ResponseBody = SetTypingData;
    }
    /**
     * @description Unban a user from the room. This allows them to be invited to the room, and join if they would otherwise be allowed to join according to its join rules. The caller must have the required power level in order to perform this operation.
     * @tags Room membership
     * @name Unban
     * @summary Unban a user from the room.
     * @request POST:/_matrix/client/v3/rooms/{roomId}/unban
     * @secure
     */
    export namespace Unban {
        export type RequestParams = {
            /**
             * The room identifier (not alias) from which the user should be unbanned.
             * @example "!e42d8c:matrix.org"
             */
            roomId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = UnbanPayload;
        export type RequestHeaders = {};
        export type ResponseBody = UnbanData;
    }
    /**
     * @description Upgrades the given room to a particular room version.
     * @tags Room upgrades
     * @name UpgradeRoom
     * @summary Upgrades a room to a new room version.
     * @request POST:/_matrix/client/v3/rooms/{roomId}/upgrade
     * @secure
     */
    export namespace UpgradeRoom {
        export type RequestParams = {
            /**
             * The ID of the room to upgrade.
             * @example "!oldroom:example.org"
             */
            roomId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = UpgradeRoomPayload;
        export type RequestHeaders = {};
        export type ResponseBody = UpgradeRoomData;
    }
    /**
     * @description Performs a full text search across different categories.
     * @tags Search
     * @name Search
     * @summary Perform a server-side search.
     * @request POST:/_matrix/client/v3/search
     * @secure
     */
    export namespace Search {
        export type RequestParams = {};
        export type RequestQuery = {
            /**
             * The point to return events from. If given, this should be a
             * `next_batch` result from a previous call to this endpoint.
             * @example "YWxsCgpOb25lLDM1ODcwOA"
             */
            next_batch?: string;
        };
        export type RequestBody = SearchPayload;
        export type RequestHeaders = {};
        export type ResponseBody = SearchData;
    }
    /**
     * @description This endpoint is used to send send-to-device events to a set of client devices.
     * @tags Send-to-Device messaging
     * @name SendToDevice
     * @summary Send an event to a given set of devices.
     * @request PUT:/_matrix/client/v3/sendToDevice/{eventType}/{txnId}
     * @secure
     */
    export namespace SendToDevice {
        export type RequestParams = {
            /**
             * The type of event to send.
             * @example "m.new_device"
             */
            eventType: string;
            /**
             * The [transaction ID](https://spec.matrix.org/v1.5/client-server-api/#transaction-identifiers) for this event. Clients should generate an
             * ID unique across requests with the same access token; it will be
             * used by the server to ensure idempotency of requests.
             * @example "35"
             */
            txnId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = SendToDevicePayload;
        export type RequestHeaders = {};
        export type ResponseBody = SendToDeviceData;
    }
    /**
     * @description Synchronise the client's state with the latest state on the server. Clients use this API when they first log in to get an initial snapshot of the state on the server, and then continue to call this API to get incremental deltas to the state, and to receive new messages. *Note*: This endpoint supports lazy-loading. See [Filtering](https://spec.matrix.org/v1.5/client-server-api/#filtering) for more information. Lazy-loading members is only supported on a `StateFilter` for this endpoint. When lazy-loading is enabled, servers MUST include the syncing user's own membership event when they join a room, or when the full state of rooms is requested, to aid discovering the user's avatar & displayname. Further, like other members, the user's own membership event is eligible for being considered redundant by the server. When a sync is `limited`, the server MUST return membership events for events in the gap (between `since` and the start of the returned timeline), regardless as to whether or not they are redundant. This ensures that joins/leaves and profile changes which occur during the gap are not lost. Note that the default behaviour of `state` is to include all membership events, alongside other state, when lazy-loading is not enabled.
     * @tags Room participation
     * @name Sync
     * @summary Synchronise the client's state and receive new messages.
     * @request GET:/_matrix/client/v3/sync
     * @secure
     */
    export namespace Sync {
        export type RequestParams = {};
        export type RequestQuery = {
            /**
             * The ID of a filter created using the filter API or a filter JSON
             * object encoded as a string. The server will detect whether it is
             * an ID or a JSON object by whether the first character is a `"{"`
             * open brace. Passing the JSON inline is best suited to one off
             * requests. Creating a filter using the filter API is recommended for
             * clients that reuse the same filter multiple times, for example in
             * long poll requests.
             *
             * See [Filtering](https://spec.matrix.org/v1.5/client-server-api/#filtering) for more information.
             * @example "66696p746572"
             */
            filter?: string;
            /**
             * A point in time to continue a sync from. This should be the
             * `next_batch` token returned by an earlier call to this endpoint.
             * @example "s72594_4483_1934"
             */
            since?: string;
            /**
             * Controls whether to include the full state for all rooms the user
             * is a member of.
             *
             * If this is set to `true`, then all state events will be returned,
             * even if `since` is non-empty. The timeline will still be limited
             * by the `since` parameter. In this case, the `timeout` parameter
             * will be ignored and the query will return immediately, possibly with
             * an empty timeline.
             *
             * If `false`, and `since` is non-empty, only state which has
             * changed since the point indicated by `since` will be returned.
             *
             * By default, this is `false`.
             * @example "false"
             */
            full_state?: boolean;
            /**
             * Controls whether the client is automatically marked as online by
             * polling this API. If this parameter is omitted then the client is
             * automatically marked as online when it uses this API. Otherwise if
             * the parameter is set to "offline" then the client is not marked as
             * being online when it uses this API. When set to "unavailable", the
             * client is marked as being idle.
             * @example "offline"
             */
            set_presence?: "offline" | "online" | "unavailable";
            /**
             * The maximum time to wait, in milliseconds, before returning this
             * request. If no events (or other data) become available before this
             * time elapses, the server will return a response with empty fields.
             *
             * By default, this is `0`, so the server will return immediately
             * even if the response is empty.
             * @example 30000
             */
            timeout?: number;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = SyncData;
    }
    /**
     * @description Retrieve an array of third party network locations from a Matrix room alias.
     * @tags Third Party Lookup
     * @name QueryLocationByAlias
     * @summary Reverse-lookup third party locations given a Matrix room alias.
     * @request GET:/_matrix/client/v3/thirdparty/location
     * @secure
     */
    export namespace QueryLocationByAlias {
        export type RequestParams = {};
        export type RequestQuery = {
            /**
             * The Matrix room alias to look up.
             * @example "#matrix:matrix.org"
             */
            alias: string;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = QueryLocationByAliasData;
    }
    /**
     * @description Requesting this endpoint with a valid protocol name results in a list of successful mapping results in a JSON array. Each result contains objects to represent the Matrix room or rooms that represent a portal to this third party network. Each has the Matrix room alias string, an identifier for the particular third party network protocol, and an object containing the network-specific fields that comprise this identifier. It should attempt to canonicalise the identifier as much as reasonably possible given the network type.
     * @tags Third Party Lookup
     * @name QueryLocationByProtocol
     * @summary Retrieve Matrix-side portals rooms leading to a third party location.
     * @request GET:/_matrix/client/v3/thirdparty/location/{protocol}
     * @secure
     */
    export namespace QueryLocationByProtocol {
        export type RequestParams = {
            /**
             * The protocol used to communicate to the third party network.
             * @example "irc"
             */
            protocol: string;
        };
        export type RequestQuery = {
            /**
             * One or more custom fields to help identify the third party
             * location.
             */
            searchFields?: string;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = QueryLocationByProtocolData;
    }
    /**
     * @description Fetches the metadata from the homeserver about a particular third party protocol.
     * @tags Third Party Lookup
     * @name GetProtocolMetadata
     * @summary Retrieve metadata about a specific protocol that the homeserver supports.
     * @request GET:/_matrix/client/v3/thirdparty/protocol/{protocol}
     * @secure
     */
    export namespace GetProtocolMetadata {
        export type RequestParams = {
            /**
             * The name of the protocol.
             * @example "irc"
             */
            protocol: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetProtocolMetadataData;
    }
    /**
     * @description Fetches the overall metadata about protocols supported by the homeserver. Includes both the available protocols and all fields required for queries against each protocol.
     * @tags Third Party Lookup
     * @name GetProtocols
     * @summary Retrieve metadata about all protocols that a homeserver supports.
     * @request GET:/_matrix/client/v3/thirdparty/protocols
     * @secure
     */
    export namespace GetProtocols {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetProtocolsData;
    }
    /**
     * @description Retrieve an array of third party users from a Matrix User ID.
     * @tags Third Party Lookup
     * @name QueryUserById
     * @summary Reverse-lookup third party users given a Matrix User ID.
     * @request GET:/_matrix/client/v3/thirdparty/user
     * @secure
     */
    export namespace QueryUserById {
        export type RequestParams = {};
        export type RequestQuery = {
            /**
             * The Matrix User ID to look up.
             * @example "@bob:matrix.org"
             */
            userid: string;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = QueryUserByIdData;
    }
    /**
     * @description Retrieve a Matrix User ID linked to a user on the third party service, given a set of user parameters.
     * @tags Third Party Lookup
     * @name QueryUserByProtocol
     * @summary Retrieve the Matrix User ID of a corresponding third party user.
     * @request GET:/_matrix/client/v3/thirdparty/user/{protocol}
     * @secure
     */
    export namespace QueryUserByProtocol {
        export type RequestParams = {
            /**
             * The name of the protocol.
             * @example "irc"
             */
            protocol: string;
        };
        export type RequestQuery = {
            /** One or more custom fields that are passed to the AS to help identify the user. */
            "fields..."?: string;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = QueryUserByProtocolData;
    }
    /**
     * @description Get some account data for the client. This config is only visible to the user that set the account data.
     * @tags User data
     * @name GetAccountData
     * @summary Get some account data for the user.
     * @request GET:/_matrix/client/v3/user/{userId}/account_data/{type}
     * @secure
     */
    export namespace GetAccountData {
        export type RequestParams = {
            /**
             * The ID of the user to get account data for. The access token must be
             * authorized to make requests for this user ID.
             * @example "@alice:example.com"
             */
            userId: string;
            /**
             * The event type of the account data to get. Custom types should be
             * namespaced to avoid clashes.
             * @example "org.example.custom.config"
             */
            type: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetAccountDataData;
    }
    /**
     * @description Set some account data for the client. This config is only visible to the user that set the account data. The config will be available to clients through the top-level `account_data` field in the homeserver response to [/sync](#get_matrixclientv3sync).
     * @tags User data
     * @name SetAccountData
     * @summary Set some account data for the user.
     * @request PUT:/_matrix/client/v3/user/{userId}/account_data/{type}
     * @secure
     */
    export namespace SetAccountData {
        export type RequestParams = {
            /**
             * The ID of the user to set account data for. The access token must be
             * authorized to make requests for this user ID.
             * @example "@alice:example.com"
             */
            userId: string;
            /**
             * The event type of the account data to set. Custom types should be
             * namespaced to avoid clashes.
             * @example "org.example.custom.config"
             */
            type: string;
        };
        export type RequestQuery = {};
        export type RequestBody = SetAccountDataPayload;
        export type RequestHeaders = {};
        export type ResponseBody = SetAccountDataData;
    }
    /**
     * @description Uploads a new filter definition to the homeserver. Returns a filter ID that may be used in future requests to restrict which events are returned to the client.
     * @tags Room participation
     * @name DefineFilter
     * @summary Upload a new filter.
     * @request POST:/_matrix/client/v3/user/{userId}/filter
     * @secure
     */
    export namespace DefineFilter {
        export type RequestParams = {
            /**
             * The id of the user uploading the filter. The access token must be authorized to make requests for this user id.
             * @example "@alice:example.com"
             */
            userId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = DefineFilterPayload;
        export type RequestHeaders = {};
        export type ResponseBody = DefineFilterData;
    }
    /**
     * No description
     * @tags Room participation
     * @name GetFilter
     * @summary Download a filter
     * @request GET:/_matrix/client/v3/user/{userId}/filter/{filterId}
     * @secure
     */
    export namespace GetFilter {
        export type RequestParams = {
            /**
             * The user ID to download a filter for.
             * @example "@alice:example.com"
             */
            userId: string;
            /**
             * The filter ID to download.
             * @example "66696p746572"
             */
            filterId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetFilterData;
    }
    /**
     * @description Gets an OpenID token object that the requester may supply to another service to verify their identity in Matrix. The generated token is only valid for exchanging for user information from the federation API for OpenID. The access token generated is only valid for the OpenID API. It cannot be used to request another OpenID access token or call `/sync`, for example.
     * @tags OpenID
     * @name RequestOpenIdToken
     * @summary Get an OpenID token object to verify the requester's identity.
     * @request POST:/_matrix/client/v3/user/{userId}/openid/request_token
     * @secure
     */
    export namespace RequestOpenIdToken {
        export type RequestParams = {
            /**
             * The user to request and OpenID token for. Should be the user who
             * is authenticated for the request.
             * @example "@alice:example.com"
             */
            userId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = RequestOpenIdTokenPayload;
        export type RequestHeaders = {};
        export type ResponseBody = RequestOpenIdTokenData;
    }
    /**
     * @description Get some account data for the client on a given room. This config is only visible to the user that set the account data.
     * @tags User data
     * @name GetAccountDataPerRoom
     * @summary Get some account data for the user that is specific to a room.
     * @request GET:/_matrix/client/v3/user/{userId}/rooms/{roomId}/account_data/{type}
     * @secure
     */
    export namespace GetAccountDataPerRoom {
        export type RequestParams = {
            /**
             * The ID of the user to get account data for. The access token must be
             * authorized to make requests for this user ID.
             * @example "@alice:example.com"
             */
            userId: string;
            /**
             * The ID of the room to get account data for.
             * @example "!726s6s6q:example.com"
             */
            roomId: string;
            /**
             * The event type of the account data to get. Custom types should be
             * namespaced to avoid clashes.
             * @example "org.example.custom.room.config"
             */
            type: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetAccountDataPerRoomData;
    }
    /**
     * @description Set some account data for the client on a given room. This config is only visible to the user that set the account data. The config will be delivered to clients in the per-room entries via [/sync](#get_matrixclientv3sync).
     * @tags User data
     * @name SetAccountDataPerRoom
     * @summary Set some account data for the user that is specific to a room.
     * @request PUT:/_matrix/client/v3/user/{userId}/rooms/{roomId}/account_data/{type}
     * @secure
     */
    export namespace SetAccountDataPerRoom {
        export type RequestParams = {
            /**
             * The ID of the user to set account data for. The access token must be
             * authorized to make requests for this user ID.
             * @example "@alice:example.com"
             */
            userId: string;
            /**
             * The ID of the room to set account data on.
             * @example "!726s6s6q:example.com"
             */
            roomId: string;
            /**
             * The event type of the account data to set. Custom types should be
             * namespaced to avoid clashes.
             * @example "org.example.custom.room.config"
             */
            type: string;
        };
        export type RequestQuery = {};
        export type RequestBody = SetAccountDataPerRoomPayload;
        export type RequestHeaders = {};
        export type ResponseBody = SetAccountDataPerRoomData;
    }
    /**
     * @description List the tags set by a user on a room.
     * @tags User data
     * @name GetRoomTags
     * @summary List the tags for a room.
     * @request GET:/_matrix/client/v3/user/{userId}/rooms/{roomId}/tags
     * @secure
     */
    export namespace GetRoomTags {
        export type RequestParams = {
            /**
             * The id of the user to get tags for. The access token must be
             * authorized to make requests for this user ID.
             * @example "@alice:example.com"
             */
            userId: string;
            /**
             * The ID of the room to get tags for.
             * @example "!726s6s6q:example.com"
             */
            roomId: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetRoomTagsData;
    }
    /**
     * @description Remove a tag from the room.
     * @tags User data
     * @name DeleteRoomTag
     * @summary Remove a tag from the room.
     * @request DELETE:/_matrix/client/v3/user/{userId}/rooms/{roomId}/tags/{tag}
     * @secure
     */
    export namespace DeleteRoomTag {
        export type RequestParams = {
            /**
             * The id of the user to remove a tag for. The access token must be
             * authorized to make requests for this user ID.
             * @example "@alice:example.com"
             */
            userId: string;
            /**
             * The ID of the room to remove a tag from.
             * @example "!726s6s6q:example.com"
             */
            roomId: string;
            /**
             * The tag to remove.
             * @example "u.work"
             */
            tag: string;
        };
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = DeleteRoomTagData;
    }
    /**
     * @description Add a tag to the room.
     * @tags User data
     * @name SetRoomTag
     * @summary Add a tag to a room.
     * @request PUT:/_matrix/client/v3/user/{userId}/rooms/{roomId}/tags/{tag}
     * @secure
     */
    export namespace SetRoomTag {
        export type RequestParams = {
            /**
             * The id of the user to add a tag for. The access token must be
             * authorized to make requests for this user ID.
             * @example "@alice:example.com"
             */
            userId: string;
            /**
             * The ID of the room to add a tag to.
             * @example "!726s6s6q:example.com"
             */
            roomId: string;
            /**
             * The tag to add.
             * @example "u.work"
             */
            tag: string;
        };
        export type RequestQuery = {};
        export type RequestBody = SetRoomTagPayload;
        export type RequestHeaders = {};
        export type ResponseBody = SetRoomTagData;
    }
    /**
     * @description Performs a search for users. The homeserver may determine which subset of users are searched, however the homeserver MUST at a minimum consider the users the requesting user shares a room with and those who reside in public rooms (known to the homeserver). The search MUST consider local users to the homeserver, and SHOULD query remote users as part of the search. The search is performed case-insensitively on user IDs and display names preferably using a collation determined based upon the `Accept-Language` header provided in the request, if present.
     * @tags User directory
     * @name SearchUserDirectory
     * @summary Searches the user directory.
     * @request POST:/_matrix/client/v3/user_directory/search
     * @secure
     */
    export namespace SearchUserDirectory {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = SearchUserDirectoryPayload;
        export type RequestHeaders = {};
        export type ResponseBody = SearchUserDirectoryData;
    }
    /**
     * @description This API provides credentials for the client to use when initiating calls.
     * @tags VOIP
     * @name GetTurnServer
     * @summary Obtain TURN server credentials.
     * @request GET:/_matrix/client/v3/voip/turnServer
     * @secure
     */
    export namespace GetTurnServer {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetTurnServerData;
    }
    /**
     * @description Gets the versions of the specification supported by the server. Values will take the form `vX.Y` or `rX.Y.Z` in historical cases. See [the Specification Versioning](../#specification-versions) for more information. The server may additionally advertise experimental features it supports through `unstable_features`. These features should be namespaced and may optionally include version information within their name if desired. Features listed here are not for optionally toggling parts of the Matrix specification and should only be used to advertise support for a feature which has not yet landed in the spec. For example, a feature currently undergoing the proposal process may appear here and eventually be taken off this list once the feature lands in the spec and the server deems it reasonable to do so. Servers may wish to keep advertising features here after they've been released into the spec to give clients a chance to upgrade appropriately. Additionally, clients should avoid using unstable features in their stable releases.
     * @tags Server administration
     * @name GetVersions
     * @summary Gets the versions of the specification supported by the server.
     * @request GET:/_matrix/client/versions
     */
    export namespace GetVersions {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetVersionsData;
    }
    /**
     * @description This endpoint allows clients to retrieve the configuration of the content repository, such as upload limitations. Clients SHOULD use this as a guide when using content repository endpoints. All values are intentionally left optional. Clients SHOULD follow the advice given in the field description when the field is not available. **NOTE:** Both clients and server administrators should be aware that proxies between the client and the server may affect the apparent behaviour of content repository APIs, for example, proxies may enforce a lower upload size limit than is advertised by the server on this endpoint.
     * @tags Media
     * @name GetConfig
     * @summary Get the configuration for the content repository.
     * @request GET:/_matrix/media/v3/config
     * @secure
     */
    export namespace GetConfig {
        export type RequestParams = {};
        export type RequestQuery = {};
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetConfigData;
    }
    /**
     * No description
     * @tags Media
     * @name GetContent
     * @summary Download content from the content repository.
     * @request GET:/_matrix/media/v3/download/{serverName}/{mediaId}
     */
    export namespace GetContent {
        export type RequestParams = {
            /**
             * The server name from the `mxc://` URI (the authoritory component)
             * @example "matrix.org"
             */
            serverName: string;
            /**
             * The media ID from the `mxc://` URI (the path component)
             * @example "ascERGshawAWawugaAcauga"
             */
            mediaId: string;
        };
        export type RequestQuery = {
            /**
             * Indicates to the server that it should not attempt to fetch the media if it is deemed
             * remote. This is to prevent routing loops where the server contacts itself. Defaults to
             * true if not provided.
             * @default true
             * @example false
             */
            allow_remote?: boolean;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetContentData;
    }
    /**
     * @description This will download content from the content repository (same as the previous endpoint) but replace the target file name with the one provided by the caller.
     * @tags Media
     * @name GetContentOverrideName
     * @summary Download content from the content repository overriding the file name
     * @request GET:/_matrix/media/v3/download/{serverName}/{mediaId}/{fileName}
     */
    export namespace GetContentOverrideName {
        export type RequestParams = {
            /**
             * The server name from the `mxc://` URI (the authoritory component)
             * @example "matrix.org"
             */
            serverName: string;
            /**
             * The media ID from the `mxc://` URI (the path component)
             * @example "ascERGshawAWawugaAcauga"
             */
            mediaId: string;
            /**
             * A filename to give in the `Content-Disposition` header.
             * @example "filename.jpg"
             */
            fileName: string;
        };
        export type RequestQuery = {
            /**
             * Indicates to the server that it should not attempt to fetch the media if it is deemed
             * remote. This is to prevent routing loops where the server contacts itself. Defaults to
             * true if not provided.
             * @default true
             * @example false
             */
            allow_remote?: boolean;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetContentOverrideNameData;
    }
    /**
     * @description Get information about a URL for the client. Typically this is called when a client sees a URL in a message and wants to render a preview for the user. **Note:** Clients should consider avoiding this endpoint for URLs posted in encrypted rooms. Encrypted rooms often contain more sensitive information the users do not want to share with the homeserver, and this can mean that the URLs being shared should also not be shared with the homeserver.
     * @tags Media
     * @name GetUrlPreview
     * @summary Get information about a URL for a client
     * @request GET:/_matrix/media/v3/preview_url
     * @secure
     */
    export namespace GetUrlPreview {
        export type RequestParams = {};
        export type RequestQuery = {
            /**
             * The URL to get a preview of.
             * @format uri
             * @example "https://matrix.org"
             */
            url: string;
            /**
             * The preferred point in time to return a preview for. The server may
             * return a newer version if it does not have the requested version
             * available.
             * @format int64
             * @example 1510610716656
             */
            ts?: number;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetUrlPreviewData;
    }
    /**
     * @description Download a thumbnail of content from the content repository. See the [Thumbnails](https://spec.matrix.org/v1.5/client-server-api/#thumbnails) section for more information.
     * @tags Media
     * @name GetContentThumbnail
     * @summary Download a thumbnail of content from the content repository
     * @request GET:/_matrix/media/v3/thumbnail/{serverName}/{mediaId}
     */
    export namespace GetContentThumbnail {
        export type RequestParams = {
            /**
             * The server name from the `mxc://` URI (the authoritory component)
             * @example "example.org"
             */
            serverName: string;
            /**
             * The media ID from the `mxc://` URI (the path component)
             * @example "ascERGshawAWawugaAcauga"
             */
            mediaId: string;
        };
        export type RequestQuery = {
            /**
             * The *desired* width of the thumbnail. The actual thumbnail may be
             * larger than the size specified.
             * @example 64
             */
            width: number;
            /**
             * The *desired* height of the thumbnail. The actual thumbnail may be
             * larger than the size specified.
             * @example 64
             */
            height: number;
            /**
             * The desired resizing method. See the [Thumbnails](https://spec.matrix.org/v1.5/client-server-api/#thumbnails)
             * section for more information.
             * @example "scale"
             */
            method?: "crop" | "scale";
            /**
             * Indicates to the server that it should not attempt to fetch
             * the media if it is deemed remote. This is to prevent routing loops
             * where the server contacts itself. Defaults to true if not provided.
             * @default true
             * @example false
             */
            allow_remote?: boolean;
        };
        export type RequestBody = never;
        export type RequestHeaders = {};
        export type ResponseBody = GetContentThumbnailData;
    }
    /**
     * No description
     * @tags Media
     * @name UploadContent
     * @summary Upload some content to the content repository.
     * @request POST:/_matrix/media/v3/upload
     * @secure
     */
    export namespace UploadContent {
        export type RequestParams = {};
        export type RequestQuery = {
            /**
             * The name of the file being uploaded
             * @example "War and Peace.pdf"
             */
            filename?: string;
        };
        export type RequestBody = UploadContentPayload;
        export type RequestHeaders = {
            /**
             * The content type of the file being uploaded
             * @example "application/pdf"
             */
            "Content-Type"?: string;
        };
        export type ResponseBody = UploadContentData;
    }
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseType;
    /** request body */
    body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
    securityWorker?: (
        securityData: SecurityDataType | null,
    ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
    secure?: boolean;
    format?: ResponseType;
}

export enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded",
    Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
    public instance: AxiosInstance;
    private securityData: SecurityDataType | null = null;
    private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
    private secure?: boolean;
    private format?: ResponseType;

    constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
        this.instance = axios.create({
            ...axiosConfig,
            baseURL: axiosConfig.baseURL || "https://{homeserver_address}/",
        });
        this.secure = secure;
        this.format = format;
        this.securityWorker = securityWorker;
    }

    public setSecurityData = (data: SecurityDataType | null) => {
        this.securityData = data;
    };

    protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
        const method = params1.method || (params2 && params2.method);

        return {
            ...this.instance.defaults,
            ...params1,
            ...(params2 || {}),
            headers: {
                ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
                ...(params1.headers || {}),
                ...((params2 && params2.headers) || {}),
            },
        };
    }

    protected stringifyFormItem(formItem: unknown) {
        if (typeof formItem === "object" && formItem !== null) {
            return JSON.stringify(formItem);
        } else {
            return `${formItem}`;
        }
    }

    protected createFormData(input: Record<string, unknown>): FormData {
        return Object.keys(input || {}).reduce((formData, key) => {
            const property = input[key];
            const propertyContent: any[] = property instanceof Array ? property : [property];

            for (const formItem of propertyContent) {
                const isFileType = formItem instanceof Blob || formItem instanceof File;
                formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
            }

            return formData;
        }, new FormData());
    }

    public request = async <T = any, _E = any>({
        secure,
        path,
        type,
        query,
        format,
        body,
        ...params
    }: FullRequestParams): Promise<AxiosResponse<T>> => {
        const secureParams =
            ((typeof secure === "boolean" ? secure : this.secure) &&
                this.securityWorker &&
                (await this.securityWorker(this.securityData))) ||
            {};
        const requestParams = this.mergeRequestParams(params, secureParams);
        const responseFormat = format || this.format || undefined;

        if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
            body = this.createFormData(body as Record<string, unknown>);
        }

        if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
            body = JSON.stringify(body);
        }

        return this.instance.request({
            ...requestParams,
            headers: {
                ...(requestParams.headers || {}),
                ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
            },
            params: query,
            responseType: responseFormat,
            data: body,
            url: path,
        });
    };
}

/**
 * @title Matrix Client-Server API
 * @version unstable
 * @baseUrl https://{homeserver_address}/
 */
export class MxHttpClient<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    wellKnown = {
        /**
         * @description Gets discovery information about the domain. The file may include additional keys, which MUST follow the Java package naming convention, e.g. `com.example.myapp.property`. This ensures property names are suitably namespaced for each application and reduces the risk of clashes. Note that this endpoint is not necessarily handled by the homeserver, but by another webserver, to be used for discovering the homeserver URL.
         *
         * @tags Server administration
         * @name GetWellknown
         * @summary Gets Matrix server discovery information about the domain.
         * @request GET:/.well-known/matrix/client
         */
        getWellknown: (params: RequestParams = {}) =>
            this.request<GetWellknownData, void>({
                path: `/.well-known/matrix/client`,
                method: "GET",
                ...params,
            }),
    };
    matrix = {
        /**
         * @description Queries the server to determine if a given registration token is still valid at the time of request. This is a point-in-time check where the token might still expire by the time it is used. Servers should be sure to rate limit this endpoint to avoid brute force attacks.
         *
         * @tags Account management
         * @name RegistrationTokenValidity
         * @summary Query if a given registration token is still valid.
         * @request GET:/_matrix/client/v1/register/m.login.registration_token/validity
         */
        registrationTokenValidity: (query: RegistrationTokenValidityParams, params: RequestParams = {}) =>
            this.request<RegistrationTokenValidityData, RegistrationTokenValidityError>({
                path: `/_matrix/client/v1/register/m.login.registration_token/validity`,
                method: "GET",
                query: query,
                ...params,
            }),

        /**
         * @description Paginates over the space tree in a depth-first manner to locate child rooms of a given space. Where a child room is unknown to the local server, federation is used to fill in the details. The servers listed in the `via` array should be contacted to attempt to fill in missing rooms. Only [`m.space.child`](#mspacechild) state events of the room are considered. Invalid child rooms and parent events are not covered by this endpoint.
         *
         * @tags Spaces
         * @name GetSpaceHierarchy
         * @summary Retrieve a portion of a space tree.
         * @request GET:/_matrix/client/v1/rooms/{roomId}/hierarchy
         * @secure
         */
        getSpaceHierarchy: ({ roomId, ...query }: GetSpaceHierarchyParams, params: RequestParams = {}) =>
            this.request<GetSpaceHierarchyData, GetSpaceHierarchyError>({
                path: `/_matrix/client/v1/rooms/${roomId}/hierarchy`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),

        /**
         * @description Retrieve all of the child events for a given parent event. Note that when paginating the `from` token should be "after" the `to` token in terms of topological ordering, because it is only possible to paginate "backwards" through events, starting at `from`. For example, passing a `from` token from page 2 of the results, and a `to` token from page 1, would return the empty set. The caller can use a `from` token from page 1 and a `to` token from page 2 to paginate over the same range, however.
         *
         * @tags Event relationships
         * @name GetRelatingEvents
         * @summary Get the child events for a given parent event.
         * @request GET:/_matrix/client/v1/rooms/{roomId}/relations/{eventId}
         * @secure
         */
        getRelatingEvents: ({ roomId, eventId, ...query }: GetRelatingEventsParams, params: RequestParams = {}) =>
            this.request<GetRelatingEventsData, GetRelatingEventsError>({
                path: `/_matrix/client/v1/rooms/${roomId}/relations/${eventId}`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),

        /**
         * @description Retrieve all of the child events for a given parent event which relate to the parent using the given `relType`. Note that when paginating the `from` token should be "after" the `to` token in terms of topological ordering, because it is only possible to paginate "backwards" through events, starting at `from`. For example, passing a `from` token from page 2 of the results, and a `to` token from page 1, would return the empty set. The caller can use a `from` token from page 1 and a `to` token from page 2 to paginate over the same range, however.
         *
         * @tags Event relationships
         * @name GetRelatingEventsWithRelType
         * @summary Get the child events for a given parent event, with a given `relType`.
         * @request GET:/_matrix/client/v1/rooms/{roomId}/relations/{eventId}/{relType}
         * @secure
         */
        getRelatingEventsWithRelType: (
            { roomId, eventId, relType, ...query }: GetRelatingEventsWithRelTypeParams,
            params: RequestParams = {},
        ) =>
            this.request<GetRelatingEventsWithRelTypeData, GetRelatingEventsWithRelTypeError>({
                path: `/_matrix/client/v1/rooms/${roomId}/relations/${eventId}/${relType}`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),

        /**
         * @description Retrieve all of the child events for a given parent event which relate to the parent using the given `relType` and have the given `eventType`. Note that when paginating the `from` token should be "after" the `to` token in terms of topological ordering, because it is only possible to paginate "backwards" through events, starting at `from`. For example, passing a `from` token from page 2 of the results, and a `to` token from page 1, would return the empty set. The caller can use a `from` token from page 1 and a `to` token from page 2 to paginate over the same range, however.
         *
         * @tags Event relationships
         * @name GetRelatingEventsWithRelTypeAndEventType
         * @summary Get the child events for a given parent event, with a given `relType` and `eventType`.
         * @request GET:/_matrix/client/v1/rooms/{roomId}/relations/{eventId}/{relType}/{eventType}
         * @secure
         */
        getRelatingEventsWithRelTypeAndEventType: (
            { roomId, eventId, relType, eventType, ...query }: GetRelatingEventsWithRelTypeAndEventTypeParams,
            params: RequestParams = {},
        ) =>
            this.request<GetRelatingEventsWithRelTypeAndEventTypeData, GetRelatingEventsWithRelTypeAndEventTypeError>({
                path: `/_matrix/client/v1/rooms/${roomId}/relations/${eventId}/${relType}/${eventType}`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),

        /**
         * @description Paginates over the thread roots in a room, ordered by the `latest_event` of each thread root in its bundle.
         *
         * @tags Threads
         * @name GetThreadRoots
         * @summary Retrieve a list of threads in a room, with optional filters.
         * @request GET:/_matrix/client/v1/rooms/{roomId}/threads
         * @secure
         */
        getThreadRoots: ({ roomId, ...query }: GetThreadRootsParams, params: RequestParams = {}) =>
            this.request<GetThreadRootsData, GetThreadRootsError>({
                path: `/_matrix/client/v1/rooms/${roomId}/threads`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),

        /**
         * @description Gets a list of the third party identifiers that the homeserver has associated with the user's account. This is *not* the same as the list of third party identifiers bound to the user's Matrix ID in identity servers. Identifiers in this list may be used by the homeserver as, for example, identifiers that it will accept to reset the user's account password.
         *
         * @tags Account management
         * @name GetAccount3PiDs
         * @summary Gets a list of a user's third party identifiers.
         * @request GET:/_matrix/client/v3/account/3pid
         * @secure
         */
        getAccount3PiDs: (params: RequestParams = {}) =>
            this.request<GetAccount3PiDsData, any>({
                path: `/_matrix/client/v3/account/3pid`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description Adds contact information to the user's account. This endpoint is deprecated in favour of the more specific `/3pid/add` and `/3pid/bind` endpoints. **Note:** Previously this endpoint supported a `bind` parameter. This parameter has been removed, making this endpoint behave as though it was `false`. This results in this endpoint being an equivalent to `/3pid/bind` rather than dual-purpose.
         *
         * @tags Account management
         * @name Post3PiDs
         * @summary Adds contact information to the user's account.
         * @request POST:/_matrix/client/v3/account/3pid
         * @deprecated
         * @secure
         */
        post3PiDs: (body: Post3PiDsPayload, params: RequestParams = {}) =>
            this.request<Post3PiDsData, Post3PiDsError>({
                path: `/_matrix/client/v3/account/3pid`,
                method: "POST",
                body: body,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description This API endpoint uses the [User-Interactive Authentication API](https://spec.matrix.org/v1.5/client-server-api/#user-interactive-authentication-api). Adds contact information to the user's account. Homeservers should use 3PIDs added through this endpoint for password resets instead of relying on the identity server. Homeservers should prevent the caller from adding a 3PID to their account if it has already been added to another user's account on the homeserver.
         *
         * @tags Account management
         * @name Add3Pid
         * @summary Adds contact information to the user's account.
         * @request POST:/_matrix/client/v3/account/3pid/add
         * @secure
         */
        add3Pid: (body: Add3PidPayload, params: RequestParams = {}) =>
            this.request<Add3PidData, Add3PidError>({
                path: `/_matrix/client/v3/account/3pid/add`,
                method: "POST",
                body: body,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Binds a 3PID to the user's account through the specified identity server. Homeservers should not prevent this request from succeeding if another user has bound the 3PID. Homeservers should simply proxy any errors received by the identity server to the caller. Homeservers should track successful binds so they can be unbound later.
         *
         * @tags Account management
         * @name Bind3Pid
         * @summary Binds a 3PID to the user's account through an Identity Service.
         * @request POST:/_matrix/client/v3/account/3pid/bind
         * @secure
         */
        bind3Pid: (body: Bind3PidPayload, params: RequestParams = {}) =>
            this.request<Bind3PidData, Bind3PidError>({
                path: `/_matrix/client/v3/account/3pid/bind`,
                method: "POST",
                body: body,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Removes a third party identifier from the user's account. This might not cause an unbind of the identifier from the identity server. Unlike other endpoints, this endpoint does not take an `id_access_token` parameter because the homeserver is expected to sign the request to the identity server instead.
         *
         * @tags Account management
         * @name Delete3PidFromAccount
         * @summary Deletes a third party identifier from the user's account
         * @request POST:/_matrix/client/v3/account/3pid/delete
         * @secure
         */
        delete3PidFromAccount: (
            body: {
                /**
                 * The third party address being removed.
                 * @example "example@example.org"
                 */
                address: string;
                /**
                 * The identity server to unbind from. If not provided, the homeserver
                 * MUST use the `id_server` the identifier was added through. If the
                 * homeserver does not know the original `id_server`, it MUST return
                 * a `id_server_unbind_result` of `no-support`.
                 * @example "example.org"
                 */
                id_server?: string;
                /**
                 * The medium of the third party identifier being removed.
                 * @example "email"
                 */
                medium: "email" | "msisdn";
            },
            params: RequestParams = {},
        ) =>
            this.request<Delete3PidFromAccountData, any>({
                path: `/_matrix/client/v3/account/3pid/delete`,
                method: "POST",
                body: body,
                secure: true,
                ...params,
            }),

        /**
         * @description The homeserver must check that the given email address is **not** already associated with an account on this homeserver. This API should be used to request validation tokens when adding an email address to an account. This API's parameters and response are identical to that of the [`/register/email/requestToken`](https://spec.matrix.org/v1.5/client-server-api/#post_matrixclientv3registeremailrequesttoken) endpoint. The homeserver should validate the email itself, either by sending a validation email itself or by using a service it has control over.
         *
         * @tags Account management
         * @name RequestTokenTo3PidEmail
         * @summary Begins the validation process for an email address for association with the user's account.
         * @request POST:/_matrix/client/v3/account/3pid/email/requestToken
         */
        requestTokenTo3PidEmail: (
            body: {
                /**
                 * A unique string generated by the client, and used to identify the
                 * validation attempt. It must be a string consisting of the characters
                 * `[0-9a-zA-Z.=_-]`. Its length must not exceed 255 characters and it
                 * must not be empty.
                 * @example "monkeys_are_GREAT"
                 */
                client_secret: string;
                /**
                 * The email address to validate.
                 * @example "alice@example.org"
                 */
                email: string;
                /**
                 * Optional. When the validation is completed, the identity server will
                 * redirect the user to this URL. This option is ignored when submitting
                 * 3PID validation information through a POST request.
                 * @example "https://example.org/congratulations.html"
                 */
                next_link?: string;
                /**
                 * The server will only send an email if the `send_attempt`
                 * is a number greater than the most recent one which it has seen,
                 * scoped to that `email` + `client_secret` pair. This is to
                 * avoid repeatedly sending the same email in the case of request
                 * retries between the POSTing user and the identity server.
                 * The client should increment this value if they desire a new
                 * email (e.g. a reminder) to be sent. If they do not, the server
                 * should respond with success but not resend the email.
                 * @example 1
                 */
                send_attempt: number;
            } & {
                /**
                 * An access token previously registered with the identity server. Servers
                 * can treat this as optional to distinguish between r0.5-compatible clients
                 * and this specification version.
                 *
                 * Required if an `id_server` is supplied.
                 */
                id_access_token?: string;
                /**
                 * The hostname of the identity server to communicate with. May optionally
                 * include a port. This parameter is ignored when the homeserver handles
                 * 3PID verification.
                 *
                 * This parameter is deprecated with a plan to be removed in a future specification
                 * version for `/account/password` and `/register` requests.
                 * @example "id.example.com"
                 */
                id_server?: string;
            },
            params: RequestParams = {},
        ) =>
            this.request<RequestTokenTo3PidEmailData, RequestTokenTo3PidEmailError>({
                path: `/_matrix/client/v3/account/3pid/email/requestToken`,
                method: "POST",
                body: body,
                ...params,
            }),

        /**
         * @description The homeserver must check that the given phone number is **not** already associated with an account on this homeserver. This API should be used to request validation tokens when adding a phone number to an account. This API's parameters and response are identical to that of the [`/register/msisdn/requestToken`](https://spec.matrix.org/v1.5/client-server-api/#post_matrixclientv3registermsisdnrequesttoken) endpoint. The homeserver should validate the phone number itself, either by sending a validation message itself or by using a service it has control over.
         *
         * @tags Account management
         * @name RequestTokenTo3Pidmsisdn
         * @summary Begins the validation process for a phone number for association with the user's account.
         * @request POST:/_matrix/client/v3/account/3pid/msisdn/requestToken
         */
        requestTokenTo3Pidmsisdn: (
            body: {
                /**
                 * A unique string generated by the client, and used to identify the
                 * validation attempt. It must be a string consisting of the characters
                 * `[0-9a-zA-Z.=_-]`. Its length must not exceed 255 characters and it
                 * must not be empty.
                 * @example "monkeys_are_GREAT"
                 */
                client_secret: string;
                /**
                 * The two-letter uppercase ISO-3166-1 alpha-2 country code that the
                 * number in `phone_number` should be parsed as if it were dialled from.
                 * @example "GB"
                 */
                country: string;
                /**
                 * Optional. When the validation is completed, the identity server will
                 * redirect the user to this URL. This option is ignored when submitting
                 * 3PID validation information through a POST request.
                 * @example "https://example.org/congratulations.html"
                 */
                next_link?: string;
                /**
                 * The phone number to validate.
                 * @example "07700900001"
                 */
                phone_number: string;
                /**
                 * The server will only send an SMS if the `send_attempt` is a
                 * number greater than the most recent one which it has seen,
                 * scoped to that `country` + `phone_number` + `client_secret`
                 * triple. This is to avoid repeatedly sending the same SMS in
                 * the case of request retries between the POSTing user and the
                 * identity server. The client should increment this value if
                 * they desire a new SMS (e.g. a reminder) to be sent.
                 * @example 1
                 */
                send_attempt: number;
            } & {
                /**
                 * An access token previously registered with the identity server. Servers
                 * can treat this as optional to distinguish between r0.5-compatible clients
                 * and this specification version.
                 *
                 * Required if an `id_server` is supplied.
                 */
                id_access_token?: string;
                /**
                 * The hostname of the identity server to communicate with. May optionally
                 * include a port. This parameter is ignored when the homeserver handles
                 * 3PID verification.
                 *
                 * This parameter is deprecated with a plan to be removed in a future specification
                 * version for `/account/password` and `/register` requests.
                 * @example "id.example.com"
                 */
                id_server?: string;
            },
            params: RequestParams = {},
        ) =>
            this.request<RequestTokenTo3PidmsisdnData, RequestTokenTo3PidmsisdnError>({
                path: `/_matrix/client/v3/account/3pid/msisdn/requestToken`,
                method: "POST",
                body: body,
                ...params,
            }),

        /**
         * @description Removes a user's third party identifier from the provided identity server without removing it from the homeserver. Unlike other endpoints, this endpoint does not take an `id_access_token` parameter because the homeserver is expected to sign the request to the identity server instead.
         *
         * @tags Account management
         * @name Unbind3PidFromAccount
         * @summary Removes a user's third party identifier from an identity server.
         * @request POST:/_matrix/client/v3/account/3pid/unbind
         * @secure
         */
        unbind3PidFromAccount: (
            body: {
                /**
                 * The third party address being removed.
                 * @example "example@example.org"
                 */
                address: string;
                /**
                 * The identity server to unbind from. If not provided, the homeserver
                 * MUST use the `id_server` the identifier was added through. If the
                 * homeserver does not know the original `id_server`, it MUST return
                 * a `id_server_unbind_result` of `no-support`.
                 * @example "example.org"
                 */
                id_server?: string;
                /**
                 * The medium of the third party identifier being removed.
                 * @example "email"
                 */
                medium: "email" | "msisdn";
            },
            params: RequestParams = {},
        ) =>
            this.request<Unbind3PidFromAccountData, any>({
                path: `/_matrix/client/v3/account/3pid/unbind`,
                method: "POST",
                body: body,
                secure: true,
                ...params,
            }),

        /**
         * @description Deactivate the user's account, removing all ability for the user to login again. This API endpoint uses the [User-Interactive Authentication API](https://spec.matrix.org/v1.5/client-server-api/#user-interactive-authentication-api). An access token should be submitted to this endpoint if the client has an active session. The homeserver may change the flows available depending on whether a valid access token is provided. Unlike other endpoints, this endpoint does not take an `id_access_token` parameter because the homeserver is expected to sign the request to the identity server instead.
         *
         * @tags Account management
         * @name DeactivateAccount
         * @summary Deactivate a user's account.
         * @request POST:/_matrix/client/v3/account/deactivate
         * @secure
         */
        deactivateAccount: (body: DeactivateAccountPayload, params: RequestParams = {}) =>
            this.request<DeactivateAccountData, DeactivateAccountError>({
                path: `/_matrix/client/v3/account/deactivate`,
                method: "POST",
                body: body,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Changes the password for an account on this homeserver. This API endpoint uses the [User-Interactive Authentication API](https://spec.matrix.org/v1.5/client-server-api/#user-interactive-authentication-api) to ensure the user changing the password is actually the owner of the account. An access token should be submitted to this endpoint if the client has an active session. The homeserver may change the flows available depending on whether a valid access token is provided. The homeserver SHOULD NOT revoke the access token provided in the request. Whether other access tokens for the user are revoked depends on the request parameters.
         *
         * @tags Account management
         * @name ChangePassword
         * @summary Changes a user's password.
         * @request POST:/_matrix/client/v3/account/password
         * @secure
         */
        changePassword: (body: ChangePasswordPayload, params: RequestParams = {}) =>
            this.request<ChangePasswordData, ChangePasswordError>({
                path: `/_matrix/client/v3/account/password`,
                method: "POST",
                body: body,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description The homeserver must check that the given email address **is associated** with an account on this homeserver. This API should be used to request validation tokens when authenticating for the `/account/password` endpoint. This API's parameters and response are identical to that of the [`/register/email/requestToken`](https://spec.matrix.org/v1.5/client-server-api/#post_matrixclientv3registeremailrequesttoken) endpoint, except that `M_THREEPID_NOT_FOUND` may be returned if no account matching the given email address could be found. The server may instead send an email to the given address prompting the user to create an account. `M_THREEPID_IN_USE` may not be returned. The homeserver should validate the email itself, either by sending a validation email itself or by using a service it has control over.
         *
         * @tags Account management
         * @name RequestTokenToResetPasswordEmail
         * @summary Requests a validation token be sent to the given email address for the purpose of resetting a user's password
         * @request POST:/_matrix/client/v3/account/password/email/requestToken
         */
        requestTokenToResetPasswordEmail: (
            body: {
                /**
                 * A unique string generated by the client, and used to identify the
                 * validation attempt. It must be a string consisting of the characters
                 * `[0-9a-zA-Z.=_-]`. Its length must not exceed 255 characters and it
                 * must not be empty.
                 * @example "monkeys_are_GREAT"
                 */
                client_secret: string;
                /**
                 * The email address to validate.
                 * @example "alice@example.org"
                 */
                email: string;
                /**
                 * Optional. When the validation is completed, the identity server will
                 * redirect the user to this URL. This option is ignored when submitting
                 * 3PID validation information through a POST request.
                 * @example "https://example.org/congratulations.html"
                 */
                next_link?: string;
                /**
                 * The server will only send an email if the `send_attempt`
                 * is a number greater than the most recent one which it has seen,
                 * scoped to that `email` + `client_secret` pair. This is to
                 * avoid repeatedly sending the same email in the case of request
                 * retries between the POSTing user and the identity server.
                 * The client should increment this value if they desire a new
                 * email (e.g. a reminder) to be sent. If they do not, the server
                 * should respond with success but not resend the email.
                 * @example 1
                 */
                send_attempt: number;
            } & {
                /**
                 * An access token previously registered with the identity server. Servers
                 * can treat this as optional to distinguish between r0.5-compatible clients
                 * and this specification version.
                 *
                 * Required if an `id_server` is supplied.
                 */
                id_access_token?: string;
                /**
                 * The hostname of the identity server to communicate with. May optionally
                 * include a port. This parameter is ignored when the homeserver handles
                 * 3PID verification.
                 *
                 * This parameter is deprecated with a plan to be removed in a future specification
                 * version for `/account/password` and `/register` requests.
                 * @example "id.example.com"
                 */
                id_server?: string;
            },
            params: RequestParams = {},
        ) =>
            this.request<RequestTokenToResetPasswordEmailData, RequestTokenToResetPasswordEmailError>({
                path: `/_matrix/client/v3/account/password/email/requestToken`,
                method: "POST",
                body: body,
                ...params,
            }),

        /**
         * @description The homeserver must check that the given phone number **is associated** with an account on this homeserver. This API should be used to request validation tokens when authenticating for the `/account/password` endpoint. This API's parameters and response are identical to that of the [`/register/msisdn/requestToken`](https://spec.matrix.org/v1.5/client-server-api/#post_matrixclientv3registermsisdnrequesttoken) endpoint, except that `M_THREEPID_NOT_FOUND` may be returned if no account matching the given phone number could be found. The server may instead send the SMS to the given phone number prompting the user to create an account. `M_THREEPID_IN_USE` may not be returned. The homeserver should validate the phone number itself, either by sending a validation message itself or by using a service it has control over.
         *
         * @tags Account management
         * @name RequestTokenToResetPasswordMsisdn
         * @summary Requests a validation token be sent to the given phone number for the purpose of resetting a user's password.
         * @request POST:/_matrix/client/v3/account/password/msisdn/requestToken
         */
        requestTokenToResetPasswordMsisdn: (
            body: {
                /**
                 * A unique string generated by the client, and used to identify the
                 * validation attempt. It must be a string consisting of the characters
                 * `[0-9a-zA-Z.=_-]`. Its length must not exceed 255 characters and it
                 * must not be empty.
                 * @example "monkeys_are_GREAT"
                 */
                client_secret: string;
                /**
                 * The two-letter uppercase ISO-3166-1 alpha-2 country code that the
                 * number in `phone_number` should be parsed as if it were dialled from.
                 * @example "GB"
                 */
                country: string;
                /**
                 * Optional. When the validation is completed, the identity server will
                 * redirect the user to this URL. This option is ignored when submitting
                 * 3PID validation information through a POST request.
                 * @example "https://example.org/congratulations.html"
                 */
                next_link?: string;
                /**
                 * The phone number to validate.
                 * @example "07700900001"
                 */
                phone_number: string;
                /**
                 * The server will only send an SMS if the `send_attempt` is a
                 * number greater than the most recent one which it has seen,
                 * scoped to that `country` + `phone_number` + `client_secret`
                 * triple. This is to avoid repeatedly sending the same SMS in
                 * the case of request retries between the POSTing user and the
                 * identity server. The client should increment this value if
                 * they desire a new SMS (e.g. a reminder) to be sent.
                 * @example 1
                 */
                send_attempt: number;
            } & {
                /**
                 * An access token previously registered with the identity server. Servers
                 * can treat this as optional to distinguish between r0.5-compatible clients
                 * and this specification version.
                 *
                 * Required if an `id_server` is supplied.
                 */
                id_access_token?: string;
                /**
                 * The hostname of the identity server to communicate with. May optionally
                 * include a port. This parameter is ignored when the homeserver handles
                 * 3PID verification.
                 *
                 * This parameter is deprecated with a plan to be removed in a future specification
                 * version for `/account/password` and `/register` requests.
                 * @example "id.example.com"
                 */
                id_server?: string;
            },
            params: RequestParams = {},
        ) =>
            this.request<RequestTokenToResetPasswordMsisdnData, RequestTokenToResetPasswordMsisdnError>({
                path: `/_matrix/client/v3/account/password/msisdn/requestToken`,
                method: "POST",
                body: body,
                ...params,
            }),

        /**
         * @description Gets information about the owner of a given access token. Note that, as with the rest of the Client-Server API, Application Services may masquerade as users within their namespace by giving a `user_id` query parameter. In this situation, the server should verify that the given `user_id` is registered by the appservice, and return it in the response body.
         *
         * @tags Session management
         * @name GetTokenOwner
         * @summary Gets information about the owner of an access token.
         * @request GET:/_matrix/client/v3/account/whoami
         * @secure
         */
        getTokenOwner: (params: RequestParams = {}) =>
            this.request<GetTokenOwnerData, GetTokenOwnerError>({
                path: `/_matrix/client/v3/account/whoami`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description Gets information about a particular user. This API may be restricted to only be called by the user being looked up, or by a server admin. Server-local administrator privileges are not specified in this document.
         *
         * @tags Server administration
         * @name GetWhoIs
         * @summary Gets information about a particular user.
         * @request GET:/_matrix/client/v3/admin/whois/{userId}
         * @secure
         */
        getWhoIs: (userId: string, params: RequestParams = {}) =>
            this.request<GetWhoIsData, any>({
                path: `/_matrix/client/v3/admin/whois/${userId}`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description Gets information about the server's supported feature set and other relevant capabilities.
         *
         * @tags Capabilities
         * @name GetCapabilities
         * @summary Gets information about the server's capabilities.
         * @request GET:/_matrix/client/v3/capabilities
         * @secure
         */
        getCapabilities: (params: RequestParams = {}) =>
            this.request<GetCapabilitiesData, GetCapabilitiesError>({
                path: `/_matrix/client/v3/capabilities`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description Create a new room with various configuration options. The server MUST apply the normal state resolution rules when creating the new room, including checking power levels for each event. It MUST apply the events implied by the request in the following order: 1. The `m.room.create` event itself. Must be the first event in the room. 2. An `m.room.member` event for the creator to join the room. This is needed so the remaining events can be sent. 3. A default `m.room.power_levels` event, giving the room creator (and not other members) permission to send state events. Overridden by the `power_level_content_override` parameter. 4. An `m.room.canonical_alias` event if `room_alias_name` is given. 5. Events set by the `preset`. Currently these are the `m.room.join_rules`, `m.room.history_visibility`, and `m.room.guest_access` state events. 6. Events listed in `initial_state`, in the order that they are listed. 7. Events implied by `name` and `topic` (`m.room.name` and `m.room.topic` state events). 8. Invite events implied by `invite` and `invite_3pid` (`m.room.member` with `membership: invite` and `m.room.third_party_invite`). The available presets do the following with respect to room state: | Preset                 | `join_rules` | `history_visibility` | `guest_access` | Other | |------------------------|--------------|----------------------|----------------|-------| | `private_chat`         | `invite`     | `shared`             | `can_join`     |       | | `trusted_private_chat` | `invite`     | `shared`             | `can_join`     | All invitees are given the same power level as the room creator. | | `public_chat`          | `public`     | `shared`             | `forbidden`    |       | The server will create a `m.room.create` event in the room with the requesting user as the creator, alongside other keys provided in the `creation_content`.
         *
         * @tags Room creation
         * @name CreateRoom
         * @summary Create a new room
         * @request POST:/_matrix/client/v3/createRoom
         * @secure
         */
        createRoom: (body: CreateRoomPayload, params: RequestParams = {}) =>
            this.request<CreateRoomData, CreateRoomError>({
                path: `/_matrix/client/v3/createRoom`,
                method: "POST",
                body: body,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description This API endpoint uses the [User-Interactive Authentication API](https://spec.matrix.org/v1.5/client-server-api/#user-interactive-authentication-api). Deletes the given devices, and invalidates any access token associated with them.
         *
         * @tags Device management
         * @name DeleteDevices
         * @summary Bulk deletion of devices
         * @request POST:/_matrix/client/v3/delete_devices
         * @secure
         */
        deleteDevices: (body: DeleteDevicesPayload, params: RequestParams = {}) =>
            this.request<DeleteDevicesData, DeleteDevicesError>({
                path: `/_matrix/client/v3/delete_devices`,
                method: "POST",
                body: body,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Gets information about all devices for the current user.
         *
         * @tags Device management
         * @name GetDevices
         * @summary List registered devices for the current user
         * @request GET:/_matrix/client/v3/devices
         * @secure
         */
        getDevices: (params: RequestParams = {}) =>
            this.request<GetDevicesData, any>({
                path: `/_matrix/client/v3/devices`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description This API endpoint uses the [User-Interactive Authentication API](https://spec.matrix.org/v1.5/client-server-api/#user-interactive-authentication-api). Deletes the given device, and invalidates any access token associated with it.
         *
         * @tags Device management
         * @name DeleteDevice
         * @summary Delete a device
         * @request DELETE:/_matrix/client/v3/devices/{deviceId}
         * @secure
         */
        deleteDevice: (deviceId: string, body: DeleteDevicePayload, params: RequestParams = {}) =>
            this.request<DeleteDeviceData, DeleteDeviceError>({
                path: `/_matrix/client/v3/devices/${deviceId}`,
                method: "DELETE",
                body: body,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Gets information on a single device, by device id.
         *
         * @tags Device management
         * @name GetDevice
         * @summary Get a single device
         * @request GET:/_matrix/client/v3/devices/{deviceId}
         * @secure
         */
        getDevice: (deviceId: string, params: RequestParams = {}) =>
            this.request<GetDeviceData, void>({
                path: `/_matrix/client/v3/devices/${deviceId}`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description Updates the metadata on the given device.
         *
         * @tags Device management
         * @name UpdateDevice
         * @summary Update a device
         * @request PUT:/_matrix/client/v3/devices/{deviceId}
         * @secure
         */
        updateDevice: (deviceId: string, body: UpdateDevicePayload, params: RequestParams = {}) =>
            this.request<UpdateDeviceData, void>({
                path: `/_matrix/client/v3/devices/${deviceId}`,
                method: "PUT",
                body: body,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Updates the visibility of a given room on the application service's room directory. This API is similar to the room directory visibility API used by clients to update the homeserver's more general room directory. This API requires the use of an application service access token (`as_token`) instead of a typical client's access_token. This API cannot be invoked by users who are not identified as application services.
         *
         * @tags Application service room directory management
         * @name UpdateAppserviceRoomDirectoryVisibility
         * @summary Updates a room's visibility in the application service's room directory.
         * @request PUT:/_matrix/client/v3/directory/list/appservice/{networkId}/{roomId}
         * @secure
         */
        updateAppserviceRoomDirectoryVisibility: (
            networkId: string,
            roomId: string,
            body: UpdateAppserviceRoomDirectoryVisibilityPayload,
            params: RequestParams = {},
        ) =>
            this.request<UpdateAppserviceRoomDirectoryVisibilityData, any>({
                path: `/_matrix/client/v3/directory/list/appservice/${networkId}/${roomId}`,
                method: "PUT",
                body: body,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Gets the visibility of a given room on the server's public room directory.
         *
         * @tags Room discovery
         * @name GetRoomVisibilityOnDirectory
         * @summary Gets the visibility of a room in the directory
         * @request GET:/_matrix/client/v3/directory/list/room/{roomId}
         */
        getRoomVisibilityOnDirectory: (roomId: string, params: RequestParams = {}) =>
            this.request<GetRoomVisibilityOnDirectoryData, GetRoomVisibilityOnDirectoryError>({
                path: `/_matrix/client/v3/directory/list/room/${roomId}`,
                method: "GET",
                ...params,
            }),

        /**
         * @description Sets the visibility of a given room in the server's public room directory. Servers may choose to implement additional access control checks here, for instance that room visibility can only be changed by the room creator or a server administrator.
         *
         * @tags Room discovery
         * @name SetRoomVisibilityOnDirectory
         * @summary Sets the visibility of a room in the room directory
         * @request PUT:/_matrix/client/v3/directory/list/room/{roomId}
         * @secure
         */
        setRoomVisibilityOnDirectory: (
            roomId: string,
            body: SetRoomVisibilityOnDirectoryPayload,
            params: RequestParams = {},
        ) =>
            this.request<SetRoomVisibilityOnDirectoryData, SetRoomVisibilityOnDirectoryError>({
                path: `/_matrix/client/v3/directory/list/room/${roomId}`,
                method: "PUT",
                body: body,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Remove a mapping of room alias to room ID. Servers may choose to implement additional access control checks here, for instance that room aliases can only be deleted by their creator or a server administrator. **Note:** Servers may choose to update the `alt_aliases` for the `m.room.canonical_alias` state event in the room when an alias is removed. Servers which choose to update the canonical alias event are recommended to, in addition to their other relevant permission checks, delete the alias and return a successful response even if the user does not have permission to update the `m.room.canonical_alias` event.
         *
         * @tags Room directory
         * @name DeleteRoomAlias
         * @summary Remove a mapping of room alias to room ID.
         * @request DELETE:/_matrix/client/v3/directory/room/{roomAlias}
         * @secure
         */
        deleteRoomAlias: (roomAlias: string, params: RequestParams = {}) =>
            this.request<DeleteRoomAliasData, DeleteRoomAliasError>({
                path: `/_matrix/client/v3/directory/room/${roomAlias}`,
                method: "DELETE",
                secure: true,
                ...params,
            }),

        /**
         * @description Requests that the server resolve a room alias to a room ID. The server will use the federation API to resolve the alias if the domain part of the alias does not correspond to the server's own domain.
         *
         * @tags Room directory
         * @name GetRoomIdByAlias
         * @summary Get the room ID corresponding to this room alias.
         * @request GET:/_matrix/client/v3/directory/room/{roomAlias}
         */
        getRoomIdByAlias: (roomAlias: string, params: RequestParams = {}) =>
            this.request<GetRoomIdByAliasData, GetRoomIdByAliasError>({
                path: `/_matrix/client/v3/directory/room/${roomAlias}`,
                method: "GET",
                ...params,
            }),

        /**
         * No description
         *
         * @tags Room directory
         * @name SetRoomAlias
         * @summary Create a new mapping from room alias to room ID.
         * @request PUT:/_matrix/client/v3/directory/room/{roomAlias}
         * @secure
         */
        setRoomAlias: (roomAlias: string, body: SetRoomAliasPayload, params: RequestParams = {}) =>
            this.request<SetRoomAliasData, SetRoomAliasError>({
                path: `/_matrix/client/v3/directory/room/${roomAlias}`,
                method: "PUT",
                body: body,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description This will listen for new events and return them to the caller. This will block until an event is received, or until the `timeout` is reached. This endpoint was deprecated in r0 of this specification. Clients should instead call the [`/sync`](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3sync) endpoint with a `since` parameter. See the [migration guide](https://matrix.org/docs/guides/migrating-from-client-server-api-v-1#deprecated-endpoints).
         *
         * @tags Room participation
         * @name GetEvents
         * @summary Listen on the event stream.
         * @request GET:/_matrix/client/v3/events
         * @deprecated
         * @secure
         */
        getEvents: (query: GetEventsParams, params: RequestParams = {}) =>
            this.request<GetEventsData, void>({
                path: `/_matrix/client/v3/events`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),

        /**
         * @description This will listen for new events related to a particular room and return them to the caller. This will block until an event is received, or until the `timeout` is reached. This API is the same as the normal `/events` endpoint, but can be called by users who have not joined the room. Note that the normal `/events` endpoint has been deprecated. This API will also be deprecated at some point, but its replacement is not yet known.
         *
         * @tags Room participation
         * @name PeekEvents
         * @summary Listen on the event stream of a particular room.
         * @request GET:/_matrix/client/v3/events
         * @secure
         */
        peekEvents: (query: PeekEventsParams, params: RequestParams = {}) =>
            this.request<PeekEventsData, void>({
                path: `/_matrix/client/v3/events `,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),

        /**
         * @description Get a single event based on `event_id`. You must have permission to retrieve this event e.g. by being a member in the room for this event. This endpoint was deprecated in r0 of this specification. Clients should instead call the [/rooms/{roomId}/event/{eventId}](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3roomsroomideventeventid) API or the [/rooms/{roomId}/context/{eventId](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3roomsroomidcontexteventid) API.
         *
         * @tags Room participation
         * @name GetOneEvent
         * @summary Get a single event by event ID.
         * @request GET:/_matrix/client/v3/events/{eventId}
         * @deprecated
         * @secure
         */
        getOneEvent: (eventId: string, params: RequestParams = {}) =>
            this.request<GetOneEventData, void>({
                path: `/_matrix/client/v3/events/${eventId}`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description This returns the full state for this user, with an optional limit on the number of messages per room to return. This endpoint was deprecated in r0 of this specification. Clients should instead call the [`/sync`](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3sync) endpoint with no `since` parameter. See the [migration guide](https://matrix.org/docs/guides/migrating-from-client-server-api-v-1#deprecated-endpoints).
         *
         * @tags Room participation
         * @name InitialSync
         * @summary Get the user's current state.
         * @request GET:/_matrix/client/v3/initialSync
         * @deprecated
         * @secure
         */
        initialSync: (query: InitialSyncParams, params: RequestParams = {}) =>
            this.request<InitialSyncData, void>({
                path: `/_matrix/client/v3/initialSync`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),

        /**
         * @description *Note that this API takes either a room ID or alias, unlike* `/rooms/{roomId}/join`. This API starts a user participating in a particular room, if that user is allowed to participate in that room. After this call, the client is allowed to see all current state events in the room, and all subsequent events associated with the room until the user leaves the room. After a user has joined a room, the room will appear as an entry in the response of the [`/initialSync`](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3initialsync) and [`/sync`](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3sync) APIs.
         *
         * @tags Room membership
         * @name JoinRoom
         * @summary Start the requesting user participating in a particular room.
         * @request POST:/_matrix/client/v3/join/{roomIdOrAlias}
         * @secure
         */
        joinRoom: ({ roomIdOrAlias, ...query }: JoinRoomParams, body: JoinRoomPayload, params: RequestParams = {}) =>
            this.request<JoinRoomData, JoinRoomError>({
                path: `/_matrix/client/v3/join/${roomIdOrAlias}`,
                method: "POST",
                query: query,
                body: body,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description This API returns a list of the user's current rooms.
         *
         * @tags Room membership
         * @name GetJoinedRooms
         * @summary Lists the user's current rooms.
         * @request GET:/_matrix/client/v3/joined_rooms
         * @secure
         */
        getJoinedRooms: (params: RequestParams = {}) =>
            this.request<GetJoinedRoomsData, any>({
                path: `/_matrix/client/v3/joined_rooms`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description Gets a list of users who have updated their device identity keys since a previous sync token. The server should include in the results any users who: * currently share a room with the calling user (ie, both users have membership state `join`); *and* * added new device identity keys or removed an existing device with identity keys, between `from` and `to`.
         *
         * @tags End-to-end encryption
         * @name GetKeysChanges
         * @summary Query users with recent device key updates.
         * @request GET:/_matrix/client/v3/keys/changes
         * @secure
         */
        getKeysChanges: (query: GetKeysChangesParams, params: RequestParams = {}) =>
            this.request<GetKeysChangesData, any>({
                path: `/_matrix/client/v3/keys/changes`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),

        /**
         * @description Claims one-time keys for use in pre-key messages.
         *
         * @tags End-to-end encryption
         * @name ClaimKeys
         * @summary Claim one-time encryption keys.
         * @request POST:/_matrix/client/v3/keys/claim
         * @secure
         */
        claimKeys: (query: ClaimKeysPayload, params: RequestParams = {}) =>
            this.request<ClaimKeysData, any>({
                path: `/_matrix/client/v3/keys/claim`,
                method: "POST",
                body: query,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Publishes cross-signing keys for the user. This API endpoint uses the [User-Interactive Authentication API](https://spec.matrix.org/v1.5/client-server-api/#user-interactive-authentication-api).
         *
         * @tags End-to-end encryption
         * @name UploadCrossSigningKeys
         * @summary Upload cross-signing keys.
         * @request POST:/_matrix/client/v3/keys/device_signing/upload
         * @secure
         */
        uploadCrossSigningKeys: (keys: UploadCrossSigningKeysPayload, params: RequestParams = {}) =>
            this.request<UploadCrossSigningKeysData, UploadCrossSigningKeysError>({
                path: `/_matrix/client/v3/keys/device_signing/upload`,
                method: "POST",
                body: keys,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Returns the current devices and identity keys for the given users.
         *
         * @tags End-to-end encryption
         * @name QueryKeys
         * @summary Download device identity keys.
         * @request POST:/_matrix/client/v3/keys/query
         * @secure
         */
        queryKeys: (query: QueryKeysPayload, params: RequestParams = {}) =>
            this.request<QueryKeysData, any>({
                path: `/_matrix/client/v3/keys/query`,
                method: "POST",
                body: query,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Publishes cross-signing signatures for the user.  The request body is a map from user ID to key ID to signed JSON object.
         *
         * @tags End-to-end encryption
         * @name UploadCrossSigningSignatures
         * @summary Upload cross-signing signatures.
         * @request POST:/_matrix/client/v3/keys/signatures/upload
         * @secure
         */
        uploadCrossSigningSignatures: (signatures: UploadCrossSigningSignaturesPayload, params: RequestParams = {}) =>
            this.request<UploadCrossSigningSignaturesData, any>({
                path: `/_matrix/client/v3/keys/signatures/upload`,
                method: "POST",
                body: signatures,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Publishes end-to-end encryption keys for the device.
         *
         * @tags End-to-end encryption
         * @name UploadKeys
         * @summary Upload end-to-end encryption keys.
         * @request POST:/_matrix/client/v3/keys/upload
         * @secure
         */
        uploadKeys: (keys: UploadKeysPayload, params: RequestParams = {}) =>
            this.request<UploadKeysData, any>({
                path: `/_matrix/client/v3/keys/upload`,
                method: "POST",
                body: keys,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description *Note that this API takes either a room ID or alias, unlike other membership APIs.* This API "knocks" on the room to ask for permission to join, if the user is allowed to knock on the room. Acceptance of the knock happens out of band from this API, meaning that the client will have to watch for updates regarding the acceptance/rejection of the knock. If the room history settings allow, the user will still be able to see history of the room while being in the "knock" state. The user will have to accept the invitation to join the room (acceptance of knock) to see messages reliably. See the `/join` endpoints for more information about history visibility to the user. The knock will appear as an entry in the response of the [`/sync`](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3sync) API.
         *
         * @tags Room membership
         * @name KnockRoom
         * @summary Knock on a room, requesting permission to join.
         * @request POST:/_matrix/client/v3/knock/{roomIdOrAlias}
         * @secure
         */
        knockRoom: ({ roomIdOrAlias, ...query }: KnockRoomParams, body: KnockRoomPayload, params: RequestParams = {}) =>
            this.request<KnockRoomData, KnockRoomError>({
                path: `/_matrix/client/v3/knock/${roomIdOrAlias}`,
                method: "POST",
                query: query,
                body: body,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Gets the homeserver's supported login types to authenticate users. Clients should pick one of these and supply it as the `type` when logging in.
         *
         * @tags Session management
         * @name GetLoginFlows
         * @summary Get the supported login types to authenticate users
         * @request GET:/_matrix/client/v3/login
         */
        getLoginFlows: (params: RequestParams = {}) =>
            this.request<GetLoginFlowsData, GetLoginFlowsError>({
                path: `/_matrix/client/v3/login`,
                method: "GET",
                ...params,
            }),

        /**
         * @description Authenticates the user, and issues an access token they can use to authorize themself in subsequent requests. If the client does not supply a `device_id`, the server must auto-generate one. The returned access token must be associated with the `device_id` supplied by the client or generated by the server. The server may invalidate any access token previously associated with that device. See [Relationship between access tokens and devices](https://spec.matrix.org/v1.5/client-server-api/#relationship-between-access-tokens-and-devices).
         *
         * @tags Session management
         * @name Login
         * @summary Authenticates the user.
         * @request POST:/_matrix/client/v3/login
         */
        login: (body: LoginPayload, params: RequestParams = {}) =>
            this.request<LoginData, LoginError>({
                path: `/_matrix/client/v3/login`,
                method: "POST",
                body: body,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description A web-based Matrix client should instruct the user's browser to navigate to this endpoint in order to log in via SSO. The server MUST respond with an HTTP redirect to the SSO interface, or present a page which lets the user select an IdP to continue with in the event multiple are supported by the server.
         *
         * @tags Session management
         * @name RedirectToSso
         * @summary Redirect the user's browser to the SSO interface.
         * @request GET:/_matrix/client/v3/login/sso/redirect
         */
        redirectToSso: (query: RedirectToSsoParams, params: RequestParams = {}) =>
            this.request<any, void>({
                path: `/_matrix/client/v3/login/sso/redirect`,
                method: "GET",
                query: query,
                ...params,
            }),

        /**
         * @description This endpoint is the same as `/login/sso/redirect`, though with an IdP ID from the original `identity_providers` array to inform the server of which IdP the client/user would like to continue with. The server MUST respond with an HTTP redirect to the SSO interface for that IdP.
         *
         * @tags Session management
         * @name RedirectToIdP
         * @summary Redirect the user's browser to the SSO interface for an IdP.
         * @request GET:/_matrix/client/v3/login/sso/redirect/{idpId}
         */
        redirectToIdP: ({ idpId, ...query }: RedirectToIdPParams, params: RequestParams = {}) =>
            this.request<any, void>({
                path: `/_matrix/client/v3/login/sso/redirect/${idpId}`,
                method: "GET",
                query: query,
                ...params,
            }),

        /**
         * @description Invalidates an existing access token, so that it can no longer be used for authorization. The device associated with the access token is also deleted. [Device keys](https://spec.matrix.org/v1.5/client-server-api/#device-keys) for the device are deleted alongside the device.
         *
         * @tags Session management
         * @name Logout
         * @summary Invalidates a user access token
         * @request POST:/_matrix/client/v3/logout
         * @secure
         */
        logout: (params: RequestParams = {}) =>
            this.request<LogoutData, any>({
                path: `/_matrix/client/v3/logout`,
                method: "POST",
                secure: true,
                ...params,
            }),

        /**
         * @description Invalidates all access tokens for a user, so that they can no longer be used for authorization. This includes the access token that made this request. All devices for the user are also deleted. [Device keys](https://spec.matrix.org/v1.5/client-server-api/#device-keys) for the device are deleted alongside the device. This endpoint does not use the [User-Interactive Authentication API](https://spec.matrix.org/v1.5/client-server-api/#user-interactive-authentication-api) because User-Interactive Authentication is designed to protect against attacks where the someone gets hold of a single access token then takes over the account. This endpoint invalidates all access tokens for the user, including the token used in the request, and therefore the attacker is unable to take over the account in this way.
         *
         * @tags Session management
         * @name LogoutAll
         * @summary Invalidates all access tokens for a user
         * @request POST:/_matrix/client/v3/logout/all
         * @secure
         */
        logoutAll: (params: RequestParams = {}) =>
            this.request<LogoutAllData, any>({
                path: `/_matrix/client/v3/logout/all`,
                method: "POST",
                secure: true,
                ...params,
            }),

        /**
         * @description This API is used to paginate through the list of events that the user has been, or would have been notified about.
         *
         * @tags Push notifications
         * @name GetNotifications
         * @summary Gets a list of events that the user has been notified about
         * @request GET:/_matrix/client/v3/notifications
         * @secure
         */
        getNotifications: (query: GetNotificationsParams, params: RequestParams = {}) =>
            this.request<GetNotificationsData, any>({
                path: `/_matrix/client/v3/notifications`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),

        /**
         * @description Get the given user's presence state.
         *
         * @tags Presence
         * @name GetPresence
         * @summary Get this user's presence state.
         * @request GET:/_matrix/client/v3/presence/{userId}/status
         * @secure
         */
        getPresence: (userId: string, params: RequestParams = {}) =>
            this.request<GetPresenceData, GetPresenceError>({
                path: `/_matrix/client/v3/presence/${userId}/status`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description This API sets the given user's presence state. When setting the status, the activity time is updated to reflect that activity; the client does not need to specify the `last_active_ago` field. You cannot set the presence state of another user.
         *
         * @tags Presence
         * @name SetPresence
         * @summary Update this user's presence state.
         * @request PUT:/_matrix/client/v3/presence/{userId}/status
         * @secure
         */
        setPresence: (userId: string, presenceState: SetPresencePayload, params: RequestParams = {}) =>
            this.request<SetPresenceData, SetPresenceError>({
                path: `/_matrix/client/v3/presence/${userId}/status`,
                method: "PUT",
                body: presenceState,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Get the combined profile information for this user. This API may be used to fetch the user's own profile information or other users; either locally or on remote homeservers. This API may return keys which are not limited to `displayname` or `avatar_url`.
         *
         * @tags User data
         * @name GetUserProfile
         * @summary Get this user's profile information.
         * @request GET:/_matrix/client/v3/profile/{userId}
         */
        getUserProfile: (userId: string, params: RequestParams = {}) =>
            this.request<GetUserProfileData, GetUserProfileError>({
                path: `/_matrix/client/v3/profile/${userId}`,
                method: "GET",
                ...params,
            }),

        /**
         * @description Get the user's avatar URL. This API may be used to fetch the user's own avatar URL or to query the URL of other users; either locally or on remote homeservers.
         *
         * @tags User data
         * @name GetAvatarUrl
         * @summary Get the user's avatar URL.
         * @request GET:/_matrix/client/v3/profile/{userId}/avatar_url
         */
        getAvatarUrl: (userId: string, params: RequestParams = {}) =>
            this.request<GetAvatarUrlData, void>({
                path: `/_matrix/client/v3/profile/${userId}/avatar_url`,
                method: "GET",
                ...params,
            }),

        /**
         * @description This API sets the given user's avatar URL. You must have permission to set this user's avatar URL, e.g. you need to have their `access_token`.
         *
         * @tags User data
         * @name SetAvatarUrl
         * @summary Set the user's avatar URL.
         * @request PUT:/_matrix/client/v3/profile/{userId}/avatar_url
         * @secure
         */
        setAvatarUrl: (userId: string, avatar_url: SetAvatarUrlPayload, params: RequestParams = {}) =>
            this.request<SetAvatarUrlData, SetAvatarUrlError>({
                path: `/_matrix/client/v3/profile/${userId}/avatar_url`,
                method: "PUT",
                body: avatar_url,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Get the user's display name. This API may be used to fetch the user's own displayname or to query the name of other users; either locally or on remote homeservers.
         *
         * @tags User data
         * @name GetDisplayName
         * @summary Get the user's display name.
         * @request GET:/_matrix/client/v3/profile/{userId}/displayname
         */
        getDisplayName: (userId: string, params: RequestParams = {}) =>
            this.request<GetDisplayNameData, void>({
                path: `/_matrix/client/v3/profile/${userId}/displayname`,
                method: "GET",
                ...params,
            }),

        /**
         * @description This API sets the given user's display name. You must have permission to set this user's display name, e.g. you need to have their `access_token`.
         *
         * @tags User data
         * @name SetDisplayName
         * @summary Set the user's display name.
         * @request PUT:/_matrix/client/v3/profile/{userId}/displayname
         * @secure
         */
        setDisplayName: (userId: string, displayName: SetDisplayNamePayload, params: RequestParams = {}) =>
            this.request<SetDisplayNameData, SetDisplayNameError>({
                path: `/_matrix/client/v3/profile/${userId}/displayname`,
                method: "PUT",
                body: displayName,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Lists the public rooms on the server. This API returns paginated responses. The rooms are ordered by the number of joined members, with the largest rooms first.
         *
         * @tags Room discovery
         * @name GetPublicRooms
         * @summary Lists the public rooms on the server.
         * @request GET:/_matrix/client/v3/publicRooms
         */
        getPublicRooms: (query: GetPublicRoomsParams, params: RequestParams = {}) =>
            this.request<GetPublicRoomsData, any>({
                path: `/_matrix/client/v3/publicRooms`,
                method: "GET",
                query: query,
                ...params,
            }),

        /**
         * @description Lists the public rooms on the server, with optional filter. This API returns paginated responses. The rooms are ordered by the number of joined members, with the largest rooms first.
         *
         * @tags Room discovery
         * @name QueryPublicRooms
         * @summary Lists the public rooms on the server with optional filter.
         * @request POST:/_matrix/client/v3/publicRooms
         * @secure
         */
        queryPublicRooms: (query: QueryPublicRoomsParams, body: QueryPublicRoomsPayload, params: RequestParams = {}) =>
            this.request<QueryPublicRoomsData, any>({
                path: `/_matrix/client/v3/publicRooms`,
                method: "POST",
                query: query,
                body: body,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Gets all currently active pushers for the authenticated user.
         *
         * @tags Push notifications
         * @name GetPushers
         * @summary Gets the current pushers for the authenticated user
         * @request GET:/_matrix/client/v3/pushers
         * @secure
         */
        getPushers: (params: RequestParams = {}) =>
            this.request<GetPushersData, any>({
                path: `/_matrix/client/v3/pushers`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description This endpoint allows the creation, modification and deletion of [pushers](https://spec.matrix.org/v1.5/client-server-api/#push-notifications) for this user ID. The behaviour of this endpoint varies depending on the values in the JSON body.
         *
         * @tags Push notifications
         * @name PostPusher
         * @summary Modify a pusher for this user on the homeserver.
         * @request POST:/_matrix/client/v3/pushers/set
         * @secure
         */
        postPusher: (pusher: PostPusherPayload, params: RequestParams = {}) =>
            this.request<PostPusherData, PostPusherError>({
                path: `/_matrix/client/v3/pushers/set`,
                method: "POST",
                body: pusher,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Retrieve all push rulesets for this user. Clients can "drill-down" on the rulesets by suffixing a `scope` to this path e.g. `/pushrules/global/`. This will return a subset of this data under the specified key e.g. the `global` key.
         *
         * @tags Push notifications
         * @name GetPushRules
         * @summary Retrieve all push rulesets.
         * @request GET:/_matrix/client/v3/pushrules/
         * @secure
         */
        getPushRules: (params: RequestParams = {}) =>
            this.request<GetPushRulesData, any>({
                path: `/_matrix/client/v3/pushrules/`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description This endpoint removes the push rule defined in the path.
         *
         * @tags Push notifications
         * @name DeletePushRule
         * @summary Delete a push rule.
         * @request DELETE:/_matrix/client/v3/pushrules/{scope}/{kind}/{ruleId}
         * @secure
         */
        deletePushRule: (
            scope: string,
            kind: "override" | "underride" | "sender" | "room" | "content",
            ruleId: string,
            params: RequestParams = {},
        ) =>
            this.request<DeletePushRuleData, DeletePushRuleError>({
                path: `/_matrix/client/v3/pushrules/${scope}/${kind}/${ruleId}`,
                method: "DELETE",
                secure: true,
                ...params,
            }),

        /**
         * @description Retrieve a single specified push rule.
         *
         * @tags Push notifications
         * @name GetPushRule
         * @summary Retrieve a push rule.
         * @request GET:/_matrix/client/v3/pushrules/{scope}/{kind}/{ruleId}
         * @secure
         */
        getPushRule: (
            scope: string,
            kind: "override" | "underride" | "sender" | "room" | "content",
            ruleId: string,
            params: RequestParams = {},
        ) =>
            this.request<GetPushRuleData, GetPushRuleError>({
                path: `/_matrix/client/v3/pushrules/${scope}/${kind}/${ruleId}`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description This endpoint allows the creation and modification of user defined push rules. If a rule with the same `rule_id` already exists among rules of the same kind, it is updated with the new parameters, otherwise a new rule is created. If both `after` and `before` are provided, the new or updated rule must be the next most important rule with respect to the rule identified by `before`. If neither `after` nor `before` are provided and the rule is created, it should be added as the most important user defined rule among rules of the same kind. When creating push rules, they MUST be enabled by default.
         *
         * @tags Push notifications
         * @name SetPushRule
         * @summary Add or change a push rule.
         * @request PUT:/_matrix/client/v3/pushrules/{scope}/{kind}/{ruleId}
         * @secure
         */
        setPushRule: (
            { scope, kind, ruleId, ...query }: SetPushRuleParams,
            pushrule: SetPushRulePayload,
            params: RequestParams = {},
        ) =>
            this.request<SetPushRuleData, SetPushRuleError>({
                path: `/_matrix/client/v3/pushrules/${scope}/${kind}/${ruleId}`,
                method: "PUT",
                query: query,
                body: pushrule,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description This endpoint get the actions for the specified push rule.
         *
         * @tags Push notifications
         * @name GetPushRuleActions
         * @summary The actions for a push rule
         * @request GET:/_matrix/client/v3/pushrules/{scope}/{kind}/{ruleId}/actions
         * @secure
         */
        getPushRuleActions: (
            scope: string,
            kind: "override" | "underride" | "sender" | "room" | "content",
            ruleId: string,
            params: RequestParams = {},
        ) =>
            this.request<GetPushRuleActionsData, GetPushRuleActionsError>({
                path: `/_matrix/client/v3/pushrules/${scope}/${kind}/${ruleId}/actions`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description This endpoint allows clients to change the actions of a push rule. This can be used to change the actions of builtin rules.
         *
         * @tags Push notifications
         * @name SetPushRuleActions
         * @summary Set the actions for a push rule.
         * @request PUT:/_matrix/client/v3/pushrules/{scope}/{kind}/{ruleId}/actions
         * @secure
         */
        setPushRuleActions: (
            scope: string,
            kind: "override" | "underride" | "sender" | "room" | "content",
            ruleId: string,
            body: SetPushRuleActionsPayload,
            params: RequestParams = {},
        ) =>
            this.request<SetPushRuleActionsData, SetPushRuleActionsError>({
                path: `/_matrix/client/v3/pushrules/${scope}/${kind}/${ruleId}/actions`,
                method: "PUT",
                body: body,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description This endpoint gets whether the specified push rule is enabled.
         *
         * @tags Push notifications
         * @name IsPushRuleEnabled
         * @summary Get whether a push rule is enabled
         * @request GET:/_matrix/client/v3/pushrules/{scope}/{kind}/{ruleId}/enabled
         * @secure
         */
        isPushRuleEnabled: (
            scope: string,
            kind: "override" | "underride" | "sender" | "room" | "content",
            ruleId: string,
            params: RequestParams = {},
        ) =>
            this.request<IsPushRuleEnabledData, IsPushRuleEnabledError>({
                path: `/_matrix/client/v3/pushrules/${scope}/${kind}/${ruleId}/enabled`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description This endpoint allows clients to enable or disable the specified push rule.
         *
         * @tags Push notifications
         * @name SetPushRuleEnabled
         * @summary Enable or disable a push rule.
         * @request PUT:/_matrix/client/v3/pushrules/{scope}/{kind}/{ruleId}/enabled
         * @secure
         */
        setPushRuleEnabled: (
            scope: string,
            kind: "override" | "underride" | "sender" | "room" | "content",
            ruleId: string,
            body: SetPushRuleEnabledPayload,
            params: RequestParams = {},
        ) =>
            this.request<SetPushRuleEnabledData, SetPushRuleEnabledError>({
                path: `/_matrix/client/v3/pushrules/${scope}/${kind}/${ruleId}/enabled`,
                method: "PUT",
                body: body,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Refresh an access token. Clients should use the returned access token when making subsequent API calls, and store the returned refresh token (if given) in order to refresh the new access token when necessary. After an access token has been refreshed, a server can choose to invalidate the old access token immediately, or can choose not to, for example if the access token would expire soon anyways. Clients should not make any assumptions about the old access token still being valid, and should use the newly provided access token instead. The old refresh token remains valid until the new access token or refresh token is used, at which point the old refresh token is revoked. Note that this endpoint does not require authentication via an access token. Authentication is provided via the refresh token. Application Service identity assertion is disabled for this endpoint.
         *
         * @name Refresh
         * @summary Refresh an access token
         * @request POST:/_matrix/client/v3/refresh
         */
        refresh: (body: RefreshPayload, params: RequestParams = {}) =>
            this.request<RefreshData, RefreshError>({
                path: `/_matrix/client/v3/refresh`,
                method: "POST",
                body: body,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description This API endpoint uses the [User-Interactive Authentication API](https://spec.matrix.org/v1.5/client-server-api/#user-interactive-authentication-api), except in the cases where a guest account is being registered. Register for an account on this homeserver. There are two kinds of user account: - `user` accounts. These accounts may use the full API described in this specification. - `guest` accounts. These accounts may have limited permissions and may not be supported by all servers. If registration is successful, this endpoint will issue an access token the client can use to authorize itself in subsequent requests. If the client does not supply a `device_id`, the server must auto-generate one. The server SHOULD register an account with a User ID based on the `username` provided, if any. Note that the grammar of Matrix User ID localparts is restricted, so the server MUST either map the provided `username` onto a `user_id` in a logical manner, or reject `username`\s which do not comply to the grammar, with `M_INVALID_USERNAME`. Matrix clients MUST NOT assume that localpart of the registered `user_id` matches the provided `username`. The returned access token must be associated with the `device_id` supplied by the client or generated by the server. The server may invalidate any access token previously associated with that device. See [Relationship between access tokens and devices](https://spec.matrix.org/v1.5/client-server-api/#relationship-between-access-tokens-and-devices). When registering a guest account, all parameters in the request body with the exception of `initial_device_display_name` MUST BE ignored by the server. The server MUST pick a `device_id` for the account regardless of input. Any user ID returned by this API must conform to the grammar given in the [Matrix specification](https://spec.matrix.org/v1.5/appendices/#user-identifiers).
         *
         * @tags Account management
         * @name Register
         * @summary Register for an account on this homeserver.
         * @request POST:/_matrix/client/v3/register
         */
        register: (query: RegisterParams, body: RegisterPayload, params: RequestParams = {}) =>
            this.request<RegisterData, RegisterError>({
                path: `/_matrix/client/v3/register`,
                method: "POST",
                query: query,
                body: body,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Checks to see if a username is available, and valid, for the server. The server should check to ensure that, at the time of the request, the username requested is available for use. This includes verifying that an application service has not claimed the username and that the username fits the server's desired requirements (for example, a server could dictate that it does not permit usernames with underscores). Matrix clients may wish to use this API prior to attempting registration, however the clients must also be aware that using this API does not normally reserve the username. This can mean that the username becomes unavailable between checking its availability and attempting to register it.
         *
         * @tags Account management
         * @name CheckUsernameAvailability
         * @summary Checks to see if a username is available on the server.
         * @request GET:/_matrix/client/v3/register/available
         */
        checkUsernameAvailability: (query: CheckUsernameAvailabilityParams, params: RequestParams = {}) =>
            this.request<CheckUsernameAvailabilityData, CheckUsernameAvailabilityError>({
                path: `/_matrix/client/v3/register/available`,
                method: "GET",
                query: query,
                ...params,
            }),

        /**
         * @description The homeserver must check that the given email address is **not** already associated with an account on this homeserver. The homeserver should validate the email itself, either by sending a validation email itself or by using a service it has control over.
         *
         * @tags Account management
         * @name RequestTokenToRegisterEmail
         * @summary Begins the validation process for an email to be used during registration.
         * @request POST:/_matrix/client/v3/register/email/requestToken
         */
        requestTokenToRegisterEmail: (
            body: {
                /**
                 * A unique string generated by the client, and used to identify the
                 * validation attempt. It must be a string consisting of the characters
                 * `[0-9a-zA-Z.=_-]`. Its length must not exceed 255 characters and it
                 * must not be empty.
                 * @example "monkeys_are_GREAT"
                 */
                client_secret: string;
                /**
                 * The email address to validate.
                 * @example "alice@example.org"
                 */
                email: string;
                /**
                 * Optional. When the validation is completed, the identity server will
                 * redirect the user to this URL. This option is ignored when submitting
                 * 3PID validation information through a POST request.
                 * @example "https://example.org/congratulations.html"
                 */
                next_link?: string;
                /**
                 * The server will only send an email if the `send_attempt`
                 * is a number greater than the most recent one which it has seen,
                 * scoped to that `email` + `client_secret` pair. This is to
                 * avoid repeatedly sending the same email in the case of request
                 * retries between the POSTing user and the identity server.
                 * The client should increment this value if they desire a new
                 * email (e.g. a reminder) to be sent. If they do not, the server
                 * should respond with success but not resend the email.
                 * @example 1
                 */
                send_attempt: number;
            } & {
                /**
                 * An access token previously registered with the identity server. Servers
                 * can treat this as optional to distinguish between r0.5-compatible clients
                 * and this specification version.
                 *
                 * Required if an `id_server` is supplied.
                 */
                id_access_token?: string;
                /**
                 * The hostname of the identity server to communicate with. May optionally
                 * include a port. This parameter is ignored when the homeserver handles
                 * 3PID verification.
                 *
                 * This parameter is deprecated with a plan to be removed in a future specification
                 * version for `/account/password` and `/register` requests.
                 * @example "id.example.com"
                 */
                id_server?: string;
            },
            params: RequestParams = {},
        ) =>
            this.request<RequestTokenToRegisterEmailData, RequestTokenToRegisterEmailError>({
                path: `/_matrix/client/v3/register/email/requestToken`,
                method: "POST",
                body: body,
                ...params,
            }),

        /**
         * @description The homeserver must check that the given phone number is **not** already associated with an account on this homeserver. The homeserver should validate the phone number itself, either by sending a validation message itself or by using a service it has control over.
         *
         * @tags Account management
         * @name RequestTokenToRegisterMsisdn
         * @summary Requests a validation token be sent to the given phone number for the purpose of registering an account
         * @request POST:/_matrix/client/v3/register/msisdn/requestToken
         */
        requestTokenToRegisterMsisdn: (
            body: {
                /**
                 * A unique string generated by the client, and used to identify the
                 * validation attempt. It must be a string consisting of the characters
                 * `[0-9a-zA-Z.=_-]`. Its length must not exceed 255 characters and it
                 * must not be empty.
                 * @example "monkeys_are_GREAT"
                 */
                client_secret: string;
                /**
                 * The two-letter uppercase ISO-3166-1 alpha-2 country code that the
                 * number in `phone_number` should be parsed as if it were dialled from.
                 * @example "GB"
                 */
                country: string;
                /**
                 * Optional. When the validation is completed, the identity server will
                 * redirect the user to this URL. This option is ignored when submitting
                 * 3PID validation information through a POST request.
                 * @example "https://example.org/congratulations.html"
                 */
                next_link?: string;
                /**
                 * The phone number to validate.
                 * @example "07700900001"
                 */
                phone_number: string;
                /**
                 * The server will only send an SMS if the `send_attempt` is a
                 * number greater than the most recent one which it has seen,
                 * scoped to that `country` + `phone_number` + `client_secret`
                 * triple. This is to avoid repeatedly sending the same SMS in
                 * the case of request retries between the POSTing user and the
                 * identity server. The client should increment this value if
                 * they desire a new SMS (e.g. a reminder) to be sent.
                 * @example 1
                 */
                send_attempt: number;
            } & {
                /**
                 * An access token previously registered with the identity server. Servers
                 * can treat this as optional to distinguish between r0.5-compatible clients
                 * and this specification version.
                 *
                 * Required if an `id_server` is supplied.
                 */
                id_access_token?: string;
                /**
                 * The hostname of the identity server to communicate with. May optionally
                 * include a port. This parameter is ignored when the homeserver handles
                 * 3PID verification.
                 *
                 * This parameter is deprecated with a plan to be removed in a future specification
                 * version for `/account/password` and `/register` requests.
                 * @example "id.example.com"
                 */
                id_server?: string;
            },
            params: RequestParams = {},
        ) =>
            this.request<RequestTokenToRegisterMsisdnData, RequestTokenToRegisterMsisdnError>({
                path: `/_matrix/client/v3/register/msisdn/requestToken`,
                method: "POST",
                body: body,
                ...params,
            }),

        /**
         * @description Delete the keys from the backup.
         *
         * @tags End-to-end encryption
         * @name DeleteRoomKeys
         * @summary Delete the keys from the backup.
         * @request DELETE:/_matrix/client/v3/room_keys/keys
         * @secure
         */
        deleteRoomKeys: (query: DeleteRoomKeysParams, params: RequestParams = {}) =>
            this.request<DeleteRoomKeysData, DeleteRoomKeysError>({
                path: `/_matrix/client/v3/room_keys/keys`,
                method: "DELETE",
                query: query,
                secure: true,
                ...params,
            }),

        /**
         * @description Retrieve the keys from the backup.
         *
         * @tags End-to-end encryption
         * @name GetRoomKeys
         * @summary Retrieve the keys from the backup.
         * @request GET:/_matrix/client/v3/room_keys/keys
         * @secure
         */
        getRoomKeys: (query: GetRoomKeysParams, params: RequestParams = {}) =>
            this.request<GetRoomKeysData, GetRoomKeysError>({
                path: `/_matrix/client/v3/room_keys/keys`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),

        /**
         * @description Store several keys in the backup.
         *
         * @tags End-to-end encryption
         * @name PutRoomKeys
         * @summary Store several keys in the backup.
         * @request PUT:/_matrix/client/v3/room_keys/keys
         * @secure
         */
        putRoomKeys: (query: PutRoomKeysParams, backupData: PutRoomKeysPayload, params: RequestParams = {}) =>
            this.request<PutRoomKeysData, PutRoomKeysError>({
                path: `/_matrix/client/v3/room_keys/keys`,
                method: "PUT",
                query: query,
                body: backupData,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Delete the keys from the backup for a given room.
         *
         * @tags End-to-end encryption
         * @name DeleteRoomKeysByRoomId
         * @summary Delete the keys from the backup for a given room.
         * @request DELETE:/_matrix/client/v3/room_keys/keys/{roomId}
         * @secure
         */
        deleteRoomKeysByRoomId: ({ roomId, ...query }: DeleteRoomKeysByRoomIdParams, params: RequestParams = {}) =>
            this.request<DeleteRoomKeysByRoomIdData, DeleteRoomKeysByRoomIdError>({
                path: `/_matrix/client/v3/room_keys/keys/${roomId}`,
                method: "DELETE",
                query: query,
                secure: true,
                ...params,
            }),

        /**
         * @description Retrieve the keys from the backup for a given room.
         *
         * @tags End-to-end encryption
         * @name GetRoomKeysByRoomId
         * @summary Retrieve the keys from the backup for a given room.
         * @request GET:/_matrix/client/v3/room_keys/keys/{roomId}
         * @secure
         */
        getRoomKeysByRoomId: ({ roomId, ...query }: GetRoomKeysByRoomIdParams, params: RequestParams = {}) =>
            this.request<GetRoomKeysByRoomIdData, GetRoomKeysByRoomIdError>({
                path: `/_matrix/client/v3/room_keys/keys/${roomId}`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),

        /**
         * @description Store several keys in the backup for a given room.
         *
         * @tags End-to-end encryption
         * @name PutRoomKeysByRoomId
         * @summary Store several keys in the backup for a given room.
         * @request PUT:/_matrix/client/v3/room_keys/keys/{roomId}
         * @secure
         */
        putRoomKeysByRoomId: (
            { roomId, ...query }: PutRoomKeysByRoomIdParams,
            backupData: PutRoomKeysByRoomIdPayload,
            params: RequestParams = {},
        ) =>
            this.request<PutRoomKeysByRoomIdData, PutRoomKeysByRoomIdError>({
                path: `/_matrix/client/v3/room_keys/keys/${roomId}`,
                method: "PUT",
                query: query,
                body: backupData,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Delete a key from the backup.
         *
         * @tags End-to-end encryption
         * @name DeleteRoomKeyBySessionId
         * @summary Delete a key from the backup.
         * @request DELETE:/_matrix/client/v3/room_keys/keys/{roomId}/{sessionId}
         * @secure
         */
        deleteRoomKeyBySessionId: (
            { roomId, sessionId, ...query }: DeleteRoomKeyBySessionIdParams,
            params: RequestParams = {},
        ) =>
            this.request<DeleteRoomKeyBySessionIdData, DeleteRoomKeyBySessionIdError>({
                path: `/_matrix/client/v3/room_keys/keys/${roomId}/${sessionId}`,
                method: "DELETE",
                query: query,
                secure: true,
                ...params,
            }),

        /**
         * @description Retrieve a key from the backup.
         *
         * @tags End-to-end encryption
         * @name GetRoomKeyBySessionId
         * @summary Retrieve a key from the backup.
         * @request GET:/_matrix/client/v3/room_keys/keys/{roomId}/{sessionId}
         * @secure
         */
        getRoomKeyBySessionId: (
            { roomId, sessionId, ...query }: GetRoomKeyBySessionIdParams,
            params: RequestParams = {},
        ) =>
            this.request<GetRoomKeyBySessionIdData, GetRoomKeyBySessionIdError>({
                path: `/_matrix/client/v3/room_keys/keys/${roomId}/${sessionId}`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),

        /**
         * @description Store a key in the backup.
         *
         * @tags End-to-end encryption
         * @name PutRoomKeyBySessionId
         * @summary Store a key in the backup.
         * @request PUT:/_matrix/client/v3/room_keys/keys/{roomId}/{sessionId}
         * @secure
         */
        putRoomKeyBySessionId: (
            { roomId, sessionId, ...query }: PutRoomKeyBySessionIdParams,
            data: PutRoomKeyBySessionIdPayload,
            params: RequestParams = {},
        ) =>
            this.request<PutRoomKeyBySessionIdData, PutRoomKeyBySessionIdError>({
                path: `/_matrix/client/v3/room_keys/keys/${roomId}/${sessionId}`,
                method: "PUT",
                query: query,
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Get information about the latest backup version.
         *
         * @tags End-to-end encryption
         * @name GetRoomKeysVersionCurrent
         * @summary Get information about the latest backup version.
         * @request GET:/_matrix/client/v3/room_keys/version
         * @secure
         */
        getRoomKeysVersionCurrent: (params: RequestParams = {}) =>
            this.request<GetRoomKeysVersionCurrentData, GetRoomKeysVersionCurrentError>({
                path: `/_matrix/client/v3/room_keys/version`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description Creates a new backup.
         *
         * @tags End-to-end encryption
         * @name PostRoomKeysVersion
         * @summary Create a new backup.
         * @request POST:/_matrix/client/v3/room_keys/version
         * @secure
         */
        postRoomKeysVersion: (version: PostRoomKeysVersionPayload, params: RequestParams = {}) =>
            this.request<PostRoomKeysVersionData, PostRoomKeysVersionError>({
                path: `/_matrix/client/v3/room_keys/version`,
                method: "POST",
                body: version,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Delete an existing key backup. Both the information about the backup, as well as all key data related to the backup will be deleted.
         *
         * @tags End-to-end encryption
         * @name DeleteRoomKeysVersion
         * @summary Delete an existing key backup.
         * @request DELETE:/_matrix/client/v3/room_keys/version/{version}
         * @secure
         */
        deleteRoomKeysVersion: (version: string, params: RequestParams = {}) =>
            this.request<DeleteRoomKeysVersionData, DeleteRoomKeysVersionError>({
                path: `/_matrix/client/v3/room_keys/version/${version}`,
                method: "DELETE",
                secure: true,
                ...params,
            }),

        /**
         * @description Get information about an existing backup.
         *
         * @tags End-to-end encryption
         * @name GetRoomKeysVersion
         * @summary Get information about an existing backup.
         * @request GET:/_matrix/client/v3/room_keys/version/{version}
         * @secure
         */
        getRoomKeysVersion: (version: string, params: RequestParams = {}) =>
            this.request<GetRoomKeysVersionData, GetRoomKeysVersionError>({
                path: `/_matrix/client/v3/room_keys/version/${version}`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description Update information about an existing backup.  Only `auth_data` can be modified.
         *
         * @tags End-to-end encryption
         * @name PutRoomKeysVersion
         * @summary Update information about an existing backup.
         * @request PUT:/_matrix/client/v3/room_keys/version/{version}
         * @secure
         */
        putRoomKeysVersion: (version: string, data: PutRoomKeysVersionPayload, params: RequestParams = {}) =>
            this.request<PutRoomKeysVersionData, PutRoomKeysVersionError>({
                path: `/_matrix/client/v3/room_keys/version/${version}`,
                method: "PUT",
                body: data,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Get a list of aliases maintained by the local server for the given room. This endpoint can be called by users who are in the room (external users receive an `M_FORBIDDEN` error response). If the room's `m.room.history_visibility` maps to `world_readable`, any user can call this endpoint. Servers may choose to implement additional access control checks here, such as allowing server administrators to view aliases regardless of membership. **Note:** Clients are recommended not to display this list of aliases prominently as they are not curated, unlike those listed in the `m.room.canonical_alias` state event.
         *
         * @tags Room directory
         * @name GetLocalAliases
         * @summary Get a list of local aliases on a given room.
         * @request GET:/_matrix/client/v3/rooms/{roomId}/aliases
         * @secure
         */
        getLocalAliases: (roomId: string, params: RequestParams = {}) =>
            this.request<GetLocalAliasesData, GetLocalAliasesError>({
                path: `/_matrix/client/v3/rooms/${roomId}/aliases`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description Ban a user in the room. If the user is currently in the room, also kick them. When a user is banned from a room, they may not join it or be invited to it until they are unbanned. The caller must have the required power level in order to perform this operation.
         *
         * @tags Room membership
         * @name Ban
         * @summary Ban a user in the room.
         * @request POST:/_matrix/client/v3/rooms/{roomId}/ban
         * @secure
         */
        ban: (roomId: string, body: BanPayload, params: RequestParams = {}) =>
            this.request<BanData, BanError>({
                path: `/_matrix/client/v3/rooms/${roomId}/ban`,
                method: "POST",
                body: body,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description This API returns a number of events that happened just before and after the specified event. This allows clients to get the context surrounding an event. *Note*: This endpoint supports lazy-loading of room member events. See [Lazy-loading room members](https://spec.matrix.org/v1.5/client-server-api/#lazy-loading-room-members) for more information.
         *
         * @tags Room participation
         * @name GetEventContext
         * @summary Get events and state around the specified event.
         * @request GET:/_matrix/client/v3/rooms/{roomId}/context/{eventId}
         * @secure
         */
        getEventContext: ({ roomId, eventId, ...query }: GetEventContextParams, params: RequestParams = {}) =>
            this.request<GetEventContextData, any>({
                path: `/_matrix/client/v3/rooms/${roomId}/context/${eventId}`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),

        /**
         * @description Get a single event based on `roomId/eventId`. You must have permission to retrieve this event e.g. by being a member in the room for this event.
         *
         * @tags Room participation
         * @name GetOneRoomEvent
         * @summary Get a single event by event ID.
         * @request GET:/_matrix/client/v3/rooms/{roomId}/event/{eventId}
         * @secure
         */
        getOneRoomEvent: (roomId: string, eventId: string, params: RequestParams = {}) =>
            this.request<GetOneRoomEventData, GetOneRoomEventError>({
                path: `/_matrix/client/v3/rooms/${roomId}/event/${eventId}`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description This API stops a user remembering about a particular room. In general, history is a first class citizen in Matrix. After this API is called, however, a user will no longer be able to retrieve history for this room. If all users on a homeserver forget a room, the room is eligible for deletion from that homeserver. If the user is currently joined to the room, they must leave the room before calling this API.
         *
         * @tags Room membership
         * @name ForgetRoom
         * @summary Stop the requesting user remembering about a particular room.
         * @request POST:/_matrix/client/v3/rooms/{roomId}/forget
         * @secure
         */
        forgetRoom: (roomId: string, params: RequestParams = {}) =>
            this.request<ForgetRoomData, ForgetRoomError>({
                path: `/_matrix/client/v3/rooms/${roomId}/forget`,
                method: "POST",
                secure: true,
                ...params,
            }),

        /**
         * @description Get a copy of the current state and the most recent messages in a room. This endpoint was deprecated in r0 of this specification. There is no direct replacement; the relevant information is returned by the [`/sync`](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3sync) API. See the [migration guide](https://matrix.org/docs/guides/migrating-from-client-server-api-v-1#deprecated-endpoints).
         *
         * @tags Room participation
         * @name RoomInitialSync
         * @summary Snapshot the current state of a room and its most recent messages.
         * @request GET:/_matrix/client/v3/rooms/{roomId}/initialSync
         * @deprecated
         * @secure
         */
        roomInitialSync: (roomId: string, params: RequestParams = {}) =>
            this.request<RoomInitialSyncData, void>({
                path: `/_matrix/client/v3/rooms/${roomId}/initialSync`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description *Note that there are two forms of this API, which are documented separately. This version of the API does not require that the inviter know the Matrix identifier of the invitee, and instead relies on third party identifiers. The homeserver uses an identity server to perform the mapping from third party identifier to a Matrix identifier. The other is documented in the* [joining rooms section](https://spec.matrix.org/v1.5/client-server-api/#post_matrixclientv3roomsroomidinvite). This API invites a user to participate in a particular room. They do not start participating in the room until they actually join the room. Only users currently in a particular room can invite other users to join that room. If the identity server did know the Matrix user identifier for the third party identifier, the homeserver will append a `m.room.member` event to the room. If the identity server does not know a Matrix user identifier for the passed third party identifier, the homeserver will issue an invitation which can be accepted upon providing proof of ownership of the third party identifier. This is achieved by the identity server generating a token, which it gives to the inviting homeserver. The homeserver will add an `m.room.third_party_invite` event into the graph for the room, containing that token. When the invitee binds the invited third party identifier to a Matrix user ID, the identity server will give the user a list of pending invitations, each containing: - The room ID to which they were invited - The token given to the homeserver - A signature of the token, signed with the identity server's private key - The matrix user ID who invited them to the room If a token is requested from the identity server, the homeserver will append a `m.room.third_party_invite` event to the room.
         *
         * @tags Room membership
         * @name InviteBy3Pid
         * @summary Invite a user to participate in a particular room.
         * @request POST:/_matrix/client/v3/rooms/{roomId}/invite
         * @secure
         */
        inviteBy3Pid: (roomId: string, body: InviteBy3PidPayload, params: RequestParams = {}) =>
            this.request<InviteBy3PidData, InviteBy3PidError>({
                path: `/_matrix/client/v3/rooms/${roomId}/invite`,
                method: "POST",
                body: body,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description *Note that there are two forms of this API, which are documented separately. This version of the API requires that the inviter knows the Matrix identifier of the invitee. The other is documented in the [third party invites](https://spec.matrix.org/v1.5/client-server-api/#third-party-invites) section.* This API invites a user to participate in a particular room. They do not start participating in the room until they actually join the room. Only users currently in a particular room can invite other users to join that room. If the user was invited to the room, the homeserver will append a `m.room.member` event to the room.
         *
         * @tags Room membership
         * @name InviteUser
         * @summary Invite a user to participate in a particular room.
         * @request POST:/_matrix/client/v3/rooms/{roomId}/invite
         * @secure
         */
        inviteUser: (roomId: string, body: InviteUserPayload, params: RequestParams = {}) =>
            this.request<InviteUserData, InviteUserError>({
                path: `/_matrix/client/v3/rooms/${roomId}/invite `,
                method: "POST",
                body: body,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description *Note that this API requires a room ID, not alias.* `/join/{roomIdOrAlias}` *exists if you have a room alias.* This API starts a user participating in a particular room, if that user is allowed to participate in that room. After this call, the client is allowed to see all current state events in the room, and all subsequent events associated with the room until the user leaves the room. After a user has joined a room, the room will appear as an entry in the response of the [`/initialSync`](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3initialsync) and [`/sync`](https://spec.matrix.org/v1.5/client-server-api/#get_matrixclientv3sync) APIs.
         *
         * @tags Room membership
         * @name JoinRoomById
         * @summary Start the requesting user participating in a particular room.
         * @request POST:/_matrix/client/v3/rooms/{roomId}/join
         * @secure
         */
        joinRoomById: (roomId: string, body: JoinRoomByIdPayload, params: RequestParams = {}) =>
            this.request<JoinRoomByIdData, JoinRoomByIdError>({
                path: `/_matrix/client/v3/rooms/${roomId}/join`,
                method: "POST",
                body: body,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description This API returns a map of MXIDs to member info objects for members of the room. The current user must be in the room for it to work, unless it is an Application Service in which case any of the AS's users must be in the room. This API is primarily for Application Services and should be faster to respond than `/members` as it can be implemented more efficiently on the server.
         *
         * @tags Room participation
         * @name GetJoinedMembersByRoom
         * @summary Gets the list of currently joined users and their profile data.
         * @request GET:/_matrix/client/v3/rooms/{roomId}/joined_members
         * @secure
         */
        getJoinedMembersByRoom: (roomId: string, params: RequestParams = {}) =>
            this.request<GetJoinedMembersByRoomData, void>({
                path: `/_matrix/client/v3/rooms/${roomId}/joined_members`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description Kick a user from the room. The caller must have the required power level in order to perform this operation. Kicking a user adjusts the target member's membership state to be `leave` with an optional `reason`. Like with other membership changes, a user can directly adjust the target member's state by making a request to `/rooms/<room id>/state/m.room.member/<user id>`.
         *
         * @tags Room membership
         * @name Kick
         * @summary Kick a user from the room.
         * @request POST:/_matrix/client/v3/rooms/{roomId}/kick
         * @secure
         */
        kick: (roomId: string, body: KickPayload, params: RequestParams = {}) =>
            this.request<KickData, KickError>({
                path: `/_matrix/client/v3/rooms/${roomId}/kick`,
                method: "POST",
                body: body,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description This API stops a user participating in a particular room. If the user was already in the room, they will no longer be able to see new events in the room. If the room requires an invite to join, they will need to be re-invited before they can re-join. If the user was invited to the room, but had not joined, this call serves to reject the invite. The user will still be allowed to retrieve history from the room which they were previously allowed to see.
         *
         * @tags Room membership
         * @name LeaveRoom
         * @summary Stop the requesting user participating in a particular room.
         * @request POST:/_matrix/client/v3/rooms/{roomId}/leave
         * @secure
         */
        leaveRoom: (roomId: string, body: LeaveRoomPayload, params: RequestParams = {}) =>
            this.request<LeaveRoomData, LeaveRoomError>({
                path: `/_matrix/client/v3/rooms/${roomId}/leave`,
                method: "POST",
                body: body,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Get the list of members for this room.
         *
         * @tags Room participation
         * @name GetMembersByRoom
         * @summary Get the m.room.member events for the room.
         * @request GET:/_matrix/client/v3/rooms/{roomId}/members
         * @secure
         */
        getMembersByRoom: ({ roomId, ...query }: GetMembersByRoomParams, params: RequestParams = {}) =>
            this.request<GetMembersByRoomData, void>({
                path: `/_matrix/client/v3/rooms/${roomId}/members`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),

        /**
         * @description This API returns a list of message and state events for a room. It uses pagination query parameters to paginate history in the room. *Note*: This endpoint supports lazy-loading of room member events. See [Lazy-loading room members](https://spec.matrix.org/v1.5/client-server-api/#lazy-loading-room-members) for more information.
         *
         * @tags Room participation
         * @name GetRoomEvents
         * @summary Get a list of events for this room
         * @request GET:/_matrix/client/v3/rooms/{roomId}/messages
         * @secure
         */
        getRoomEvents: ({ roomId, ...query }: GetRoomEventsParams, params: RequestParams = {}) =>
            this.request<GetRoomEventsData, void>({
                path: `/_matrix/client/v3/rooms/${roomId}/messages`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),

        /**
         * @description Sets the position of the read marker for a given room, and optionally the read receipt's location.
         *
         * @tags Read Markers
         * @name SetReadMarker
         * @summary Set the position of the read marker for a room.
         * @request POST:/_matrix/client/v3/rooms/{roomId}/read_markers
         * @secure
         */
        setReadMarker: (roomId: string, body: SetReadMarkerPayload, params: RequestParams = {}) =>
            this.request<SetReadMarkerData, SetReadMarkerError>({
                path: `/_matrix/client/v3/rooms/${roomId}/read_markers`,
                method: "POST",
                body: body,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description This API updates the marker for the given receipt type to the event ID specified.
         *
         * @tags Room participation
         * @name PostReceipt
         * @summary Send a receipt for the given event ID.
         * @request POST:/_matrix/client/v3/rooms/{roomId}/receipt/{receiptType}/{eventId}
         * @secure
         */
        postReceipt: (
            roomId: string,
            receiptType: "m.read" | "m.read.private" | "m.fully_read",
            eventId: string,
            receipt: PostReceiptPayload,
            params: RequestParams = {},
        ) =>
            this.request<PostReceiptData, PostReceiptError>({
                path: `/_matrix/client/v3/rooms/${roomId}/receipt/${receiptType}/${eventId}`,
                method: "POST",
                body: receipt,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Strips all information out of an event which isn't critical to the integrity of the server-side representation of the room. This cannot be undone. Any user with a power level greater than or equal to the `m.room.redaction` event power level may send redaction events in the room. If the user's power level greater is also greater than or equal to the `redact` power level of the room, the user may redact events sent by other users. Server administrators may redact events sent by users on their server.
         *
         * @tags Room participation
         * @name RedactEvent
         * @summary Strips all non-integrity-critical information out of an event.
         * @request PUT:/_matrix/client/v3/rooms/{roomId}/redact/{eventId}/{txnId}
         * @secure
         */
        redactEvent: (
            roomId: string,
            eventId: string,
            txnId: string,
            body: RedactEventPayload,
            params: RequestParams = {},
        ) =>
            this.request<RedactEventData, any>({
                path: `/_matrix/client/v3/rooms/${roomId}/redact/${eventId}/${txnId}`,
                method: "PUT",
                body: body,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Reports an event as inappropriate to the server, which may then notify the appropriate people.
         *
         * @tags Reporting content
         * @name ReportContent
         * @summary Reports an event as inappropriate.
         * @request POST:/_matrix/client/v3/rooms/{roomId}/report/{eventId}
         * @secure
         */
        reportContent: (roomId: string, eventId: string, body: ReportContentPayload, params: RequestParams = {}) =>
            this.request<ReportContentData, any>({
                path: `/_matrix/client/v3/rooms/${roomId}/report/${eventId}`,
                method: "POST",
                body: body,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description This endpoint is used to send a message event to a room. Message events allow access to historical events and pagination, making them suited for "once-off" activity in a room. The body of the request should be the content object of the event; the fields in this object will vary depending on the type of event. See [Room Events](https://spec.matrix.org/v1.5/client-server-api/#room-events) for the m. event specification.
         *
         * @tags Room participation
         * @name SendMessage
         * @summary Send a message event to the given room.
         * @request PUT:/_matrix/client/v3/rooms/{roomId}/send/{eventType}/{txnId}
         * @secure
         */
        sendMessage: (
            roomId: string,
            eventType: string,
            txnId: string,
            body: SendMessagePayload,
            params: RequestParams = {},
        ) =>
            this.request<SendMessageData, any>({
                path: `/_matrix/client/v3/rooms/${roomId}/send/${eventType}/${txnId}`,
                method: "PUT",
                body: body,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Get the state events for the current state of a room.
         *
         * @tags Room participation
         * @name GetRoomState
         * @summary Get all state events in the current state of a room.
         * @request GET:/_matrix/client/v3/rooms/{roomId}/state
         * @secure
         */
        getRoomState: (roomId: string, params: RequestParams = {}) =>
            this.request<GetRoomStateData, void>({
                path: `/_matrix/client/v3/rooms/${roomId}/state`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description Looks up the contents of a state event in a room. If the user is joined to the room then the state is taken from the current state of the room. If the user has left the room then the state is taken from the state of the room when they left.
         *
         * @tags Room participation
         * @name GetRoomStateWithKey
         * @summary Get the state identified by the type and key.
         * @request GET:/_matrix/client/v3/rooms/{roomId}/state/{eventType}/{stateKey}
         * @secure
         */
        getRoomStateWithKey: (roomId: string, eventType: string, stateKey: string, params: RequestParams = {}) =>
            this.request<GetRoomStateWithKeyData, void>({
                path: `/_matrix/client/v3/rooms/${roomId}/state/${eventType}/${stateKey}`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description State events can be sent using this endpoint.  These events will be overwritten if `<room id>`, `<event type>` and `<state key>` all match. Requests to this endpoint **cannot use transaction IDs** like other `PUT` paths because they cannot be differentiated from the `state_key`. Furthermore, `POST` is unsupported on state paths. The body of the request should be the content object of the event; the fields in this object will vary depending on the type of event. See [Room Events](https://spec.matrix.org/v1.5/client-server-api/#room-events) for the `m.` event specification. If the event type being sent is `m.room.canonical_alias` servers SHOULD ensure that any new aliases being listed in the event are valid per their grammar/syntax and that they point to the room ID where the state event is to be sent. Servers do not validate aliases which are being removed or are already present in the state event.
         *
         * @tags Room participation
         * @name SetRoomStateWithKey
         * @summary Send a state event to the given room.
         * @request PUT:/_matrix/client/v3/rooms/{roomId}/state/{eventType}/{stateKey}
         * @secure
         */
        setRoomStateWithKey: (
            roomId: string,
            eventType: string,
            stateKey: string,
            body: SetRoomStateWithKeyPayload,
            params: RequestParams = {},
        ) =>
            this.request<SetRoomStateWithKeyData, SetRoomStateWithKeyError>({
                path: `/_matrix/client/v3/rooms/${roomId}/state/${eventType}/${stateKey}`,
                method: "PUT",
                body: body,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description This tells the server that the user is typing for the next N milliseconds where N is the value specified in the `timeout` key. Alternatively, if `typing` is `false`, it tells the server that the user has stopped typing.
         *
         * @tags Room participation
         * @name SetTyping
         * @summary Informs the server that the user has started or stopped typing.
         * @request PUT:/_matrix/client/v3/rooms/{roomId}/typing/{userId}
         * @secure
         */
        setTyping: (userId: string, roomId: string, typingState: SetTypingPayload, params: RequestParams = {}) =>
            this.request<SetTypingData, SetTypingError>({
                path: `/_matrix/client/v3/rooms/${roomId}/typing/${userId}`,
                method: "PUT",
                body: typingState,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Unban a user from the room. This allows them to be invited to the room, and join if they would otherwise be allowed to join according to its join rules. The caller must have the required power level in order to perform this operation.
         *
         * @tags Room membership
         * @name Unban
         * @summary Unban a user from the room.
         * @request POST:/_matrix/client/v3/rooms/{roomId}/unban
         * @secure
         */
        unban: (roomId: string, body: UnbanPayload, params: RequestParams = {}) =>
            this.request<UnbanData, UnbanError>({
                path: `/_matrix/client/v3/rooms/${roomId}/unban`,
                method: "POST",
                body: body,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Upgrades the given room to a particular room version.
         *
         * @tags Room upgrades
         * @name UpgradeRoom
         * @summary Upgrades a room to a new room version.
         * @request POST:/_matrix/client/v3/rooms/{roomId}/upgrade
         * @secure
         */
        upgradeRoom: (roomId: string, body: UpgradeRoomPayload, params: RequestParams = {}) =>
            this.request<UpgradeRoomData, UpgradeRoomError>({
                path: `/_matrix/client/v3/rooms/${roomId}/upgrade`,
                method: "POST",
                body: body,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Performs a full text search across different categories.
         *
         * @tags Search
         * @name Search
         * @summary Perform a server-side search.
         * @request POST:/_matrix/client/v3/search
         * @secure
         */
        search: (query: SearchParams, body: SearchPayload, params: RequestParams = {}) =>
            this.request<SearchData, SearchError>({
                path: `/_matrix/client/v3/search`,
                method: "POST",
                query: query,
                body: body,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description This endpoint is used to send send-to-device events to a set of client devices.
         *
         * @tags Send-to-Device messaging
         * @name SendToDevice
         * @summary Send an event to a given set of devices.
         * @request PUT:/_matrix/client/v3/sendToDevice/{eventType}/{txnId}
         * @secure
         */
        sendToDevice: (eventType: string, txnId: string, body: SendToDevicePayload, params: RequestParams = {}) =>
            this.request<SendToDeviceData, any>({
                path: `/_matrix/client/v3/sendToDevice/${eventType}/${txnId}`,
                method: "PUT",
                body: body,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Synchronise the client's state with the latest state on the server. Clients use this API when they first log in to get an initial snapshot of the state on the server, and then continue to call this API to get incremental deltas to the state, and to receive new messages. *Note*: This endpoint supports lazy-loading. See [Filtering](https://spec.matrix.org/v1.5/client-server-api/#filtering) for more information. Lazy-loading members is only supported on a `StateFilter` for this endpoint. When lazy-loading is enabled, servers MUST include the syncing user's own membership event when they join a room, or when the full state of rooms is requested, to aid discovering the user's avatar & displayname. Further, like other members, the user's own membership event is eligible for being considered redundant by the server. When a sync is `limited`, the server MUST return membership events for events in the gap (between `since` and the start of the returned timeline), regardless as to whether or not they are redundant. This ensures that joins/leaves and profile changes which occur during the gap are not lost. Note that the default behaviour of `state` is to include all membership events, alongside other state, when lazy-loading is not enabled.
         *
         * @tags Room participation
         * @name Sync
         * @summary Synchronise the client's state and receive new messages.
         * @request GET:/_matrix/client/v3/sync
         * @secure
         */
        sync: (query: SyncParams, params: RequestParams = {}) =>
            this.request<SyncData, any>({
                path: `/_matrix/client/v3/sync`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),

        /**
         * @description Retrieve an array of third party network locations from a Matrix room alias.
         *
         * @tags Third Party Lookup
         * @name QueryLocationByAlias
         * @summary Reverse-lookup third party locations given a Matrix room alias.
         * @request GET:/_matrix/client/v3/thirdparty/location
         * @secure
         */
        queryLocationByAlias: (query: QueryLocationByAliasParams, params: RequestParams = {}) =>
            this.request<QueryLocationByAliasData, QueryLocationByAliasError>({
                path: `/_matrix/client/v3/thirdparty/location`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),

        /**
         * @description Requesting this endpoint with a valid protocol name results in a list of successful mapping results in a JSON array. Each result contains objects to represent the Matrix room or rooms that represent a portal to this third party network. Each has the Matrix room alias string, an identifier for the particular third party network protocol, and an object containing the network-specific fields that comprise this identifier. It should attempt to canonicalise the identifier as much as reasonably possible given the network type.
         *
         * @tags Third Party Lookup
         * @name QueryLocationByProtocol
         * @summary Retrieve Matrix-side portals rooms leading to a third party location.
         * @request GET:/_matrix/client/v3/thirdparty/location/{protocol}
         * @secure
         */
        queryLocationByProtocol: ({ protocol, ...query }: QueryLocationByProtocolParams, params: RequestParams = {}) =>
            this.request<QueryLocationByProtocolData, QueryLocationByProtocolError>({
                path: `/_matrix/client/v3/thirdparty/location/${protocol}`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),

        /**
         * @description Fetches the metadata from the homeserver about a particular third party protocol.
         *
         * @tags Third Party Lookup
         * @name GetProtocolMetadata
         * @summary Retrieve metadata about a specific protocol that the homeserver supports.
         * @request GET:/_matrix/client/v3/thirdparty/protocol/{protocol}
         * @secure
         */
        getProtocolMetadata: (protocol: string, params: RequestParams = {}) =>
            this.request<GetProtocolMetadataData, GetProtocolMetadataError>({
                path: `/_matrix/client/v3/thirdparty/protocol/${protocol}`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description Fetches the overall metadata about protocols supported by the homeserver. Includes both the available protocols and all fields required for queries against each protocol.
         *
         * @tags Third Party Lookup
         * @name GetProtocols
         * @summary Retrieve metadata about all protocols that a homeserver supports.
         * @request GET:/_matrix/client/v3/thirdparty/protocols
         * @secure
         */
        getProtocols: (params: RequestParams = {}) =>
            this.request<GetProtocolsData, any>({
                path: `/_matrix/client/v3/thirdparty/protocols`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description Retrieve an array of third party users from a Matrix User ID.
         *
         * @tags Third Party Lookup
         * @name QueryUserById
         * @summary Reverse-lookup third party users given a Matrix User ID.
         * @request GET:/_matrix/client/v3/thirdparty/user
         * @secure
         */
        queryUserById: (query: QueryUserByIdParams, params: RequestParams = {}) =>
            this.request<QueryUserByIdData, QueryUserByIdError>({
                path: `/_matrix/client/v3/thirdparty/user`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),

        /**
         * @description Retrieve a Matrix User ID linked to a user on the third party service, given a set of user parameters.
         *
         * @tags Third Party Lookup
         * @name QueryUserByProtocol
         * @summary Retrieve the Matrix User ID of a corresponding third party user.
         * @request GET:/_matrix/client/v3/thirdparty/user/{protocol}
         * @secure
         */
        queryUserByProtocol: ({ protocol, ...query }: QueryUserByProtocolParams, params: RequestParams = {}) =>
            this.request<QueryUserByProtocolData, QueryUserByProtocolError>({
                path: `/_matrix/client/v3/thirdparty/user/${protocol}`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),

        /**
         * @description Get some account data for the client. This config is only visible to the user that set the account data.
         *
         * @tags User data
         * @name GetAccountData
         * @summary Get some account data for the user.
         * @request GET:/_matrix/client/v3/user/{userId}/account_data/{type}
         * @secure
         */
        getAccountData: (userId: string, type: string, params: RequestParams = {}) =>
            this.request<GetAccountDataData, GetAccountDataError>({
                path: `/_matrix/client/v3/user/${userId}/account_data/${type}`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description Set some account data for the client. This config is only visible to the user that set the account data. The config will be available to clients through the top-level `account_data` field in the homeserver response to [/sync](#get_matrixclientv3sync).
         *
         * @tags User data
         * @name SetAccountData
         * @summary Set some account data for the user.
         * @request PUT:/_matrix/client/v3/user/{userId}/account_data/{type}
         * @secure
         */
        setAccountData: (userId: string, type: string, content: SetAccountDataPayload, params: RequestParams = {}) =>
            this.request<SetAccountDataData, SetAccountDataError>({
                path: `/_matrix/client/v3/user/${userId}/account_data/${type}`,
                method: "PUT",
                body: content,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Uploads a new filter definition to the homeserver. Returns a filter ID that may be used in future requests to restrict which events are returned to the client.
         *
         * @tags Room participation
         * @name DefineFilter
         * @summary Upload a new filter.
         * @request POST:/_matrix/client/v3/user/{userId}/filter
         * @secure
         */
        defineFilter: (userId: string, filter: DefineFilterPayload, params: RequestParams = {}) =>
            this.request<DefineFilterData, any>({
                path: `/_matrix/client/v3/user/${userId}/filter`,
                method: "POST",
                body: filter,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Room participation
         * @name GetFilter
         * @summary Download a filter
         * @request GET:/_matrix/client/v3/user/{userId}/filter/{filterId}
         * @secure
         */
        getFilter: (userId: string, filterId: string, params: RequestParams = {}) =>
            this.request<GetFilterData, void>({
                path: `/_matrix/client/v3/user/${userId}/filter/${filterId}`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description Gets an OpenID token object that the requester may supply to another service to verify their identity in Matrix. The generated token is only valid for exchanging for user information from the federation API for OpenID. The access token generated is only valid for the OpenID API. It cannot be used to request another OpenID access token or call `/sync`, for example.
         *
         * @tags OpenID
         * @name RequestOpenIdToken
         * @summary Get an OpenID token object to verify the requester's identity.
         * @request POST:/_matrix/client/v3/user/{userId}/openid/request_token
         * @secure
         */
        requestOpenIdToken: (userId: string, body: RequestOpenIdTokenPayload, params: RequestParams = {}) =>
            this.request<RequestOpenIdTokenData, RequestOpenIdTokenError>({
                path: `/_matrix/client/v3/user/${userId}/openid/request_token`,
                method: "POST",
                body: body,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Get some account data for the client on a given room. This config is only visible to the user that set the account data.
         *
         * @tags User data
         * @name GetAccountDataPerRoom
         * @summary Get some account data for the user that is specific to a room.
         * @request GET:/_matrix/client/v3/user/{userId}/rooms/{roomId}/account_data/{type}
         * @secure
         */
        getAccountDataPerRoom: (userId: string, roomId: string, type: string, params: RequestParams = {}) =>
            this.request<GetAccountDataPerRoomData, GetAccountDataPerRoomError>({
                path: `/_matrix/client/v3/user/${userId}/rooms/${roomId}/account_data/${type}`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description Set some account data for the client on a given room. This config is only visible to the user that set the account data. The config will be delivered to clients in the per-room entries via [/sync](#get_matrixclientv3sync).
         *
         * @tags User data
         * @name SetAccountDataPerRoom
         * @summary Set some account data for the user that is specific to a room.
         * @request PUT:/_matrix/client/v3/user/{userId}/rooms/{roomId}/account_data/{type}
         * @secure
         */
        setAccountDataPerRoom: (
            userId: string,
            roomId: string,
            type: string,
            content: SetAccountDataPerRoomPayload,
            params: RequestParams = {},
        ) =>
            this.request<SetAccountDataPerRoomData, SetAccountDataPerRoomError>({
                path: `/_matrix/client/v3/user/${userId}/rooms/${roomId}/account_data/${type}`,
                method: "PUT",
                body: content,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description List the tags set by a user on a room.
         *
         * @tags User data
         * @name GetRoomTags
         * @summary List the tags for a room.
         * @request GET:/_matrix/client/v3/user/{userId}/rooms/{roomId}/tags
         * @secure
         */
        getRoomTags: (userId: string, roomId: string, params: RequestParams = {}) =>
            this.request<GetRoomTagsData, any>({
                path: `/_matrix/client/v3/user/${userId}/rooms/${roomId}/tags`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description Remove a tag from the room.
         *
         * @tags User data
         * @name DeleteRoomTag
         * @summary Remove a tag from the room.
         * @request DELETE:/_matrix/client/v3/user/{userId}/rooms/{roomId}/tags/{tag}
         * @secure
         */
        deleteRoomTag: (userId: string, roomId: string, tag: string, params: RequestParams = {}) =>
            this.request<DeleteRoomTagData, any>({
                path: `/_matrix/client/v3/user/${userId}/rooms/${roomId}/tags/${tag}`,
                method: "DELETE",
                secure: true,
                ...params,
            }),

        /**
         * @description Add a tag to the room.
         *
         * @tags User data
         * @name SetRoomTag
         * @summary Add a tag to a room.
         * @request PUT:/_matrix/client/v3/user/{userId}/rooms/{roomId}/tags/{tag}
         * @secure
         */
        setRoomTag: (
            userId: string,
            roomId: string,
            tag: string,
            body: SetRoomTagPayload,
            params: RequestParams = {},
        ) =>
            this.request<SetRoomTagData, any>({
                path: `/_matrix/client/v3/user/${userId}/rooms/${roomId}/tags/${tag}`,
                method: "PUT",
                body: body,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description Performs a search for users. The homeserver may determine which subset of users are searched, however the homeserver MUST at a minimum consider the users the requesting user shares a room with and those who reside in public rooms (known to the homeserver). The search MUST consider local users to the homeserver, and SHOULD query remote users as part of the search. The search is performed case-insensitively on user IDs and display names preferably using a collation determined based upon the `Accept-Language` header provided in the request, if present.
         *
         * @tags User directory
         * @name SearchUserDirectory
         * @summary Searches the user directory.
         * @request POST:/_matrix/client/v3/user_directory/search
         * @secure
         */
        searchUserDirectory: (body: SearchUserDirectoryPayload, params: RequestParams = {}) =>
            this.request<SearchUserDirectoryData, SearchUserDirectoryError>({
                path: `/_matrix/client/v3/user_directory/search`,
                method: "POST",
                body: body,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),

        /**
         * @description This API provides credentials for the client to use when initiating calls.
         *
         * @tags VOIP
         * @name GetTurnServer
         * @summary Obtain TURN server credentials.
         * @request GET:/_matrix/client/v3/voip/turnServer
         * @secure
         */
        getTurnServer: (params: RequestParams = {}) =>
            this.request<GetTurnServerData, GetTurnServerError>({
                path: `/_matrix/client/v3/voip/turnServer`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * @description Gets the versions of the specification supported by the server. Values will take the form `vX.Y` or `rX.Y.Z` in historical cases. See [the Specification Versioning](../#specification-versions) for more information. The server may additionally advertise experimental features it supports through `unstable_features`. These features should be namespaced and may optionally include version information within their name if desired. Features listed here are not for optionally toggling parts of the Matrix specification and should only be used to advertise support for a feature which has not yet landed in the spec. For example, a feature currently undergoing the proposal process may appear here and eventually be taken off this list once the feature lands in the spec and the server deems it reasonable to do so. Servers may wish to keep advertising features here after they've been released into the spec to give clients a chance to upgrade appropriately. Additionally, clients should avoid using unstable features in their stable releases.
         *
         * @tags Server administration
         * @name GetVersions
         * @summary Gets the versions of the specification supported by the server.
         * @request GET:/_matrix/client/versions
         */
        getVersions: (params: RequestParams = {}) =>
            this.request<GetVersionsData, any>({
                path: `/_matrix/client/versions`,
                method: "GET",
                ...params,
            }),

        /**
         * @description This endpoint allows clients to retrieve the configuration of the content repository, such as upload limitations. Clients SHOULD use this as a guide when using content repository endpoints. All values are intentionally left optional. Clients SHOULD follow the advice given in the field description when the field is not available. **NOTE:** Both clients and server administrators should be aware that proxies between the client and the server may affect the apparent behaviour of content repository APIs, for example, proxies may enforce a lower upload size limit than is advertised by the server on this endpoint.
         *
         * @tags Media
         * @name GetConfig
         * @summary Get the configuration for the content repository.
         * @request GET:/_matrix/media/v3/config
         * @secure
         */
        getConfig: (params: RequestParams = {}) =>
            this.request<GetConfigData, GetConfigError>({
                path: `/_matrix/media/v3/config`,
                method: "GET",
                secure: true,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Media
         * @name GetContent
         * @summary Download content from the content repository.
         * @request GET:/_matrix/media/v3/download/{serverName}/{mediaId}
         */
        getContent: ({ serverName, mediaId, ...query }: GetContentParams, params: RequestParams = {}) =>
            this.request<GetContentData, GetContentError>({
                path: `/_matrix/media/v3/download/${serverName}/${mediaId}`,
                method: "GET",
                query: query,
                ...params,
            }),

        /**
         * @description This will download content from the content repository (same as the previous endpoint) but replace the target file name with the one provided by the caller.
         *
         * @tags Media
         * @name GetContentOverrideName
         * @summary Download content from the content repository overriding the file name
         * @request GET:/_matrix/media/v3/download/{serverName}/{mediaId}/{fileName}
         */
        getContentOverrideName: (
            { serverName, mediaId, fileName, ...query }: GetContentOverrideNameParams,
            params: RequestParams = {},
        ) =>
            this.request<GetContentOverrideNameData, GetContentOverrideNameError>({
                path: `/_matrix/media/v3/download/${serverName}/${mediaId}/${fileName}`,
                method: "GET",
                query: query,
                ...params,
            }),

        /**
         * @description Get information about a URL for the client. Typically this is called when a client sees a URL in a message and wants to render a preview for the user. **Note:** Clients should consider avoiding this endpoint for URLs posted in encrypted rooms. Encrypted rooms often contain more sensitive information the users do not want to share with the homeserver, and this can mean that the URLs being shared should also not be shared with the homeserver.
         *
         * @tags Media
         * @name GetUrlPreview
         * @summary Get information about a URL for a client
         * @request GET:/_matrix/media/v3/preview_url
         * @secure
         */
        getUrlPreview: (query: GetUrlPreviewParams, params: RequestParams = {}) =>
            this.request<GetUrlPreviewData, GetUrlPreviewError>({
                path: `/_matrix/media/v3/preview_url`,
                method: "GET",
                query: query,
                secure: true,
                ...params,
            }),

        /**
         * @description Download a thumbnail of content from the content repository. See the [Thumbnails](https://spec.matrix.org/v1.5/client-server-api/#thumbnails) section for more information.
         *
         * @tags Media
         * @name GetContentThumbnail
         * @summary Download a thumbnail of content from the content repository
         * @request GET:/_matrix/media/v3/thumbnail/{serverName}/{mediaId}
         */
        getContentThumbnail: (
            { serverName, mediaId, ...query }: GetContentThumbnailParams,
            params: RequestParams = {},
        ) =>
            this.request<GetContentThumbnailData, GetContentThumbnailError>({
                path: `/_matrix/media/v3/thumbnail/${serverName}/${mediaId}`,
                method: "GET",
                query: query,
                ...params,
            }),

        /**
         * No description
         *
         * @tags Media
         * @name UploadContent
         * @summary Upload some content to the content repository.
         * @request POST:/_matrix/media/v3/upload
         * @secure
         */
        uploadContent: (query: UploadContentParams, content: UploadContentPayload, params: RequestParams = {}) =>
            this.request<UploadContentData, UploadContentError>({
                path: `/_matrix/media/v3/upload`,
                method: "POST",
                query: query,
                body: content,
                secure: true,
                type: ContentType.Json,
                ...params,
            }),
    };
}
