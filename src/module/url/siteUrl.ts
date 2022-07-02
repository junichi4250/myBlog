export const SiteUrl = {
  // - トップ
  Top: {
    path: "/",
    pageName: "トップ",
  },

  // - プロフィールページ
  Profile: {
    path: "/profile",
    pageName: "プロフィール",
  },

  // - ブログ
  Blog: {
    List: {
      path: "/blog",
      pageName: "ブログ記事一覧",
    },
    Details: {
      path: "/blog/[id]",
      pageName: "ブログ記事詳細",
    },
  },

  // - 免責事項
  Disclaimer: {
    path: "/disclaimer",
    pageName: "免責事項",
  },

  // - プライバシーポリシー
  PrivacyPolicy: {
    path: "/privacy_policy",
    pageName: "プライバシーポリシー",
  },

  // - 404ページ
  NotFound: {
    path: "*",
    pageName: "ページが見つかりません",
  },

  // - 500ページ
  InternalServerError: {
    path: "/500",
    pageName: "ページが表示できません",
  },
};
