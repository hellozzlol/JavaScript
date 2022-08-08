<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>글 목록</title>
<script src="js/jquery-3.6.0.min.js"></script>
</head>
<body>
	<div align="center">
		<div>게시글 목록</div>
		<div>
		<form id="frm">
		<select id="key" name="key">
		<option value="notice_title">제목</option>
		<option value="notice_subject">내용</option>
		<option value="notice_writer">작성자</option>	
		</select> &nbsp;
		<input type="text" id="val" name="val">&nbsp;&nbsp;
		<input type="button" value="검색" onclick="noticeSearch()">
		
		
		</form>
		</div><br>
		<div>
			<table border="1">
				<thead>
					<tr>
						<th width="70">순번</th>
						<th width="130">작성자</th>
						<th width="200">제목</th>
						<th width="130">작성일자</th>
						<th width="70">조회수</th>
					</tr>
				</thead>
				<tbody>
					<c:choose>
						<c:when test="${not empty list }">
							<c:forEach items="${list }" var="b">
								<tr>
									<td>${b.noticeId }</td>
									<td>${b.noticeWriter }</td>
									<td>${b.noticeTitle }</td>
									<td>${b.noticeDate }</td>
									<td>${b.noticeHit }</td>
								</tr>
							</c:forEach>
						</c:when>
						<c:otherwise>
							<tr>
								<td colspan="6" align="center">게시글이 존재하지않습니다</td>
							</tr>
						</c:otherwise>
					</c:choose>
				</tbody>


			</table>
			

		</div><br>
		<div>
		
		<button type="button" onclick="location.href='noticeForm.do'">글 등록</button>
		
		</div>
	</div>
	<script type="text/javascript">
		function noticeSearch() {
			let key = $("#key").val();
			let val = $("#val").val();
			$.ajax({
				url : "ajaxNoticeSearche.do",
				type : "post",
				data : {key : key, val : val},
				dataType : "json",
				success : function(result){
					console.log(result);
				},
				error : function() {
					
				}
			})
		}
	</script>
</body>
</html>