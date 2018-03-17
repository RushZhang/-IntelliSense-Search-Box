package com.rush;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

public class SearchServlet extends HttpServlet {
	
	static List<String> datas = new ArrayList<String>();
	static {
		datas.add("ajaxDora");
		datas.add("ajaxPost");
		datas.add("ajaxKop");
		datas.add("ajaxHasu");
		datas.add("ajaxJest");
		datas.add("apple");
		datas.add("banana");
		datas.add("cat");
		datas.add("dog");
		datas.add("elephant");
	}
	
	
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//首先获得客户端发来的数据keyword
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		String keyword = request.getParameter("keyword");
		//获得之后处理
		List<String> listData = getData(keyword);
		//返回json格式
//		System.out.println(JSONArray.fromObject(listData));
		response.getWriter().write(JSONArray.fromObject(listData).toString());
	}
	
	//获得关联数据的方法
	public List<String> getData(String keyword){
		List<String> list = new ArrayList<String>();
		for (String data: datas) {
			if(data.contains(keyword)) {
				list.add(data);
			}
		}
		return list;
	}
	
	
}
