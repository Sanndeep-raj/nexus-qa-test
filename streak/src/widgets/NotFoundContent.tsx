/**
 * Copyright(c) 2025 Valoriz Digital Private Ltd.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Valoriz ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Valoriz.
 *
 * @author Neeraj
 */

const NotFoundContent = () => {
  return (<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 px-4">
    <div className="text-center max-w-md">
      <h1 className="text-[120px] font-extrabold text-gray-800 leading-none">
        404
      </h1>

      <h2 className="text-2xl font-semibold text-gray-700 mt-4">
        Oops! Page not found
      </h2>

      <p className="text-gray-500 mt-2">
        The page you're looking for doesn't exist or was moved.
      </p>

      <div className="mt-6">
        <a
          href="/"
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  </div>)
}

export default NotFoundContent;