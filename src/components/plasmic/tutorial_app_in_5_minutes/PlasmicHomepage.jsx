// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6nr5Ht9VeJgkfZcszZaDpc
// Component: TVWKelpXPBm-
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import PageLayout from "../../PageLayout"; // plasmic-import: FGUcxIFy-tiF/component
import { RichTable } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-table";
import { tableHelpers as RichTable_Helpers } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-table";
import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_tutorial_app_in_5_minutes.module.css"; // plasmic-import: 6nr5Ht9VeJgkfZcszZaDpc/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: TVWKelpXPBm-/css

createPlasmicElementProxy;

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

const $$ = {};

function PlasmicHomepage__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  let [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "table.selectedRowKey",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: p.generateOnMutateForSpec("selectedRowKey", RichTable_Helpers)
      },
      {
        path: "table.selectedRow",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: p.generateOnMutateForSpec("selectedRow", RichTable_Helpers)
      },
      {
        path: "table.selectedRows",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: p.generateOnMutateForSpec("selectedRows", RichTable_Helpers)
      },
      {
        path: "table.selectedRowKeys",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: p.generateOnMutateForSpec(
          "selectedRowKeys",
          RichTable_Helpers
        )
      },
      {
        path: "form.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        refName: "form",
        onMutate: p.generateOnMutateForSpec("value", FormWrapper_Helpers)
      },
      {
        path: "form.isSubmitting",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,
        refName: "form",
        onMutate: p.generateOnMutateForSpec("isSubmitting", FormWrapper_Helpers)
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const plasmicInvalidate = usePlasmicInvalidate();
  const new$Queries = {
    customers: usePlasmicDataOp(() => {
      return {
        sourceId: "ut9wkHePH26Eiv8ZdAKwB9",
        opId: "2c1ac3e6-dd73-4106-accd-4a2cb547df8d",
        userArgs: {},
        cacheKey: `plasmic.$.2c1ac3e6-dd73-4106-accd-4a2cb547df8d.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);
    $queries = new$Queries;
  }
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <PageLayout
            data-plasmic-name={"pageLayout"}
            data-plasmic-override={overrides.pageLayout}
            className={classNames("__wab_instance", sty.pageLayout)}
          >
            <ph.DataCtxReader>
              {$ctx => (
                <React.Fragment>
                  {(() => {
                    const child$Props = {
                      canSelectRows: "click",
                      className: classNames("__wab_instance", sty.table),
                      data: (() => {
                        try {
                          return $queries.customers;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return undefined;
                          }
                          throw e;
                        }
                      })(),
                      onRowSelectionChanged: async (...eventArgs) => {
                        p.generateStateOnChangePropForCodeComponents(
                          $state,
                          "selectedRowKey",
                          ["table", "selectedRowKey"],
                          RichTable_Helpers
                        ).apply(null, eventArgs);
                        p.generateStateOnChangePropForCodeComponents(
                          $state,
                          "selectedRow",
                          ["table", "selectedRow"],
                          RichTable_Helpers
                        ).apply(null, eventArgs);
                        p.generateStateOnChangePropForCodeComponents(
                          $state,
                          "selectedRows",
                          ["table", "selectedRows"],
                          RichTable_Helpers
                        ).apply(null, eventArgs);
                        p.generateStateOnChangePropForCodeComponents(
                          $state,
                          "selectedRowKeys",
                          ["table", "selectedRowKeys"],
                          RichTable_Helpers
                        ).apply(null, eventArgs);
                      },
                      scopeClassName: sty["table__instance"],
                      selectedRowKey: p.generateStateValueProp($state, [
                        "table",
                        "selectedRowKey"
                      ]),
                      selectedRowKeys: p.generateStateValueProp($state, [
                        "table",
                        "selectedRowKeys"
                      ]),
                      themeResetClassName: classNames(
                        projectcss.root_reset,
                        projectcss.root_reset_tags,
                        projectcss.plasmic_default_styles,
                        projectcss.plasmic_mixins,
                        projectcss.plasmic_tokens,
                        plasmic_antd_5_hostless_css.plasmic_tokens,
                        plasmic_plasmic_rich_components_css.plasmic_tokens
                      )
                    };
                    p.initializeCodeComponentStates(
                      $state,
                      [
                        {
                          name: "selectedRowKey",
                          plasmicStateName: "table.selectedRowKey"
                        },
                        {
                          name: "selectedRow",
                          plasmicStateName: "table.selectedRow"
                        },
                        {
                          name: "selectedRows",
                          plasmicStateName: "table.selectedRows"
                        },
                        {
                          name: "selectedRowKeys",
                          plasmicStateName: "table.selectedRowKeys"
                        }
                      ],

                      [],
                      RichTable_Helpers ?? {},
                      child$Props
                    );
                    return (
                      <RichTable
                        data-plasmic-name={"table"}
                        data-plasmic-override={overrides.table}
                        {...child$Props}
                      />
                    );
                  })()}
                  {(() => {
                    const child$Props = {
                      className: classNames("__wab_instance", sty.form),
                      extendedOnValuesChange:
                        p.generateStateOnChangePropForCodeComponents(
                          $state,
                          "value",
                          ["form", "value"],
                          FormWrapper_Helpers
                        ),
                      formItems: undefined,
                      initialValues: (() => {
                        try {
                          return $state.table.selectedRow;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return undefined;
                          }
                          throw e;
                        }
                      })(),
                      labelCol: { span: 8, horizontalOnly: true },
                      layout: "vertical",
                      mode: undefined,
                      onFinish: async values => {
                        const $steps = {};
                        $steps["updateMany"] = true
                          ? (() => {
                              const actionArgs = {
                                dataOp: {
                                  sourceId: "ut9wkHePH26Eiv8ZdAKwB9",
                                  opId: "48635597-50e6-4e4b-87c5-3799e83b3d7a",
                                  userArgs: {
                                    variables: [$state.form.value],
                                    conditions: [
                                      $state.table.selectedRow.customer_id
                                    ]
                                  },
                                  cacheKey: null,
                                  invalidatedKeys: ["plasmic_refresh_all"],
                                  roleId: null
                                }
                              };
                              return (async ({ dataOp, continueOnError }) => {
                                try {
                                  const response = await executePlasmicDataOp(
                                    dataOp,
                                    {
                                      userAuthToken:
                                        dataSourcesCtx?.userAuthToken,
                                      user: dataSourcesCtx?.user
                                    }
                                  );
                                  await plasmicInvalidate(
                                    dataOp.invalidatedKeys
                                  );
                                  return response;
                                } catch (e) {
                                  if (!continueOnError) {
                                    throw e;
                                  }
                                  return e;
                                }
                              })?.apply(null, [actionArgs]);
                            })()
                          : undefined;
                        if (
                          $steps["updateMany"] != null &&
                          typeof $steps["updateMany"] === "object" &&
                          typeof $steps["updateMany"].then === "function"
                        ) {
                          $steps["updateMany"] = await $steps["updateMany"];
                        }
                      },
                      onIsSubmittingChange:
                        p.generateStateOnChangePropForCodeComponents(
                          $state,
                          "isSubmitting",
                          ["form", "isSubmitting"],
                          FormWrapper_Helpers
                        ),
                      ref: ref => {
                        $refs["form"] = ref;
                      },
                      wrapperCol: { span: 16, horizontalOnly: true }
                    };
                    p.initializeCodeComponentStates(
                      $state,
                      [
                        {
                          name: "value",
                          plasmicStateName: "form.value"
                        },
                        {
                          name: "isSubmitting",
                          plasmicStateName: "form.isSubmitting"
                        }
                      ],

                      [],
                      FormWrapper_Helpers ?? {},
                      child$Props
                    );
                    return (
                      <FormWrapper
                        data-plasmic-name={"form"}
                        data-plasmic-override={overrides.form}
                        {...child$Props}
                      >
                        <FormItemWrapper
                          className={classNames(
                            "__wab_instance",
                            sty.formField__owIn8
                          )}
                          label={"Contact name"}
                          name={"contact_name"}
                        >
                          <AntdInput
                            className={classNames(
                              "__wab_instance",
                              sty.input__fRxhv
                            )}
                          />
                        </FormItemWrapper>
                        <FormItemWrapper
                          className={classNames(
                            "__wab_instance",
                            sty.formField__dhqPo
                          )}
                          label={"Contact title"}
                          name={"contact_title"}
                        >
                          <AntdInput
                            className={classNames(
                              "__wab_instance",
                              sty.input__bm8Jc
                            )}
                          />
                        </FormItemWrapper>
                        <FormItemWrapper
                          className={classNames(
                            "__wab_instance",
                            sty.formField___8QZp
                          )}
                          label={"Company name"}
                          name={"company_name"}
                        >
                          <AntdInput
                            className={classNames(
                              "__wab_instance",
                              sty.input__l2Iz2
                            )}
                          />
                        </FormItemWrapper>
                        <AntdButton
                          className={classNames("__wab_instance", sty.button)}
                          submitsForm={true}
                          type={"primary"}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text
                            )}
                          >
                            {"Submit"}
                          </div>
                        </AntdButton>
                      </FormWrapper>
                    );
                  })()}
                </React.Fragment>
              )}
            </ph.DataCtxReader>
          </PageLayout>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "pageLayout", "table", "form", "button", "text"],
  pageLayout: ["pageLayout", "table", "form", "button", "text"],
  table: ["table"],
  form: ["form", "button", "text"],
  button: ["button", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    pageLayout: makeNodeComponent("pageLayout"),
    table: makeNodeComponent("table"),
    form: makeNodeComponent("form"),
    button: makeNodeComponent("button"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
