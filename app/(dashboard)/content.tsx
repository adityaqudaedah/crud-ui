"use client";

import { Button, Table } from "flowbite-react";
import type { NextPage } from "next";
import Link from "next/link";
import type { FC } from "react";

export const HomePageContent: NextPage = function () {
  return (
    <div className="p-6">
      <section>
        <div className="flex items-center justify-between">
          {" "}
          <header>
            <h2 className="mb-3 mt-9 text-4xl font-bold dark:text-gray-200">
              Product Tables
            </h2>
          </header>
          <div>
            <Button>Add</Button>
          </div>
        </div>

        <div className="max-w-full overflow-x-scroll">
          <TablesExample />
        </div>
      </section>
    </div>
  );
};

const TablesExample: FC = function () {
  return (
    <Table striped>
      <Table.Head>
        <Table.HeadCell>Product name</Table.HeadCell>
        <Table.HeadCell>Color</Table.HeadCell>
        <Table.HeadCell>Category</Table.HeadCell>
        <Table.HeadCell>Price</Table.HeadCell>
        <Table.HeadCell>Action</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Apple MacBook Pro 17&quot;
          </Table.Cell>
          <Table.Cell>Sliver</Table.Cell>
          <Table.Cell>Laptop</Table.Cell>
          <Table.Cell>$2999</Table.Cell>
          <Table.Cell>
            <div className="flex items-center space-x-2">
              <Link
                href="/"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </Link>
              <span>|</span>
              <Link
                href="/"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Delete
              </Link>
            </div>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Microsoft Surface Pro
          </Table.Cell>
          <Table.Cell>White</Table.Cell>
          <Table.Cell>Laptop PC</Table.Cell>
          <Table.Cell>$1999</Table.Cell>
          <Table.Cell>
            <div className="flex items-center space-x-2">
              <Link
                href="/"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </Link>
              <span>|</span>
              <Link
                href="/"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Delete
              </Link>
            </div>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Magic Mouse 2
          </Table.Cell>
          <Table.Cell>Black</Table.Cell>
          <Table.Cell>Accessories</Table.Cell>
          <Table.Cell>$99</Table.Cell>
          <Table.Cell>
            <div className="flex items-center space-x-2">
              <Link
                href="/"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </Link>
              <span>|</span>
              <Link
                href="/"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Delete
              </Link>
            </div>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Google Pixel Phone
          </Table.Cell>
          <Table.Cell>Gray</Table.Cell>
          <Table.Cell>Phone</Table.Cell>
          <Table.Cell>$799</Table.Cell>
          <Table.Cell>
            <div className="flex items-center space-x-2">
              <Link
                href="/"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </Link>
              <span>|</span>
              <Link
                href="/"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Delete
              </Link>
            </div>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Apple Watch 5
          </Table.Cell>
          <Table.Cell>failure</Table.Cell>
          <Table.Cell>Wearables</Table.Cell>
          <Table.Cell>$999</Table.Cell>
          <Table.Cell>
            <div className="flex items-center space-x-2">
              <Link
                href="/"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </Link>
              <span>|</span>
              <Link
                href="/"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Delete
              </Link>
            </div>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};
