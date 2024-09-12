const generateVersionDropdown =
    require("./src/utils.js").generateVersionDropdown;

const docsSidebar = {
    docs: [
        {
            type: "html",
        },
        {
            type: "doc",
            id: "index",
        },
        {
            type: "category",
            label: "Core Concepts",
            collapsed: true,
            items: ["core/terminology", "core/architecture"],
        },
        {
            type: "category",
            label: "Enterprise",
            collapsed: true,
            link: {
                type: "doc",
                id: "enterprise/index",
            },
            items: [
                "enterprise/get-started",
                "enterprise/manage-enterprise",
                "enterprise/entsupport",
            ],
        },
        {
            type: "category",
            label: "Installation and Configuration ",
            collapsed: true,
            link: {
                type: "doc",
                id: "install-config/index",
            },
            items: [
                {
                    type: "category",
                    label: "Installation",
                    collapsed: true,
                    items: [
                        "install-config/install/docker-compose",
                        "install-config/install/kubernetes",
                    ],
                },
                {
                    type: "category",
                    label: "Configuration",
                    link: {
                        type: "doc",
                        id: "install-config/configuration/configuration",
                    },
                    items: [],
                },
                "install-config/upgrade",
                "install-config/beta",
                "install-config/reverse-proxy",
                "install-config/geoip",
                "install-config/automated-install",
                "install-config/air-gapped",
                "install-config/storage-s3",
            ],
        },
        {
            type: "category",
            label: "Add and Secure Applications",
            collapsed: true,
            items: [
                {
                    type: "category",
                    label: "Applications",
                    link: {
                        type: "doc",
                        id: "add-secure-apps/applications/index",
                    },
                    items: ["add-secure-apps/applications/manage_apps"],
                },
                {
                    type: "category",
                    label: "Providers",
                    link: {
                        type: "doc",
                        id: "add-secure-apps/providers/index",
                    },
                    items: [
                        {
                            type: "category",
                            label: "Property Mappings",
                            link: {
                                type: "doc",
                                id: "add-secure-apps/providers/property-mappings/index",
                            },
                            items: [
                                "add-secure-apps/providers/property-mappings/expression",
                                ,
                            ],
                        },
                        {
                            type: "category",
                            label: "Google Workspace Provider",
                            link: {
                                type: "doc",
                                id: "add-secure-apps/providers/gws/index",
                            },
                            items: [
                                "add-secure-apps/providers/gws/setup-gws",
                                "add-secure-apps/providers/gws/add-gws-provider",
                            ],
                        },
                        {
                            type: "category",
                            label: "LDAP Provider",
                            link: {
                                type: "doc",
                                id: "add-secure-apps/providers/ldap/index",
                            },
                            items: [
                                "add-secure-apps/providers/ldap/generic_setup",
                            ],
                        },
                        {
                            type: "category",
                            label: "Microsoft Entra ID Provider",
                            link: {
                                type: "doc",
                                id: "add-secure-apps/providers/entra/index",
                            },
                            items: [
                                "add-secure-apps/providers/entra/setup-entra",
                                "add-secure-apps/providers/entra/add-entra-provider",
                            ],
                        },
                        {
                            type: "category",
                            label: "OAuth2 Provider",
                            link: {
                                type: "doc",
                                id: "add-secure-apps/providers/oauth2/index",
                            },
                            items: [
                                "add-secure-apps/providers/oauth2/client_credentials",
                                "add-secure-apps/providers/oauth2/device_code",
                            ],
                        },
                        "add-secure-apps/providers/saml/index",
                        "add-secure-apps/providers/radius/index",
                        {
                            type: "category",
                            label: "Proxy Provider",
                            link: {
                                type: "doc",
                                id: "add-secure-apps/providers/proxy/index",
                            },
                            items: [
                                "add-secure-apps/providers/proxy/custom_headers",
                                "add-secure-apps/providers/proxy/header_authentication",
                                {
                                    type: "category",
                                    label: "Forward authentication",
                                    link: {
                                        type: "doc",
                                        id: "add-secure-apps/providers/proxy/forward_auth",
                                    },
                                    items: [
                                        "add-secure-apps/providers/proxy/server_nginx",
                                        "add-secure-apps/providers/proxy/server_traefik",
                                        "add-secure-apps/providers/proxy/server_envoy",
                                        "add-secure-apps/providers/proxy/server_caddy",
                                    ],
                                },
                            ],
                        },
                        "add-secure-apps/providers/scim/index",
                        {
                            type: "category",
                            label: "RAC (Remote Access Control) Provider",
                            link: {
                                type: "doc",
                                id: "add-secure-apps/providers/rac/index",
                            },
                            items: ["add-secure-apps/providers/rac/how-to-rac"],
                        },
                    ],
                },
                {
                    type: "category",
                    label: "Flows and Stages",
                    collapsed: true,
                    items: [
                        {
                            type: "category",
                            label: "Flows",
                            link: {
                                type: "doc",
                                id: "add-secure-apps/flows-stages/flow/index",
                            },
                            items: [
                                "add-secure-apps/flows-stages/flow/layouts",
                                "add-secure-apps/flows-stages/flow/inspector",
                                "add-secure-apps/flows-stages/flow/context/index",
                                {
                                    type: "category",
                                    label: "Examples",
                                    items: [
                                        "add-secure-apps/flows-stages/flow/examples/flows",
                                        "add-secure-apps/flows-stages/flow/examples/snippets",
                                    ],
                                },
                                {
                                    type: "category",
                                    label: "Executors",
                                    items: [
                                        "add-secure-apps/flows-stages/flow/executors/if-flow",
                                        "add-secure-apps/flows-stages/flow/executors/sfe",
                                        "add-secure-apps/flows-stages/flow/executors/user-settings",
                                        "add-secure-apps/flows-stages/flow/executors/headless",
                                    ],
                                },
                            ],
                        },
                        {
                            type: "category",
                            label: "Stages",
                            link: {
                                type: "doc",
                                id: "add-secure-apps/flows-stages/stages/index",
                            },
                            items: [
                                "add-secure-apps/flows-stages/stages/authenticator_duo/index",
                                "add-secure-apps/flows-stages/stages/authenticator_sms/index",
                                "add-secure-apps/flows-stages/stages/authenticator_static/index",
                                "add-secure-apps/flows-stages/stages/authenticator_totp/index",
                                "add-secure-apps/flows-stages/stages/authenticator_validate/index",
                                "add-secure-apps/flows-stages/stages/authenticator_webauthn/index",
                                "add-secure-apps/flows-stages/stages/captcha/index",
                                "add-secure-apps/flows-stages/stages/deny",
                                "add-secure-apps/flows-stages/stages/email/index",
                                "add-secure-apps/flows-stages/stages/identification/index",
                                "add-secure-apps/flows-stages/stages/invitation/index",
                                "add-secure-apps/flows-stages/stages/password/index",
                                "add-secure-apps/flows-stages/stages/prompt/index",
                                "add-secure-apps/flows-stages/stages/source/index",
                                "add-secure-apps/flows-stages/stages/user_delete",
                                "add-secure-apps/flows-stages/stages/user_login/index",
                                "add-secure-apps/flows-stages/stages/user_logout",
                                "add-secure-apps/flows-stages/stages/user_write",
                            ],
                        },
                    ],
                },
                {
                    type: "category",
                    label: "Outposts",
                    link: {
                        type: "doc",
                        id: "add-secure-apps/outposts/index",
                    },
                    items: [
                        "add-secure-apps/outposts/embedded/embedded",
                        {
                            type: "category",
                            label: "Integrations",
                            items: [
                                "add-secure-apps/outposts/integrations/docker",
                                "add-secure-apps/outposts/integrations/kubernetes",
                            ],
                        },
                        {
                            type: "category",
                            label: "Running and upgrading",
                            items: [
                                "add-secure-apps/outposts/manual-deploy-docker-compose",
                                "add-secure-apps/outposts/manual-deploy-kubernetes",
                                "add-secure-apps/outposts/upgrading",
                            ],
                        },
                        "add-secure-apps/outposts/manual-deploy-docker-compose",
                        "add-secure-apps/outposts/manual-deploy-kubernetes",
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "Customize your authentik Instance",
            collapsed: true,
            items: [
                {
                    type: "category",
                    label: "Policies",
                    collapsed: true,
                    link: {
                        type: "doc",
                        id: "customize/policies/index",
                    },
                    items: [
                        {
                            type: "category",
                            label: "Working with Policies",
                            link: {
                                type: "doc",
                                id: "customize/policies/working_with_policies/working_with_policies",
                            },
                            items: [
                                "customize/policies/working_with_policies/unique_email",
                                "customize/policies/working_with_policies/whitelist_email",
                            ],
                        },
                    ],
                },
                {
                    type: "category",
                    label: "Interfaces",
                    items: [
                        {
                            type: "category",
                            label: "Flow",
                            items: ["customize/interfaces/flow/customization"],
                        },
                        {
                            type: "category",
                            label: "User",
                            items: ["customize/interfaces/user/customization"],
                        },
                        {
                            type: "category",
                            label: "Admin",
                            items: ["customize/interfaces/admin/customization"],
                        },
                    ],
                },
                {
                    type: "category",
                    label: "Blueprints",
                    link: {
                        type: "doc",
                        id: "blueprints/index",
                    },
                    items: [
                        "blueprints/export",
                        "blueprints/v1/structure",
                        "blueprints/v1/tags",
                        "blueprints/v1/example",
                        {
                            type: "category",
                            label: "Models",
                            link: {
                                type: "doc",
                                id: "blueprints/v1/models",
                                    },
                            items: ["blueprints/v1/meta"],
                        },
                    ],
                },
                        "customize/brands",
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "Manage Users and Sources",
            collapsed: true,
            items: [
                {
                    type: "category",
                    label: "Users",
                    link: {
                        type: "doc",
                        id: "users-sources/user/index",
                    },
                    items: [
                        "users-sources/user/user_basic_operations",
                        "users-sources/user/user_ref",
                        "users-sources/user/invitations",
                    ],
                },
                {
                    type: "category",
                    label: "Groups",
                    link: {
                        type: "doc",
                        id: "users-sources/groups/index",
                    },
                    items: [
                        "users-sources/groups/manage_groups",
                        "users-sources/groups/group_ref",
                    ],
                },
                {
                    type: "category",
                    label: "Roles",
                    link: {
                        type: "doc",
                        id: "users-sources/roles/index",
                    },
                    items: ["users-sources/roles/manage_roles"],
                },
                {
                    type: "category",
                    label: "Access Control",
                    link: {
                        type: "doc",
                        id: "users-sources/access-control/index",
                    },
                    items: [
                        "users-sources/access-control/permissions",
                        "users-sources/access-control/manage_permissions",
                    ],
                },
                {
                    type: "category",
                    label: "Federated and Social Sources",
                    collapsed: true,
                    link: {
                        type: "doc",
                        id: "users-sources/sources/index",
                    },
                    items: [
                        {
                            type: "category",
                            label: "Protocols",
                            collapsed: true,
                            items: [
                                "users-sources/sources/protocols/ldap/index",
                                "users-sources/sources/protocols/oauth/index",
                                "users-sources/sources/protocols/saml/index",
                                "users-sources/sources/protocols/scim/index",
                            ],
                        },
                        {
                            type: "category",
                            label: "Source Property Mappings",
                            link: {
                                type: "doc",
                                id: "users-sources/sources/property-mappings/index",
                            },
                            items: [
                                "users-sources/sources/property-mappings/expressions",
                            ],
                        },
                        {
                            type: "category",
                            label: "Directory synchronization",
                            items: [
                                "users-sources/sources/directory-sync/active-directory/index",
                                "users-sources/sources/directory-sync/freeipa/index",
                            ],
                        },
                        {
                            type: "category",
                            label: "Social Logins",
                            items: [
                                "users-sources/sources/social-logins/apple/index",
                                "users-sources/sources/social-logins/azure-ad/index",
                                "users-sources/sources/social-logins/discord/index",
                                "users-sources/sources/social-logins/facebook/index",
                                "users-sources/sources/social-logins/github/index",
                                "users-sources/sources/social-logins/google/index",
                                "users-sources/sources/social-logins/mailcow/index",
                                "users-sources/sources/social-logins/twitch/index",
                                "users-sources/sources/social-logins/plex/index",
                                "users-sources/sources/social-logins/twitter/index",
                            ],
                        },
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "System Management",
            collapsed: true,
            items: [
                {
                    type: "category",
                    label: "Operations",
                    collapsed: true,
                    items: ["sys-mgmt/ops/monitoring"],
                },
                {
                    type: "category",
                    label: "Events",
                    collapsed: true,
                    link: {
                        type: "doc",
                        id: "sys-mgmt/events/index",
                    },
                    items: [
                        "sys-mgmt/events/notifications",
                        "sys-mgmt/events/transports",
                    ],
                },
                "sys-mgmt/certificates",
                "sys-mgmt/settings",
            ],
        },
        {
            type: "category",
            label: "Developer Documentation",
            link: {
                type: "doc",
                id: "developer-docs/docs/index",
            },
            items: [
            {
                type: "category",
                label: "API",
                link: {
                    type: "doc",
                    id: "developer-docs/api/api",
                },
                items: [
                    "developer-docs/api/flow-executor",
                    "developer-docs/api/making-schema-changes",
                    "developer-docs/api/websocket",
                    {
                        type: "category",
                        label: "Reference",
                        items: apiReference,
                    },
                    "developer-docs/api/clients",
                ],
            },
            {
                type: "category",
                label: "Setup",
                items: [
                    "developer-docs/setup/full-dev-environment",
                    "developer-docs/setup/frontend-dev-environment",
                    "developer-docs/setup/website-dev-environment",
                ],
            },
            {
                type: "doc",
                id: "developer-docs/translation",
            },
            {
                type: "category",
                label: "Writing documentation",
                link: {
                    type: "doc",
                    id: "developer-docs/docs/writing-documentation",
                },
                items: [
                    "developer-docs/docs/style-guide",
                    {
                        type: "category",
                        label: "Templates",
                        link: {
                            type: "doc",
                            id: "developer-docs/docs/templates/index",
                        },
                        items: [
                            "developer-docs/docs/templates/procedural",
                            "developer-docs/docs/templates/conceptual",
                            "developer-docs/docs/templates/reference",
                            "developer-docs/docs/templates/combo",
                        ],
                    },
                ],
            },
        {
            type: "category",
            label: "Release Notes",
            link: {
                type: "generated-index",
                title: "Releases",
                slug: "releases",
                description: "Release Notes for recent authentik versions",
            },
            items: [
                "releases/2024/v2024.6",
                "releases/2024/v2024.4",
                "releases/2024/v2024.2",
                {
                    type: "category",
                    label: "Previous versions",
                    items: [
                        "releases/2023/v2023.10",
                        "releases/2023/v2023.8",
                        "releases/2023/v2023.6",
                        "releases/2023/v2023.5",
                        "releases/2023/v2023.4",
                        "releases/2023/v2023.3",
                        "releases/2023/v2023.2",
                        "releases/2023/v2023.1",
                        "releases/2022/v2022.12",
                        "releases/2022/v2022.11",
                        "releases/2022/v2022.10",
                        "releases/2022/v2022.9",
                        "releases/2022/v2022.8",
                        "releases/2022/v2022.7",
                        "releases/2022/v2022.6",
                        "releases/2022/v2022.5",
                        "releases/2022/v2022.4",
                        "releases/2022/v2022.2",
                        "releases/2022/v2022.1",
                        "releases/2021/v2021.12",
                        "releases/2021/v2021.10",
                        "releases/2021/v2021.9",
                        "releases/2021/v2021.8",
                        "releases/2021/v2021.7",
                        "releases/2021/v2021.6",
                        "releases/2021/v2021.5",
                        "releases/2021/v2021.4",
                        "releases/2021/v2021.3",
                        "releases/2021/v2021.2",
                        "releases/2021/v2021.1",
                        "releases/old/v0.14",
                        "releases/old/v0.13",
                        "releases/old/v0.12",
                        "releases/old/v0.11",
                        "releases/old/v0.10",
                        "releases/old/v0.9",
                    ],
                },
            ],
        },
    ],
};
docsSidebar.docs[0].value = generateVersionDropdown(docsSidebar);
module.exports = docsSidebar;
